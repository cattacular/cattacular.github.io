---
layout: post
title: 3D Shoe Customizer
date: 2025-01-20 09:00:00 -0000
tags: [interactive, 3D, webgl]
categories: Portfolio 3D WebDesign
featured: false
teaser_image: 
---

Explore and customize 3D shoe models with interactive material options. Rotate the shoes on the turntable and experiment with different materials to see how they look.

<div id="shoe-viewer-container">
  <div class="shoe-controls-panel">
    <h3>Shoe Customizer</h3>
    
    <div class="control-group">
      <label for="shoe-select">Select Shoe:</label>
      <select id="shoe-select">
        <option value="default">Default Shoe</option>
        <!-- Add more shoe options here when you have multiple models -->
      </select>
    </div>

    <div class="control-group">
      <label for="material-select">Material:</label>
      <select id="material-select">
        <option value="leather-black">Black Leather</option>
        <option value="leather-brown">Brown Leather</option>
        <option value="canvas-white">White Canvas</option>
        <option value="canvas-black">Black Canvas</option>
        <option value="suede-tan">Tan Suede</option>
        <option value="suede-gray">Gray Suede</option>
        <option value="rubber-black">Black Rubber</option>
        <option value="metallic-silver">Silver Metallic</option>
        <option value="metallic-gold">Gold Metallic</option>
        <option value="fabric-red">Red Fabric</option>
        <option value="fabric-blue">Blue Fabric</option>
      </select>
    </div>

    <div class="control-group">
      <label for="rotation-speed">Rotation Speed:</label>
      <input type="range" id="rotation-speed" min="0" max="5" value="2" step="0.1">
      <span id="speed-value">2.0</span>
    </div>

    <div class="control-group">
      <button id="reset-camera">Reset View</button>
      <button id="toggle-rotation">Pause Rotation</button>
    </div>

    <div class="info-text">
      <p>🖱️ Click & drag to rotate</p>
      <p>🔄 Scroll to zoom</p>
      <p>📱 Optimized for mobile</p>
    </div>
  </div>

  <div class="shoe-viewer-wrapper">
    <div id="shoe-viewer">
      <div class="viewer-loading">Loading 3D Viewer...</div>
    </div>
  </div>
</div>

<link rel="stylesheet" href="{{ site.baseurl }}/assets/css/shoe-viewer.css">
<script src="{{ site.baseurl }}/assets/js/shoe-viewer.js"></script>

