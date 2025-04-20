/**
 * STEM Pathways - Simple Server
 * 
 * This is a simple Express server that serves the static HTML, CSS, and JavaScript files
 * for the STEM Pathways website.
 */

import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Serve static files from the 'html' directory
app.use(express.static(join(__dirname, 'html')));

// Handle 404s by redirecting to index.html
app.use((req, res) => {
  res.status(404).sendFile(join(__dirname, 'html', 'index.html'));
});

// Start the server
app.listen(port, '0.0.0.0', () => {
  console.log(`STEM Pathways server running at http://0.0.0.0:${port}`);
});