import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import authRoutes from './routes/auth.route.js';
import messageRoutes from './routes/messages.route.js';

dotenv.config();

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Get directory name for ES modules
const __dirname = path.resolve();

const PORT = process.env.PORT || 3000;

// API Routes
app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

// Serve frontend in production
if (process.env.NODE_ENV === 'production') {
  // Serve static files from the frontend build directory
  app.use(express.static(path.join(__dirname, '/frontend/dist')));

  // Handle all other routes and send index.html
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
  });
} else {
  // For development mode
  app.get('/', (req, res) => {
    res.send('API is running...');
  });
}

app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
