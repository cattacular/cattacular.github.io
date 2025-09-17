---
layout: page
title: Exquisite Corpse
permalink: /exquisite-corpse/
---

# Exquisite Corpse Drawing Game

Welcome to the Exquisite Corpse drawing game! This is a collaborative art project where three people draw different parts of a body without seeing what the others have drawn.

## How it works:
1. **Draw a section**: Choose to draw the top, middle, or bottom of a body
2. **Save your drawing**: Choose to save locally or share with the community
3. **Generate combinations**: The game randomly combines drawings from each category to create unique creatures!

### Save Options:
- **Local Save**: Saves to your device only - you can use it in combinations on this computer
- **Share**: Downloads the file and opens your email to send it to me for community sharing

## Categories:
- **Top**: Head, neck, and shoulders
- **Middle**: Torso, arms, and waist
- **Bottom**: Legs, feet, and tail (if applicable)

<div id="exquisite-corpse-game">
  <div class="game-section">
    <h2>Create Your Drawing</h2>
    <div class="drawing-interface">
      <div class="category-selector">
        <label for="category">Choose which part to draw:</label>
        <select id="category" name="category">
          <option value="top">Top (Head & Shoulders)</option>
          <option value="middle">Middle (Torso & Arms)</option>
          <option value="bottom">Bottom (Legs & Feet)</option>
        </select>
      </div>
      
      <div class="canvas-container">
        <canvas id="drawingCanvas" width="400" height="300"></canvas>
        <div class="canvas-controls">
          <input type="color" id="colorPicker" value="#000000">
          <input type="range" id="brushSize" min="1" max="20" value="3">
          <span id="brushSizeLabel">Size: 3</span>
          <button id="clearCanvas">Clear</button>
          <button id="localSave">Local Save</button>
          <button id="shareDrawing">Share</button>
        </div>
      </div>
      
      <div class="upload-section">
        <h3>Or Upload an Existing Image</h3>
        <input type="file" id="imageUpload" accept="image/*" style="margin-bottom: 10px;">
        <button id="loadImage">Load Image to Canvas</button>
      </div>
    </div>
  </div>

  <div class="game-section">
    <h2>Generate Random Combinations</h2>
    <div class="combination-generator">
      <button id="generateCombination">Create Random Creature!</button>
      <div id="combinationResult" class="combination-display"></div>
    </div>
  </div>

  <div class="game-section">
    <h2>Gallery</h2>
    <div class="gallery">
      <div class="gallery-category">
        <h3>Top Drawings</h3>
        <div id="topGallery" class="gallery-grid"></div>
      </div>
      <div class="gallery-category">
        <h3>Middle Drawings</h3>
        <div id="middleGallery" class="gallery-grid"></div>
      </div>
      <div class="gallery-category">
        <h3>Bottom Drawings</h3>
        <div id="bottomGallery" class="gallery-grid"></div>
      </div>
    </div>
  </div>

  <div class="game-section">
    <h2>How to Share Your Drawings</h2>
    <div class="sharing-instructions">
      <p>Want to share your drawings with the community? Here's how:</p>
      <ol>
        <li><strong>Create your drawing</strong> using the canvas above</li>
        <li><strong>Click "Share"</strong> - this will download your drawing and open your email</li>
        <li><strong>Attach the downloaded file</strong> to the email (it will be in your Downloads folder)</li>
        <li><strong>Send the email</strong> - I'll add your drawing to the shared gallery!</li>
      </ol>
      <p><em>Note: It may take a few days for shared drawings to appear in the gallery as I manually add them to the server.</em></p>
    </div>
  </div>
</div>

<style>
#exquisite-corpse-game {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}

.game-section {
  margin-bottom: 40px;
  padding: 20px;
  background: #f8f9fa;
  border-radius: 10px;
  border: 2px solid #e9ecef;
}

.drawing-interface {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.category-selector {
  text-align: center;
}

.category-selector label {
  display: block;
  margin-bottom: 10px;
  font-weight: bold;
  color: #495057;
}

.category-selector select {
  padding: 8px 12px;
  border: 2px solid #ced4da;
  border-radius: 5px;
  font-size: 16px;
  background: white;
}

.canvas-container {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

#drawingCanvas {
  border: 2px solid #dee2e6;
  border-radius: 5px;
  cursor: crosshair;
  background: white;
}

.canvas-controls {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap;
}

.canvas-controls input, .canvas-controls button {
  padding: 8px 12px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 14px;
}

.canvas-controls button {
  color: white;
  border: none;
  cursor: pointer;
  transition: background 0.2s;
}

#clearCanvas {
  background: #6c757d;
}

#clearCanvas:hover {
  background: #545b62;
}

#localSave {
  background: #007bff;
}

#localSave:hover {
  background: #0056b3;
}

#shareDrawing {
  background: #28a745;
}

#shareDrawing:hover {
  background: #1e7e34;
}

.upload-section {
  text-align: center;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  margin-top: 20px;
}

.upload-section h3 {
  margin-bottom: 15px;
  color: #495057;
}

.upload-section input[type="file"] {
  display: block;
  margin: 0 auto 10px;
  padding: 8px;
  border: 2px solid #ced4da;
  border-radius: 5px;
  background: white;
}

.upload-section button {
  background: #17a2b8;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.2s;
}

.upload-section button:hover {
  background: #138496;
}

.sharing-instructions {
  background: #e7f3ff;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #007bff;
}

.sharing-instructions p {
  margin-bottom: 15px;
  color: #495057;
}

.sharing-instructions ol {
  margin-left: 20px;
  color: #495057;
}

.sharing-instructions li {
  margin-bottom: 8px;
}

.sharing-instructions em {
  color: #6c757d;
  font-size: 14px;
}

.combination-generator {
  text-align: center;
}

#generateCombination {
  background: #28a745;
  color: white;
  border: none;
  padding: 15px 30px;
  font-size: 18px;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
}

#generateCombination:hover {
  background: #1e7e34;
}

.combination-display {
  margin-top: 20px;
  min-height: 200px;
  border: 2px dashed #ced4da;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f8f9fa;
}

.combination-display.has-content {
  border: 2px solid #28a745;
  background: white;
  flex-direction: column;
  gap: 10px;
}

.creature-combination {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
  background: white;
  border-radius: 10px;
  padding: 10px;
  box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}

.creature-section {
  display: flex;
  justify-content: center;
  align-items: center;
}

.creature-section img {
  max-width: 200px;
  max-height: 150px;
  border: none;
  border-radius: 0;
  display: block;
  object-fit: contain;
}

/* Remove border radius from middle sections to create seamless connection */
.creature-top img {
  border-radius: 10px 10px 0 0;
}

.creature-middle img {
  border-radius: 0;
}

.creature-bottom img {
  border-radius: 0 0 10px 10px;
}

/* Add subtle shadow between sections for depth */
.creature-top {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.creature-middle {
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}

.creature-bottom {
  box-shadow: 0 -1px 2px rgba(0,0,0,0.05);
}

.gallery {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.gallery-category {
  background: white;
  padding: 15px;
  border-radius: 8px;
  border: 1px solid #dee2e6;
}

.gallery-category h3 {
  text-align: center;
  margin-bottom: 15px;
  color: #495057;
  border-bottom: 2px solid #e9ecef;
  padding-bottom: 10px;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
}

.gallery-item {
  text-align: center;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  background: #f8f9fa;
}

.gallery-item img {
  max-width: 100%;
  height: auto;
  border-radius: 3px;
}

.gallery-item .filename {
  font-size: 12px;
  color: #6c757d;
  margin-top: 5px;
  word-break: break-all;
}

@media (max-width: 768px) {
  .canvas-controls {
    flex-direction: column;
  }
  
  #drawingCanvas {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
  
  .gallery {
    grid-template-columns: 1fr;
  }
}
</style>

<script>
// Exquisite Corpse Game JavaScript
class ExquisiteCorpseGame {
  constructor() {
    this.canvas = document.getElementById('drawingCanvas');
    this.ctx = this.canvas.getContext('2d');
    this.isDrawing = false;
    this.currentColor = '#000000';
    this.currentBrushSize = 3;
    
    this.initializeCanvas();
    this.setupEventListeners();
    this.loadGallery();
  }

  initializeCanvas() {
    // Set up canvas for drawing
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  setupEventListeners() {
    // Drawing events
    this.canvas.addEventListener('mousedown', (e) => this.startDrawing(e));
    this.canvas.addEventListener('mousemove', (e) => this.draw(e));
    this.canvas.addEventListener('mouseup', () => this.stopDrawing());
    this.canvas.addEventListener('mouseout', () => this.stopDrawing());

    // Touch events for mobile
    this.canvas.addEventListener('touchstart', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mousedown', {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
    });

    this.canvas.addEventListener('touchmove', (e) => {
      e.preventDefault();
      const touch = e.touches[0];
      const mouseEvent = new MouseEvent('mousemove', {
        clientX: touch.clientX,
        clientY: touch.clientY
      });
      this.canvas.dispatchEvent(mouseEvent);
    });

    this.canvas.addEventListener('touchend', (e) => {
      e.preventDefault();
      const mouseEvent = new MouseEvent('mouseup', {});
      this.canvas.dispatchEvent(mouseEvent);
    });

    // Control events
    document.getElementById('colorPicker').addEventListener('change', (e) => {
      this.currentColor = e.target.value;
    });

    document.getElementById('brushSize').addEventListener('input', (e) => {
      this.currentBrushSize = e.target.value;
      document.getElementById('brushSizeLabel').textContent = `Size: ${e.target.value}`;
    });

    document.getElementById('clearCanvas').addEventListener('click', () => {
      this.clearCanvas();
    });

    document.getElementById('localSave').addEventListener('click', () => {
      this.localSave();
    });

    document.getElementById('shareDrawing').addEventListener('click', () => {
      this.shareDrawing();
    });

    document.getElementById('generateCombination').addEventListener('click', () => {
      this.generateRandomCombination();
    });

    document.getElementById('loadImage').addEventListener('click', () => {
      this.loadImageToCanvas();
    });
  }

  getMousePos(e) {
    const rect = this.canvas.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  }

  startDrawing(e) {
    this.isDrawing = true;
    const pos = this.getMousePos(e);
    this.ctx.beginPath();
    this.ctx.moveTo(pos.x, pos.y);
  }

  draw(e) {
    if (!this.isDrawing) return;
    
    const pos = this.getMousePos(e);
    this.ctx.strokeStyle = this.currentColor;
    this.ctx.lineWidth = this.currentBrushSize;
    this.ctx.lineTo(pos.x, pos.y);
    this.ctx.stroke();
  }

  stopDrawing() {
    this.isDrawing = false;
    this.ctx.beginPath();
  }

  clearCanvas() {
    this.ctx.fillStyle = 'white';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

  loadImageToCanvas() {
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
    
    if (!file) {
      alert('Please select an image file first!');
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        // Clear canvas and draw the image
        this.clearCanvas();
        
        // Calculate scaling to fit image in canvas while maintaining aspect ratio
        const canvasAspect = this.canvas.width / this.canvas.height;
        const imageAspect = img.width / img.height;
        
        let drawWidth, drawHeight, offsetX = 0, offsetY = 0;
        
        if (imageAspect > canvasAspect) {
          // Image is wider than canvas
          drawWidth = this.canvas.width;
          drawHeight = this.canvas.width / imageAspect;
          offsetY = (this.canvas.height - drawHeight) / 2;
        } else {
          // Image is taller than canvas
          drawHeight = this.canvas.height;
          drawWidth = this.canvas.height * imageAspect;
          offsetX = (this.canvas.width - drawWidth) / 2;
        }
        
        this.ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  localSave() {
    const category = document.getElementById('category').value;
    const dataURL = this.canvas.toDataURL('image/png');
    
    // Create a download link
    const link = document.createElement('a');
    link.download = `exquisite-corpse-${category}-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
    
    // Store in localStorage for local use
    this.storeDrawing(category, dataURL);
    
    alert(`Drawing saved locally as ${link.download}! You can use it in random combinations on this device.`);
  }

  shareDrawing() {
    const category = document.getElementById('category').value;
    const dataURL = this.canvas.toDataURL('image/png');
    
    // Create a download link first
    const link = document.createElement('a');
    link.download = `exquisite-corpse-${category}-${Date.now()}.png`;
    link.href = dataURL;
    link.click();
    
    // Store locally as well
    this.storeDrawing(category, dataURL);
    
    // Create email content
    const subject = `Exquisite Corpse Drawing - ${category.charAt(0).toUpperCase() + category.slice(1)} Section`;
    const body = `Hi Jaevyn!

I've created a drawing for the Exquisite Corpse game and would like to share it with the community.

Drawing Details:
- Category: ${category.charAt(0).toUpperCase() + category.slice(1)} (${this.getCategoryDescription(category)})
- Filename: ${link.download}
- Created: ${new Date().toLocaleString()}

Please add this drawing to the shared gallery so others can see it in random combinations!

Thanks for creating this fun collaborative art project!

Best regards,
[Your name here]`;

    // Create mailto link
    const mailtoLink = `mailto:jatomsynergies@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailtoLink;
    
    // Show confirmation
    alert(`Email client opened! Please attach the downloaded file (${link.download}) to your email and send it to share your drawing with the community.`);
  }

  getCategoryDescription(category) {
    const descriptions = {
      top: 'Head, neck, and shoulders',
      middle: 'Torso, arms, and waist', 
      bottom: 'Legs, feet, and tail'
    };
    return descriptions[category] || category;
  }

  storeDrawing(category, dataURL) {
    const drawings = JSON.parse(localStorage.getItem('exquisiteCorpseDrawings') || '{}');
    if (!drawings[category]) {
      drawings[category] = [];
    }
    drawings[category].push({
      dataURL: dataURL,
      timestamp: Date.now(),
      filename: `exquisite-corpse-${category}-${Date.now()}.png`
    });
    localStorage.setItem('exquisiteCorpseDrawings', JSON.stringify(drawings));
    this.loadGallery();
  }

  loadGallery() {
    const drawings = JSON.parse(localStorage.getItem('exquisiteCorpseDrawings') || '{}');
    const categories = ['top', 'middle', 'bottom'];
    
    categories.forEach(category => {
      const gallery = document.getElementById(`${category}Gallery`);
      gallery.innerHTML = '';
      
      // Load local drawings
      if (drawings[category] && drawings[category].length > 0) {
        drawings[category].forEach(drawing => {
          const item = document.createElement('div');
          item.className = 'gallery-item';
          item.innerHTML = `
            <img src="${drawing.dataURL}" alt="${drawing.filename}">
            <div class="filename">${drawing.filename}</div>
          `;
          gallery.appendChild(item);
        });
      }
      
      // Load server images (if any exist)
      this.loadServerImages(category, gallery);
      
      // Show message if no drawings at all
      if (gallery.children.length === 0) {
        gallery.innerHTML = '<p style="text-align: center; color: #6c757d; font-style: italic;">No drawings yet. Be the first to create one!</p>';
      }
    });
  }

  loadServerImages(category, gallery) {
    // In a real implementation, this would fetch from a server endpoint
    // For now, we'll create some placeholder server images
    const serverImages = this.getServerImages(category);
    
    serverImages.forEach(image => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      item.innerHTML = `
        <img src="${image.src}" alt="${image.filename}">
        <div class="filename">${image.filename}</div>
      `;
      gallery.appendChild(item);
    });
  }

  getServerImages(category) {
    // This would normally fetch from your server
    // For demo purposes, we'll return some placeholder data
    const serverImages = {
      top: [
        { src: '/assets/images/JLogo.png', filename: 'sample-head-1.png' }
      ],
      middle: [
        { src: '/assets/images/JLogo.png', filename: 'sample-torso-1.png' }
      ],
      bottom: [
        { src: '/assets/images/JLogo.png', filename: 'sample-legs-1.png' }
      ]
    };
    
    return serverImages[category] || [];
  }

  generateRandomCombination() {
    const drawings = JSON.parse(localStorage.getItem('exquisiteCorpseDrawings') || '{}');
    const categories = ['top', 'middle', 'bottom'];
    const result = document.getElementById('combinationResult');
    
    // Get all available drawings (local + server) for each category
    const allDrawings = {};
    categories.forEach(category => {
      allDrawings[category] = [];
      
      // Add local drawings
      if (drawings[category] && drawings[category].length > 0) {
        allDrawings[category].push(...drawings[category]);
      }
      
      // Add server drawings
      const serverImages = this.getServerImages(category);
      allDrawings[category].push(...serverImages);
    });
    
    // Check if we have at least one drawing in each category
    const hasAllCategories = categories.every(category => 
      allDrawings[category].length > 0
    );
    
    if (!hasAllCategories) {
      result.innerHTML = '<p style="color: #dc3545; text-align: center;">Please create at least one drawing in each category (top, middle, bottom) before generating combinations.</p>';
      return;
    }
    
    // Select random drawings from each category
    const selectedDrawings = categories.map(category => {
      const categoryDrawings = allDrawings[category];
      const randomIndex = Math.floor(Math.random() * categoryDrawings.length);
      return categoryDrawings[randomIndex];
    });
    
    // Display the combination
    result.className = 'combination-display has-content';
    result.innerHTML = `
      <h3>Your Random Creature!</h3>
      <div class="creature-combination">
        ${selectedDrawings.map((drawing, index) => `
          <div class="creature-section creature-${categories[index]}">
            <img src="${drawing.dataURL || drawing.src}" alt="${drawing.filename}">
          </div>
        `).join('')}
      </div>
      <button onclick="this.parentElement.innerHTML=''; this.parentElement.className='combination-display';" 
              style="margin-top: 15px; padding: 8px 16px; background: #6c757d; color: white; border: none; border-radius: 5px; cursor: pointer;">
        Clear
      </button>
    `;
  }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
  new ExquisiteCorpseGame();
});
</script>
