# ✨ Radiant Beauty

A beautiful, responsive beauty website featuring makeup, hair, nails, and skincare tips and tutorials.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## 🌸 Features

- **Multi-Page Website**: Home, Makeup, Hair, Nails, Skincare, and Contact pages
- **Responsive Design**: Mobile-first approach, works on all devices
- **Elegant UI**: Rose/pink/gold color palette with smooth animations
- **Interactive Elements**: Smooth scrolling, animated cards, mobile navigation
- **Contact Form**: Fully functional contact form with validation
- **GitHub Pages Ready**: Pre-configured for easy deployment

## 📁 Project Structure

```
beauty/
├── index.html              # Home page
├── makeup.html             # Makeup tutorials page
├── hair.html               # Hair care page
├── nails.html              # Nail art page
├── skincare.html           # Skincare routines page
├── contact.html            # Contact form page
├── css/
│   ├── main.css           # Main styles with theme
│   └── responsive.css     # Responsive design
├── js/
│   └── main.js            # Interactive features
├── assets/
│   ├── images/            # Image placeholders
│   └── icons/             # Icon files
└── README.md              # This file
```

## 🎨 Design

- **Color Palette**: Rose, pink, and gold tones
- **Typography**: Playfair Display (headings) + Poppins (body)
- **Layout**: Clean, modern, feminine aesthetic
- **Animations**: Smooth CSS transitions and scroll animations

## 🚀 Deployment to GitHub Pages

### Option 1: Quick Deploy (Recommended)

If you're already in a Git repository:

```bash
# Check current status
git status

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Radiant Beauty website"

# Push to main branch
git push origin main
```

Then enable GitHub Pages:
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under "Source", select **main** branch
4. Click **Save**
5. Your site will be live at: `https://<username>.github.io/<repository>/`

### Option 2: Fresh Start

If starting from scratch:

```bash
# Initialize git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Radiant Beauty website"

# Add remote repository
git remote add origin https://github.com/<username>/<repository>.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then enable GitHub Pages as described in Option 1.

## 🌐 Viewing the Website

### Local Development

Simply open `index.html` in your web browser:

```bash
# Using Python 3
python -m http.server 8000

# Using Python 2
python -m SimpleHTTPServer 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Or just open the file
open index.html  # macOS
start index.html # Windows
xdg-open index.html # Linux
```

Then visit `http://localhost:8000` in your browser.

### Production (GitHub Pages)

After deploying, your site will be available at:
```
https://<username>.github.io/<repository>/
```

For example:
```
https://johndoe.github.io/beauty/
```

## 📱 Pages Overview

### Home (`index.html`)
- Hero section with call-to-action
- Category overview (Makeup, Hair, Nails, Skincare)
- Features section
- Call-to-action section

### Category Pages
- **Makeup** (`makeup.html`): Makeup tutorials and tips
- **Hair** (`hair.html`): Hair care and styling guides
- **Nails** (`nails.html`): Nail art designs and care
- **Skincare** (`skincare.html`): Skincare routines and advice

### Contact (`contact.html`)
- Contact information
- Working contact form with validation
- FAQ section
- Social media links

## 🎯 Features in Detail

### Responsive Navigation
- Desktop: Horizontal navigation bar
- Mobile: Hamburger menu with slide-in drawer
- Smooth scroll to sections

### Animations
- Fade-in on scroll for cards and sections
- Hover effects on buttons and cards
- Smooth page transitions
- Mobile-friendly touch animations

### Form Validation
- Client-side validation
- Email format checking
- User-friendly error messages
- Success confirmation

## 🛠️ Customization

### Changing Colors

Edit `css/main.css` variables:

```css
:root {
    --primary-color: #e91e63;      /* Main pink */
    --secondary-color: #d4af37;     /* Gold */
    /* ... other colors ... */
}
```

### Adding Real Images

1. Place images in `assets/images/`
2. Replace placeholder divs with `<img>` tags:

```html
<!-- Replace: -->
<div class="category-image-placeholder">
    <span class="placeholder-icon">💄</span>
</div>

<!-- With: -->
<img src="assets/images/makeup.jpg" alt="Makeup">
```

### Modifying Content

All content is in the HTML files. Simply edit the text, headings, and descriptions to match your needs.

## 📊 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 To-Do / Future Enhancements

- [ ] Add real product images
- [ ] Implement blog section
- [ ] Add search functionality
- [ ] Create tutorial video embeds
- [ ] Add newsletter signup
- [ ] Implement dark mode
- [ ] Add more animations
- [ ] Create admin panel for content management

## 📄 License

This project is open source and available for personal and commercial use.

## 👩‍💻 Author

Created with 💖 by the Radiant Beauty team

## 🤝 Contributing

Feel free to fork this project and customize it for your needs!

## 📧 Support

For questions or support, use the contact form on the website or open an issue on GitHub.

---

**Enjoy your beautiful new website!** ✨💄💅

Made with ❤️ and lots of CSS
