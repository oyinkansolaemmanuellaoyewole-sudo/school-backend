import express from 'express';
import studentRoutes from './routes/studentRoute.js';
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from './config/db.js';
import bestfriendsRoutes from './routes/bestfriendsRoute.js';
 
dotenv.config();

const app = express();
const PORT = 5000;


app.use(cors({
  origin: ["http://localhost:3000", "https://school-frontend-one-gules.vercel.app"], 
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'User-Agent',
    'X-API-Key',
  ],
  credentials: true,
}));

app.use(express.json());


connectDB();



// API Key authentication middleware (using header)
const authenticateApiKey = (req, res, next) => {
  const requiredApiKey = process.env.API_SECRET_KEY;
  const apiKey = req.headers['x-api-key'];
  
  if (!apiKey || apiKey !== requiredApiKey) {
    return res.status(403).json({ error: 'Forbidden: Invalid API Key' });
  }
  
  next();
};

app.use('/api', authenticateApiKey)
app.use("/api", studentRoutes);
app.use("/api", bestfriendsRoutes);



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});