# Assets Directory

This directory contains all the assets (images, icons, etc.) for the Radiant Beauty website.

## Directory Structure

```
assets/
├── images/         # Main images
│   ├── hero-bg.jpg
│   ├── makeup-1.jpg
│   ├── hair-1.jpg
│   ├── nails-1.jpg
│   └── skincare-1.jpg
└── icons/          # Icon files
```

## Image Placeholders

Currently, the website uses CSS gradient placeholders with emoji icons. To add real images:

1. Place your images in the appropriate folders
2. Update the HTML to use `<img>` tags instead of placeholder divs
3. Ensure images are optimized for web (compressed, proper format)

## Recommended Image Sizes

- **Hero Images**: 1200x800px
- **Category Cards**: 800x450px
- **Tutorial Cards**: 640x400px
- **Icons**: 64x64px or SVG format

## Image Optimization

For best performance:
- Use WebP format with JPG fallback
- Compress images (aim for <200KB per image)
- Use lazy loading for images below the fold
- Consider using a CDN for faster loading

## Adding Images to HTML

Replace the placeholder divs with actual images:

```html
<!-- Current Placeholder -->
<div class="tutorial-image-placeholder">
    <span class="placeholder-icon">✨</span>
</div>

<!-- Replace with: -->
<img src="assets/images/tutorial-1.jpg" alt="Tutorial Image" class="tutorial-image">
```

Then update CSS to style the images appropriately.
