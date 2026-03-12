Blockchain Based Document Verification System
1. Project Description

The Blockchain Based Document Verification System is a secure platform designed to verify and authenticate documents using blockchain technology. Traditional document verification systems are vulnerable to fraud, tampering, and duplication. This project solves those issues by storing document hashes on a blockchain, ensuring that the documents cannot be altered once recorded.

The system allows organizations such as universities, companies, and government institutions to upload and verify documents in a tamper-proof and transparent manner. When a document is uploaded, a unique cryptographic hash is generated and stored on the blockchain. During verification, the system compares the hash of the submitted document with the stored hash to confirm its authenticity.

This approach improves security, transparency, and trust in document verification processes.
2. Key Features

• Secure Document Storage
Documents are verified using blockchain to prevent tampering or forgery.

• Hash-Based Verification
Each uploaded document is converted into a unique hash value for verification.

• Tamper-Proof Records
Once stored on the blockchain, records cannot be altered.

3. Technologies Used
Frontend

React.js – Building the interactive user interface

JavaScript – Application logic

CSS – Styling and responsive design

HTML – Structure of web pages

Backend

Node.js – Server-side logic and API handling

Express.js – Backend framework for building APIs

Blockchain / Security

Blockchain Concept – Immutable record storage
4. How the System Works
User Uploads Document
The user uploads a document (certificate, ID, etc.) through the web interface.

Hash Generation
The system generates a unique cryptographic hash of the uploaded document.

Blockchain Storage
The generated hash value is stored on the blockchain network, making it tamper-proof.

Verification Request
When someone wants to verify the document, they upload the same document to the system.

Hash Comparison
The system generates a new hash and compares it with the hash stored on the blockchain.
If both hashes match → Document is Authentic, otherwise → Document is Tampered or Fake.

Cryptographic Hashing (SHA-256) – Secure document fingerprint generation

5. Applications

• Educational Institutions
Verification of certificates and academic records.

• Recruitment and HR
Companies can verify employee credentials.

• Government Services
Secure verification of identity documents.

• Healthcare
Medical records validation.

• Legal Sector
Secure contract and legal document verification.

6. Conclusion

The Blockchain Based Document Verification System provides a secure and efficient solution for validating important documents. By integrating blockchain technology with modern web development frameworks like React and Node.js, the system ensures transparency, security, and reliability in document verification. This approach significantly reduces the risk of document forgery and enhances trust between organizations and users.

<img width="835" height="673" alt="image" src="https://github.com/user-attachments/assets/b9722653-fa48-4b36-becb-bbe12a93268d" />
