import express from 'express';
import OpenAI from 'openai';
import cors from 'cors'; // 1. IMPORT THE CORS PACKAGE

const app = express();

// --- SETUP MIDDLEWARE ---
app.use(express.json());
app.use(cors()); // 2. THIS IS THE FIX. It tells your server to accept requests.

// ... the rest of your server code remains the same ...

// --- YOUR API ROUTE ---
app.post('/api/generate-idea', async (req, res) => {
  // ... your logic to call OpenAI ...
});

// --- START THE SERVER ---
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});