---
layout: post
title: Cell Shading
categories: Portfolio GameDesign Blender Renders
---
![Sketch_Front]({{"assets/images/Cell_Shading/Sketch_Front.png" | relative_url }})
Varius renders using cell shading techniques


<div style="text-align: center;">
  <video controls loop style="max-width: 100%; width: 600px; height: auto;">
    <source src="{{ site.baseurl }}/assets/Video/CellShrooms.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

First of all, what is cell shading?
You know when you look at a round object that has a shadow casted on it? There is a gradiant of light to dark, from where more light hits the object, to where less hits. This is pretty everyday stuff, you likely know how shadows work.
Cell shading is what would happen if instead of a natrual smooth gradiant, we broke it into chunks and assigned a specific color to each chunk.
For example

|Amount of light| Assigned Color|
|0%  - 10% | Jet black |
|10% - 40% | Dark Grey |
|40% - 80% | Light Grey |
|80% - 100%| White |

<!-- ![Sketch_Front]({{"assets/images/Cell_Shading/Sketch_Front.png" | relative_url }}) -->
![Sketch_Side]({{"assets/images/Cell_Shading/Sketch_Side.png" | relative_url }})
![Sketch_Dark]({{"assets/images/Cell_Shading/Sketch_Front_Dark.png" | relative_url }})