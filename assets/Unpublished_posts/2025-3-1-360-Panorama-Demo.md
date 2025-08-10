---
layout: post
title: 360° Panorama Demo
categories: Portfolio Demo Panorama
---

# 360° Panorama Viewer Demo

This post demonstrates how to embed interactive 360° panoramas in your Jekyll blog posts.

## How to Use

To add a 360° panorama to any post, simply use this include:

```liquid
{% include panorama.html image="/assets/images/your-panorama.jpg" id="unique-id" %}
```

## Example Panorama

Here's an example of how the panorama viewer looks (you'll need to replace the image path with your actual panorama):

{% include panorama.html image="/assets/images/sample-panorama.jpg" id="demo-panorama" height="500px" %}

## Features

The panorama viewer includes:
- **Click and drag** to look around
- **Mouse wheel** to zoom in/out
- **Auto-rotation** (can be disabled)
- **Fullscreen mode**
- **Compass indicator**
- **Zoom controls**

## Image Requirements

For best results, your panorama should be:
- **Equirectangular format** (2:1 aspect ratio)
- **High resolution** (at least 2048x1024 pixels)
- **JPEG or PNG format**
- **Properly stitched** (no visible seams)

## Customization Options

You can customize the viewer with these parameters:

```liquid
{% include panorama.html 
   image="/path/to/image.jpg" 
   id="my-panorama" 
   height="600px" 
   width="800px" %}
```

## Creating 360° Panoramas

To create your own 360° panoramas, you can use:
- **Smartphone apps**: Google Street View, 360 Camera
- **DSLR cameras** with fisheye lenses
- **360° cameras**: GoPro Fusion, Insta360
- **Software**: PTGui, Hugin, Adobe Photoshop

The resulting image should be in equirectangular projection for best compatibility with the viewer. 