// server.js - upload + verify + download
const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");
const cors = require("cors");

const { uploadDocument } = require('./controllers/uploadController');
const { verifyDocument } = require('./controllers/verifyController');


const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5000;
const STORAGE_DIR = path.join(__dirname, 'storage');
if (!fs.existsSync(STORAGE_DIR)) fs.mkdirSync(STORAGE_DIR);

// multer memory storage so we can hash before storing
const uploadMemory = multer({ storage: multer.memoryStorage() });
app.post("/upload", uploadMemory.single("document"), uploadDocument);


// helper: compute sha256 of a file
function sha256Hex(buffer) {
  return crypto.createHash('sha256').update(buffer).digest('hex');
}

app.get("/", (req, res) => {
  res.send("Document Verification Backend Running Successfully!");
});

// UPLOAD
app.post("/upload", uploadMemory.single("document"), (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file selected" });

  const originalName = req.file.originalname;
  const ext = path.extname(originalName);
  const storedName = Date.now() + ext;
  const savedPath = path.join(STORAGE_DIR, storedName);

  fs.writeFileSync(savedPath, req.file.buffer);

  const hash = sha256Hex(req.file.buffer);

  res.json({
    message: "File uploaded successfully!",
    storedName,
    originalName,
    sha256: hash
  });
});

// VERIFY
app.post('/upload', uploadMemory.single('document'), (req, res) => {
  uploadDocument(req, res, db, STORAGE_DIR);
});


// DOWNLOAD
app.get("/download/:storedName", (req, res) => {
  const p = path.join(STORAGE_DIR, req.params.storedName);
  if (!fs.existsSync(p)) return res.status(404).json({ error: "Not found" });
  res.download(p);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
