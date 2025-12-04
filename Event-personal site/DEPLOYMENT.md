# Deployment Guide

Quick guide to deploy the "Build Your Personal Website" event presentation.

## 🚀 Quick Deploy Options

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository** on GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Build Personal Website event"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/nexus-build-website-event.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Source: Deploy from branch `main`
   - Folder: `/ (root)`
   - Save

3. **Access your site**
   - URL: `https://YOUR_USERNAME.github.io/nexus-build-website-event/`

### Option 2: Netlify

1. **Drag & Drop**
   - Visit [netlify.com](https://netlify.com)
   - Drag the `Event-personal site` folder to Netlify
   - Done! Your site is live

2. **Or via Git**
   - Connect your GitHub repository
   - Build settings: None needed (static site)
   - Deploy!

### Option 3: Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd "Event-personal site"
   vercel
   ```

3. **Follow prompts** and your site is live!

### Option 4: Serve Locally for Presentation

If you just need it for the live event:

```bash
# Python
python -m http.server 8000

# Node.js
npx serve .

# PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📱 Testing Before Event

### Checklist

- [ ] Test on desktop browser (Chrome, Firefox, Safari)
- [ ] Test on mobile device (iOS Safari, Chrome Mobile)
- [ ] Test on tablet
- [ ] Verify all navigation links work
- [ ] Check smooth scrolling
- [ ] Verify all animations work
- [ ] Test external links in Resources section
- [ ] Check responsive design at different screen sizes

### Browser DevTools Testing

1. Open DevTools (F12 or Cmd+Option+I)
2. Toggle device toolbar (Cmd+Shift+M)
3. Test these viewports:
   - iPhone SE (375px)
   - iPad (768px)
   - Desktop (1920px)

## 🎯 Pre-Event Setup

### Day Before Event

1. **Test the live URL** on the presentation computer
2. **Bookmark important sections** for quick navigation during presentation
3. **Test internet connection** at venue
4. **Have offline backup** (local files on USB)
5. **Test projector display** (resolution, colors)

### During Event

1. **Open website in fullscreen** (F11)
2. **Use presentation mode** in browser if available
3. **Have speaker notes ready** (use README.md workshop flow)
4. **Keep Resources section** open in another tab for quick reference

## 🔧 Troubleshooting

### Fonts not loading?
- Check internet connection
- Fonts are loaded from Google Fonts CDN
- Fallback fonts will work offline

### Animations not smooth?
- Close other browser tabs
- Disable browser extensions
- Use Chrome for best performance

### Mobile menu not showing?
- Current design hides menu on mobile
- Add hamburger menu if needed (see below)

## 🎨 Quick Customizations

### Change Event Date/Time
Edit the hero section in `index.html`:
```html
<div class="stat-number">90 min</div>
```

### Add Event Location
Add to hero subtitle:
```html
<p class="hero-subtitle">
    From zero to deployed in one session.<br>
    <strong>Location: Science Building, Room 123</strong>
</p>
```

### Update Contact Info
Edit footer in `index.html`:
```html
<p>Email: <a href="mailto:nexus@everjust.org">nexus@everjust.org</a></p>
```

## 📊 Analytics (Optional)

Add Google Analytics before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔒 Security Notes

- No user input forms (no XSS risk)
- All external links open in new tab
- CSP headers included in HTML
- No sensitive data stored
- Static site (no server-side vulnerabilities)

## 💡 Tips for Presentation

1. **Use keyboard shortcuts**
   - ESC: Scroll to top
   - Space: Page down
   - Shift+Space: Page up

2. **Zoom for emphasis**
   - Cmd/Ctrl + Plus: Zoom in
   - Cmd/Ctrl + Minus: Zoom out
   - Cmd/Ctrl + 0: Reset zoom

3. **Smooth navigation**
   - Click nav links for smooth scroll
   - Use anchor links in browser
   - Bookmark key sections

4. **Backup plan**
   - Have PDF export ready
   - Local files on USB
   - Screenshots of key sections

## 📞 Support

For issues or questions:
- **Email**: nexus@everjust.org
- **Website**: ustnexus.club

---

**Good luck with your event! 🚀**
