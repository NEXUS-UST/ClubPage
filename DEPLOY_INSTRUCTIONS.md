# Nexus Forum Deployment Instructions

## Option 1: Manual GitHub + Render Deploy

1. **Create GitHub Repository**
   - Go to https://github.com/new
   - Name: `nexus-forum`
   - Make it public
   - Don't initialize with README

2. **Push Your Code**
   ```bash
   cd /Users/cloudaistudio/Documents/UST/NEXUS/nexus-forum
   git remote add origin https://github.com/YOUR-USERNAME/nexus-forum.git
   git push -u origin main
   ```

3. **Deploy on Render**
   - Go to https://dashboard.render.com
   - Click "New +" → "Web Service"
   - Connect your GitHub repository
   - It will auto-detect the `render.yaml` and configure everything
   - Click "Create Web Service"

## Option 2: Direct Render Blueprint

1. After pushing to GitHub, visit:
   ```
   https://render.com/deploy?repo=https://github.com/YOUR-USERNAME/nexus-forum
   ```

2. Render will automatically:
   - Create the web service
   - Set up environment variables
   - Deploy your forum

## The Forum Includes:
- ✅ User registration & login
- ✅ Create topics & posts
- ✅ Categories (General, Announcements, Support)
- ✅ Like posts
- ✅ View statistics
- ✅ Mobile responsive design
- ✅ Uses Neon PostgreSQL (already configured)

## Alternative: Professional Forums

If you need more features, consider these Render-compatible forums:
1. **Flarum** - Modern, fast PHP forum
2. **NodeBB** - Real-time Node.js forum
3. **Vanilla Forums** - Feature-rich community platform

All work better with Render than Discourse!






