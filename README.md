# Engineering Voices - Podcast Platform Website

A modern, inspiring website that amplifies the stories of diverse engineers from underrepresented communities. This mock website showcases a podcast platform dedicated to highlighting women, LGBTQ+, first-generation, immigrant, and culturally diverse engineering professionals.

## 🌟 Features

### Design & User Experience
- **Modern, Clean Design**: White background with bold accent colors and rounded cards
- **Responsive Layout**: Fully responsive design that works on all devices
- **Smooth Animations**: Subtle animations and hover effects for enhanced interactivity
- **Professional Typography**: Uses Inter font family for excellent readability

### Sections
1. **Hero Section**: Eye-catching introduction with animated floating cards
2. **About Section**: Mission statement with animated statistics
3. **Episodes Section**: Grid of podcast episodes with play functionality
4. **Guests Section**: Profile cards for featured engineers
5. **Resources Section**: Links to professional organizations and story submission
6. **Footer**: Contact information and social media links

### Interactive Elements
- **Episode Modals**: Click "Play Episode" to see demo modals with Spotify/Apple Podcasts links
- **Contact Forms**: Interactive buttons for story submission and guest suggestions
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Hover Effects**: Cards and buttons have engaging hover animations
- **Mobile Navigation**: Responsive hamburger menu for mobile devices

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No server setup required - runs entirely in the browser

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. That's it! The website is ready to use

### File Structure
```
Engineering Voices/
├── index.html          # Main HTML file
├── styles.css          # CSS styles and responsive design
├── script.js           # JavaScript functionality and interactions
└── README.md           # This documentation file
```

## 🎨 Design System

### Color Palette
- **Primary**: #667eea (Blue gradient)
- **Secondary**: #764ba2 (Purple gradient)
- **Accent**: #ff6b6b (Red gradient for play buttons)
- **Text**: #2d3748 (Dark gray)
- **Background**: #ffffff (White) and #f8fafc (Light gray)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600, 700
- **Hierarchy**: Clear heading sizes from h1 (3.5rem) to h4 (1.25rem)

### Components
- **Cards**: Rounded corners (20px), subtle shadows, hover animations
- **Buttons**: Gradient backgrounds, rounded (50px), hover effects
- **Navigation**: Fixed header with backdrop blur effect
- **Modals**: Centered overlays with smooth animations

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1200px+ (Full layout with side-by-side sections)
- **Tablet**: 768px - 1199px (Stacked layout, adjusted spacing)
- **Mobile**: 480px - 767px (Single column, mobile navigation)
- **Small Mobile**: <480px (Optimized for small screens)

## 🔧 Customization

### Adding New Episodes
To add new episodes, duplicate the episode card structure in `index.html`:

```html
<div class="episode-card">
    <div class="episode-image">
        <div class="image-placeholder">
            <i class="fas fa-play-circle"></i>
        </div>
    </div>
    <div class="episode-content">
        <h3>Your Episode Title</h3>
        <p class="guest-name">with Guest Name</p>
        <p class="episode-description">Episode description...</p>
        <div class="episode-actions">
            <button class="btn btn-play">Play Episode</button>
            <span class="episode-duration">45 min</span>
        </div>
    </div>
</div>
```

### Adding New Guests
To add new guest profiles, duplicate the guest card structure:

```html
<div class="guest-card">
    <div class="guest-avatar">
        <div class="avatar-placeholder">
            <i class="fas fa-user"></i>
        </div>
    </div>
    <h3>Guest Name</h3>
    <p class="guest-role">Job Title</p>
    <p class="guest-bio">Short bio description...</p>
</div>
```

### Modifying Colors
Update the CSS custom properties in `styles.css` to change the color scheme:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #ff6b6b;
}
```

## 🎯 Demo Features

This is a mock website with the following demo functionality:

- **Episode Play Buttons**: Open modals with Spotify/Apple Podcasts links
- **Story Submission**: Contact modal for demo purposes
- **Guest Suggestions**: Interactive contact form
- **Statistics Animation**: Animated counting effect for episode/guest numbers
- **Smooth Scrolling**: Navigation between sections
- **Mobile Menu**: Responsive navigation for mobile devices

## 🌐 Browser Support

- **Chrome**: 60+
- **Firefox**: 55+
- **Safari**: 12+
- **Edge**: 79+

## 📝 Notes

- This is a demo website and does not contain actual podcast content
- All links to external platforms (Spotify, Apple Podcasts) are placeholder URLs
- Contact information and social media links are fictional
- The website is designed to showcase the concept and design, not as a production podcast platform

## 🤝 Contributing

Feel free to customize this website for your own podcast or engineering community platform. The code is well-structured and commented for easy modification.

## 📄 License

This project is open source and available under the MIT License.

---

**Engineering Voices** - Amplifying diverse stories in engineering to inspire the next generation and create more inclusive workplaces.

---

*Last updated: January 2025*
