---
layout: post
title: "Snake Game Demo"
date: 2025-01-02
categories: [games, demo]
---

# Snake Game Demo

Here's a classic Snake game using HTML5 Canvas and external JavaScript:

<div style="text-align: center; margin: 20px 0;">
  <canvas id="snakeCanvas" width="400" height="400" style="border: 2px solid #333; background: #000;"></canvas>
  <p><strong>Controls:</strong> Use arrow keys to move. Press R to restart.</p>
</div>

<script src="{{ site.baseurl }}/assets/js/snake-game.js"></script>
<script>
// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', function() {
    window.snakeGame = new SnakeGame('snakeCanvas');
});
</script>

## How This Works

This approach uses:

1. **External JavaScript file** (`snake-game.js`) - Contains the game logic
2. **HTML Canvas** - Provides the drawing surface
3. **Script tag** - Loads the external file
4. **Initialization script** - Starts the game when the page loads

### Benefits of External Files:

- **Reusable** - Can use the same game in multiple posts
- **Maintainable** - Easier to update game logic
- **Cached** - Browser can cache the JavaScript file
- **Cleaner posts** - Less code cluttering your markdown

### File Structure:
```
assets/
  js/
    snake-game.js    # Game logic
  images/            # Game assets
_posts/
  2025-1-2-Snake-Game-Demo.md  # Post with game
```

This method is perfect for more complex games that you might want to reuse across different posts or pages.
