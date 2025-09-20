---
layout: post
title: Terminus
categories: Portfolio Game Design JCCEMA Unreal_Engine
---
![---]({{ site.baseurl }}/assets/images/Terminus/Terminus_Logo.png)


Terminus was the capstone of my Emerging Media Arts Bachelors degree. It's a first person stealth/puzzle shooter taking place on a giant arctic monorail. The project started during our senior year, with us having the summer before to put together the proposal.
I was the last person to join the Terminus team.


![Image Description]({{ site.baseurl }}/assets/images/Terminus/Terminus_Poloroid.jpg)


My capstone was originally going to be a scale 3D model of the CEMA building. Then informed by a survey of students, I would design a speculative future for the building. Alas when I was invited to join Terminus, I didn't hesitate to join. Especially since I was friends with all 3 of its members.


 - Harry Strong  - Director & Unreal Engine Whizz
 - Say Wa        - Lead 3D modeler & Texturer
 - Caleb Kirilov - Sound & Set Design


I joined as the Level Designer & builder. Offering some of my 3D modeling skills as well.
We worked on the project for the whole year culminating in a live showcase of 1 level of our game. Displayed in arcade cabinets we put together ourselves. The final showing was by far my favorite part of the experience, we got in costume and everything. Caleb had prepared the rest of the set to be like a retro living room.
We took a vertical slice approach, opposed the also very common, minimum viable product approach. A "Vertical Slice" is when a developement team takes a small section of a game. Usually just one level or scene, and polishes it to completion.
Whereas a minimum viable product would be looking at the scope of the whole game, and trying to make it playable beginning to end. Then going back and adding artistic details.


Rumor has it that developement may be continuing in the future...


![---]({{ site.baseurl }}/assets/images/Terminus/Terminus_Me.jpg)
![---]({{ site.baseurl }}/assets/images/Terminus/Terminus.png)

My favorite model that I've worked on for this project has been this suitcase. Inside is a high tech device that I don't want to reveal to much about...

![---]({{ site.baseurl }}/assets\images\Terminus\Suitcase_Boom02.png)
![---]({{ site.baseurl }}/assets\images\Terminus\Suitcase_Boom01.png)

## Interactive 3D Suitcase Model

Here's an interactive 3D model of the suitcase I created for Terminus. You can rotate, zoom, and explore the model to see the high-tech device inside!

<style>
.three-viewer-container {
    margin: 30px 0;
    text-align: center;
}

.three-viewer {
    width: 100%;
    max-width: 800px;
    height: 500px;
    margin: 0 auto;
    border: 2px solid #333;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    background: #222;
    position: relative;
}

.three-viewer canvas {
    display: block;
    width: 100%;
    height: 100%;
    cursor: grab;
}

.three-viewer canvas:active {
    cursor: grabbing;
}

.viewer-controls {
    position: absolute;
    top: 10px;
    left: 10px;
    background: rgba(0, 0, 0, 0.7);
    padding: 10px;
    border-radius: 5px;
    color: white;
    font-family: Arial, sans-serif;
    font-size: 12px;
    z-index: 10;
}

.viewer-controls h4 {
    margin: 0 0 5px 0;
    font-size: 14px;
}

.viewer-controls p {
    margin: 2px 0;
    font-size: 11px;
}

.viewer-info {
    position: absolute;
    bottom: 10px;
    right: 10px;
    background: rgba(0, 0, 0, 0.7);
    padding: 8px;
    border-radius: 5px;
    color: white;
    font-family: Arial, sans-serif;
    font-size: 11px;
    z-index: 10;
}

.viewer-loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-family: Arial, sans-serif;
    font-size: 16px;
    z-index: 10;
}

@media (max-width: 768px) {
    .three-viewer {
        height: 300px;
        margin: 15px auto;
    }
    
    .viewer-controls {
        font-size: 10px;
        padding: 8px;
    }
    
    .viewer-info {
        font-size: 10px;
        padding: 6px;
    }
}
</style>

<div class="three-viewer-container">
    <div class="three-viewer" id="terminus-suitcase">
        <div class="viewer-loading">Loading 3D Viewer...</div>
        <div class="viewer-controls">
            <h4>Terminus Suitcase - Interactive 3D Model</h4>
            <p>🖱️ Click & drag to rotate</p>
            <p>🔄 Scroll to zoom</p>
            <p>🎮 Auto-rotate enabled</p>
        </div>
        <div class="viewer-info">
            <p>Powered by Three.js</p>
        </div>
    </div>
</div>

<script>
document.addEventListener('DOMContentLoaded', function() {
    const viewerContainer = document.getElementById('terminus-suitcase');
    if (viewerContainer) {
        viewerContainer.setAttribute('data-model-path', '/assets/images/Terminus/Suitcase.obj');
    }
});
</script>

To be honest though, the best moment for me working on terminus was the last couple days leading up to open studios, where we presented to the public for the first time. Working on the arcade cabinets for this project was a blast. We ended up making 5 massive cabinets with no time to spare. The stain was drying as we put up the exhibit the day of the show. We pulled it off though and were able to get people playtesting our game. Caleb also knocked it out of the part with the set design. It was very analog retro style. He ended up holding a whole furniture drive to get all the pieces together

![---]({{ site.baseurl }}/assets/images/Terminus/FurnatureDrive.png)

![---]({{ site.baseurl }}/assets/images/Terminus/Terminus_Megan+mom.jpg)

Heres a photo of me and my family chatting with EMA's director Megan Elliot.