# Rock'n'Iasi Festival Website

A modern, responsive website for the Rock'n'Iasi Festival 2025 - the biggest rock festival in Eastern Europe.

## 🎸 Features

- **Modern Design**: Beautiful, responsive design with rock festival aesthetics
- **Interactive Animations**: Smooth animations using Framer Motion
- **Mobile-First**: Fully responsive design that works on all devices
- **Fast Performance**: Built with Vite for optimal performance
- **TypeScript**: Full type safety throughout the application
- **Accessibility**: Proper semantic HTML and ARIA labels
- **SEO Optimized**: Meta tags and structured content

## 🚀 Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better developer experience
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful, customizable icons
- **React Router** - Client-side routing

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Navbar.tsx      # Navigation bar
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About festival section
│   ├── Lineup.tsx      # Artist lineup section
│   ├── Schedule.tsx    # Festival schedule
│   ├── Tickets.tsx     # Ticket pricing and purchase
│   ├── Venue.tsx       # Venue information
│   ├── Contact.tsx     # Contact form and info
│   └── Footer.tsx      # Footer component
├── main.tsx            # Application entry point
├── App.tsx             # Main App component
└── index.css           # Global styles and Tailwind imports
```

## 🎨 Design Features

- **Rock Festival Theme**: Dark theme with red and purple accents
- **Custom Fonts**: Orbitron and Bebas Neue for that rock feel
- **Gradient Backgrounds**: Beautiful gradients throughout
- **Hover Effects**: Interactive elements with smooth transitions
- **Responsive Grid**: Flexible layouts that adapt to screen size
- **Custom Animations**: Scroll-triggered animations and micro-interactions

## 🎵 Festival Information

- **Date**: July 15-17, 2025
- **Location**: Iasi, Romania
- **Venue**: Iasi Exhibition Center
- **Capacity**: 50,000+ attendees
- **Stages**: 5 stages (3 main + 2 smaller)
- **Artists**: 50+ international and local rock bands

## 🎫 Ticket Tiers

1. **Day Pass** - €89 (Single day access)
2. **Weekend Pass** - €199 (Full weekend access) - Most Popular
3. **VIP Experience** - €399 (Ultimate festival experience)

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🧪 Testing

The website includes comprehensive test IDs for easy testing:

- All navigation elements have `data-testid` attributes
- Form inputs and buttons are properly labeled
- Interactive elements are easily identifiable
- Component sections are clearly marked

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🎨 Customization

### Colors

The color scheme can be customized in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    // Red tones for rock theme
  },
  secondary: {
    // Dark grays for background
  },
  accent: {
    // Purple tones for highlights
  }
}
```

### Fonts

Custom fonts are loaded from Google Fonts:
- **Orbitron**: For technical/rock feel
- **Bebas Neue**: For display headings

## 📞 Contact Information

- **Email**: info@rockniasi.com
- **Phone**: +40 232 123 456
- **Address**: Strada Palat, Nr. 1, Iasi, Romania
- **Office Hours**: Mon-Fri 9:00-18:00 (EET)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- Icons by [Lucide](https://lucide.dev/)
- Animations by [Framer Motion](https://www.framer.com/motion/)
- Fonts by [Google Fonts](https://fonts.google.com/)

---

**Rock'n'Iasi Festival 2025** - Experience the power of rock! 🤘 