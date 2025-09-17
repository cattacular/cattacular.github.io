# Exquisite Corpse Drawing Game

A collaborative art game where multiple people draw different parts of a body without seeing what others have drawn, then randomly combine them to create unique creatures.

## Features

### 🎨 Drawing Interface
- **Interactive Canvas**: Draw directly in the browser with customizable brush size and color
- **Image Upload**: Upload existing images to use as a base for drawing
- **Category Selection**: Choose to draw top (head/shoulders), middle (torso/arms), or bottom (legs/feet)
- **Touch Support**: Works on mobile devices with touch drawing

### 🎲 Random Combination Generator
- **Automatic Mixing**: Randomly selects one drawing from each category
- **Visual Display**: Shows the combined creature with labeled sections
- **Local & Server Images**: Combines both locally drawn and server-stored images

### 🖼️ Gallery System
- **Category Organization**: Separate galleries for top, middle, and bottom drawings
- **Local Storage**: Saves drawings in browser for immediate use
- **Server Integration**: Ready for server-side image storage

## File Structure

```
assets/
├── images/
│   └── exquisite-corpse/
│       ├── top/           # Head, neck, shoulders drawings
│       ├── middle/        # Torso, arms, waist drawings
│       ├── bottom/        # Legs, feet, tail drawings
│       └── README.md      # Instructions for contributors
├── js/
│   └── exquisite-corpse-server.js  # Server integration code
_pages/
└── exquisite-corpse.md    # Main game page
```

## How to Use

### For Players:
1. **Visit the Game**: Navigate to `/exquisite-corpse/` on your site
2. **Choose a Category**: Select which body part you want to draw
3. **Create Your Drawing**: 
   - Draw directly on the canvas, or
   - Upload an existing image and modify it
4. **Save Your Work**: Download your drawing and optionally upload it to the server
5. **Generate Combinations**: Click "Create Random Creature!" to see random combinations

### For Contributors:
1. **Draw Your Section**: Create a drawing for your assigned body part
2. **Follow Guidelines**: 
   - Only draw your assigned section
   - Use white or transparent background
   - Keep images around 400x300 pixels
3. **Upload to Server**: Place your PNG/JPG file in the appropriate category folder
4. **Name Convention**: Use descriptive filenames like `head-robot-001.png`

## Technical Implementation

### Frontend (Client-Side)
- **HTML5 Canvas**: For drawing functionality
- **Local Storage**: Temporary storage of drawings
- **Responsive Design**: Works on desktop and mobile
- **Touch Events**: Mobile-friendly drawing interface

### Backend (Server-Side)
- **File Upload API**: Handle image submissions
- **Image Management**: Organize images by category
- **Random Selection**: Server-side combination generation
- **Statistics**: Track drawing counts per category

### Browser Compatibility
- Modern browsers with Canvas support
- Mobile browsers with touch events
- Fallback for older browsers (basic functionality)

## Customization

### Styling
The game uses CSS that matches your site's theme:
- Color scheme from your existing styles
- Responsive grid layouts
- Hover effects and transitions
- Mobile-optimized controls

### Categories
You can easily modify the categories by:
1. Updating the HTML select options
2. Creating new folder structures
3. Modifying the JavaScript category arrays

### Server Integration
To enable server-side functionality:
1. Set up a backend API (Node.js example provided)
2. Update the JavaScript to use server endpoints
3. Configure file upload handling
4. Set up image processing if needed

## Game Rules & Guidelines

### Traditional Exquisite Corpse Rules:
1. **No Peeking**: Don't look at other people's drawings before submitting
2. **Section Only**: Draw only your assigned body part
3. **Creative Freedom**: Be as creative as you want within your section
4. **Random Combinations**: The magic happens when random parts combine

### Technical Guidelines:
- **Image Format**: PNG preferred (supports transparency)
- **File Size**: Keep under 2MB for web performance
- **Dimensions**: 400x300 pixels recommended
- **Background**: White or transparent works best
- **Content**: Clear, recognizable body parts

## Future Enhancements

### Potential Features:
- **User Accounts**: Track individual contributions
- **Voting System**: Rate favorite combinations
- **Social Sharing**: Share creations on social media
- **Advanced Drawing Tools**: More brush types, layers, etc.
- **Animation**: Animated combinations
- **3D Support**: Three-dimensional drawing interface
- **Collaborative Mode**: Real-time collaborative drawing

### Technical Improvements:
- **Image Processing**: Automatic resizing and optimization
- **CDN Integration**: Faster image loading
- **Caching**: Better performance for frequent users
- **Analytics**: Track usage and popular combinations
- **Moderation**: Content filtering and approval system

## Troubleshooting

### Common Issues:
1. **Canvas Not Working**: Check browser Canvas support
2. **Images Not Loading**: Verify file paths and permissions
3. **Touch Drawing Issues**: Ensure touch events are enabled
4. **File Upload Problems**: Check server configuration

### Browser Support:
- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ Internet Explorer (limited support)

## Contributing

To contribute to this project:
1. Follow the existing code style
2. Test on multiple browsers
3. Ensure mobile compatibility
4. Update documentation as needed
5. Submit pull requests for improvements

## License

This exquisite corpse game is part of your Jekyll portfolio site and follows the same licensing terms.
