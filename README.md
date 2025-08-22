# Le Mach Hotel & Accommodations Website

A stunning, modern hotel website for Le Mach Hotel located in Kilifi County, Kenya. Built with HTML5, CSS3, JavaScript, and Bootstrap 5, featuring a beautiful design that incorporates the hotel's terracotta and dark teal brand colors.

## 🌟 Features

### Design & User Experience
- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Modern UI/UX**: Clean, elegant design with smooth animations and transitions
- **Brand Integration**: Incorporates the hotel's logo colors (terracotta/burnt orange and dark teal)
- **Accessibility**: WCAG compliant with proper semantic HTML and ARIA labels

### Pages & Functionality
- **Homepage**: Hero section, features overview, room previews, special offers
- **Rooms**: Detailed room information with amenities, pricing, and booking options
- **Booking System**: Interactive booking form with real-time pricing calculation
- **Contact Page**: Contact form, business hours, emergency contacts, FAQ section
- **Navigation**: Sticky navigation with dropdown menus and mobile-friendly design

### Interactive Features
- **Dynamic Booking Form**: Real-time validation and pricing calculation
- **Room Comparison**: Interactive table comparing different room types
- **Contact Form**: Form validation with success/error notifications
- **Smooth Scrolling**: Enhanced navigation experience
- **Image Lightbox**: Gallery functionality for room images
- **Back to Top**: Smooth scroll-to-top functionality

## 🎨 Design System

### Color Palette
- **Primary**: Terracotta/Burnt Orange (#D2691E)
- **Secondary**: Dark Teal (#2F4F4F)
- **Accent**: Lighter Orange (#FF8C42)
- **Text**: Dark Gray (#2C3E50) and Light Gray (#7F8C8D)
- **Background**: White (#FFFFFF) and Light Gray (#F8F9FA)

### Typography
- **Headings**: Playfair Display (serif)
- **Body Text**: Poppins (sans-serif)
- **Logo**: Custom hand-crafted aesthetic

### Components
- **Cards**: Rounded corners with subtle shadows and hover effects
- **Buttons**: Gradient backgrounds with hover animations
- **Forms**: Clean design with validation states
- **Navigation**: Glassmorphism effect with backdrop blur

## 📁 Project Structure

```
Lemach Hotel/
├── index.html              # Homepage
├── rooms.html              # Rooms & Accommodations
├── booking.html            # Booking System
├── contact.html            # Contact Page
├── css/
│   └── style.css          # Main stylesheet
├── js/
│   ├── main.js            # Main JavaScript functionality
│   └── booking.js         # Booking form logic
├── images/                # Image assets (to be added)
└── README.md              # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- Local web server (optional, for development)

### Installation
1. Clone or download the project files
2. Open `index.html` in your web browser
3. For development, use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

### Development Setup
1. Install a code editor (VS Code recommended)
2. Install Live Server extension for real-time preview
3. Open the project folder in your editor
4. Right-click `index.html` and select "Open with Live Server"

## 📱 Responsive Breakpoints

- **Mobile**: < 576px
- **Tablet**: 576px - 768px
- **Desktop**: > 768px
- **Large Desktop**: > 992px

## 🔧 Customization

### Adding New Pages
1. Create a new HTML file
2. Copy the navigation structure from existing pages
3. Update the active navigation link
4. Add page-specific styles to `style.css`

### Modifying Colors
Update the CSS custom properties in `css/style.css`:
```css
:root {
    --primary-color: #D2691E;    /* Terracotta */
    --secondary-color: #2F4F4F;  /* Dark Teal */
    --accent-color: #FF8C42;     /* Lighter Orange */
}
```

### Adding Images
1. Place images in the `images/` folder
2. Update image paths in HTML files
3. Optimize images for web (recommended: WebP format)

## 📋 Pages Overview

### Homepage (`index.html`)
- Hero section with call-to-action buttons
- Features showcase (accommodations, restaurant, events, activities)
- Room previews with pricing
- Special offers section
- Contact information preview

### Rooms (`rooms.html`)
- Detailed room information
- Amenities and features
- Room comparison table
- Interactive modals for room details
- Booking call-to-action

### Booking (`booking.html`)
- Interactive booking form
- Real-time pricing calculation
- Form validation
- Booking summary sidebar
- Room type previews

### Contact (`contact.html`)
- Contact information cards
- Contact form with validation
- Business hours
- Emergency contacts
- FAQ section
- Location information

## 🎯 Key Features

### Booking System
- **Date Selection**: Check-in/check-out date picker
- **Guest Management**: Adults and children selection
- **Room Types**: Standard, Deluxe, and Executive Suite options
- **Real-time Pricing**: Automatic calculation based on selection
- **Form Validation**: Client-side validation with user feedback

### Interactive Elements
- **Smooth Animations**: CSS transitions and JavaScript animations
- **Hover Effects**: Enhanced user interaction feedback
- **Modal Dialogs**: Room details and booking confirmation
- **Notification System**: Success/error messages
- **Loading States**: Form submission feedback

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📞 Contact Information

**Le Mach Hotel & Accommodations**
- **Location**: Kilifi County, Off B69, Kenya
- **Phone**: +254 XXX XXX XXX
- **Email**: info@lemachhotel.com
- **Website**: [Coming Soon]

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is created for Le Mach Hotel & Accommodations. All rights reserved.

## 🙏 Acknowledgments

- **Bootstrap 5**: For responsive framework
- **Font Awesome**: For icons
- **Google Fonts**: For typography
- **Unsplash**: For placeholder images (to be replaced with actual hotel photos)

---

**Built with ❤️ for Le Mach Hotel & Accommodations**

*"In Love With The Sun"*
