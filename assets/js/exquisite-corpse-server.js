// Server-side functionality for Exquisite Corpse game
// This would typically be implemented as a backend service

class ExquisiteCorpseServer {
  constructor() {
    this.baseUrl = '/api/exquisite-corpse';
  }

  // Upload a drawing to the server
  async uploadDrawing(category, imageData, filename) {
    try {
      const formData = new FormData();
      formData.append('category', category);
      formData.append('image', imageData);
      formData.append('filename', filename);

      const response = await fetch(`${this.baseUrl}/upload`, {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Upload failed: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Upload error:', error);
      throw error;
    }
  }

  // Get all drawings for a specific category
  async getDrawings(category) {
    try {
      const response = await fetch(`${this.baseUrl}/drawings/${category}`);
      
      if (!response.ok) {
        throw new Error(`Failed to fetch drawings: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Fetch error:', error);
      return [];
    }
  }

  // Get a random combination of drawings
  async getRandomCombination() {
    try {
      const response = await fetch(`${this.baseUrl}/random-combination`);
      
      if (!response.ok) {
        throw new Error(`Failed to get combination: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Combination error:', error);
      return null;
    }
  }

  // Get statistics about the drawings
  async getStats() {
    try {
      const response = await fetch(`${this.baseUrl}/stats`);
      
      if (!response.ok) {
        throw new Error(`Failed to get stats: ${response.statusText}`);
      }

      return await response.json();
    } catch (error) {
      console.error('Stats error:', error);
      return null;
    }
  }
}

// Example backend API endpoints (Node.js/Express)
/*
const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

// Upload endpoint
app.post('/api/exquisite-corpse/upload', upload.single('image'), (req, res) => {
  const { category, filename } = req.body;
  const file = req.file;
  
  if (!file) {
    return res.status(400).json({ error: 'No image uploaded' });
  }
  
  // Move file to appropriate category folder
  const categoryDir = path.join('assets/images/exquisite-corpse', category);
  if (!fs.existsSync(categoryDir)) {
    fs.mkdirSync(categoryDir, { recursive: true });
  }
  
  const finalPath = path.join(categoryDir, filename);
  fs.renameSync(file.path, finalPath);
  
  res.json({ 
    success: true, 
    filename: filename,
    category: category,
    path: finalPath
  });
});

// Get drawings for category
app.get('/api/exquisite-corpse/drawings/:category', (req, res) => {
  const { category } = req.params;
  const categoryDir = path.join('assets/images/exquisite-corpse', category);
  
  if (!fs.existsSync(categoryDir)) {
    return res.json([]);
  }
  
  const files = fs.readdirSync(categoryDir)
    .filter(file => /\.(png|jpg|jpeg|gif)$/i.test(file))
    .map(file => ({
      filename: file,
      path: `/assets/images/exquisite-corpse/${category}/${file}`,
      category: category
    }));
  
  res.json(files);
});

// Get random combination
app.get('/api/exquisite-corpse/random-combination', (req, res) => {
  const categories = ['top', 'middle', 'bottom'];
  const combination = {};
  
  categories.forEach(category => {
    const categoryDir = path.join('assets/images/exquisite-corpse', category);
    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir)
        .filter(file => /\.(png|jpg|jpeg|gif)$/i.test(file));
      
      if (files.length > 0) {
        const randomFile = files[Math.floor(Math.random() * files.length)];
        combination[category] = {
          filename: randomFile,
          path: `/assets/images/exquisite-corpse/${category}/${randomFile}`,
          category: category
        };
      }
    }
  });
  
  res.json(combination);
});

// Get statistics
app.get('/api/exquisite-corpse/stats', (req, res) => {
  const categories = ['top', 'middle', 'bottom'];
  const stats = {};
  
  categories.forEach(category => {
    const categoryDir = path.join('assets/images/exquisite-corpse', category);
    if (fs.existsSync(categoryDir)) {
      const files = fs.readdirSync(categoryDir)
        .filter(file => /\.(png|jpg|jpeg|gif)$/i.test(file));
      stats[category] = files.length;
    } else {
      stats[category] = 0;
    }
  });
  
  res.json(stats);
});
*/

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ExquisiteCorpseServer;
}
