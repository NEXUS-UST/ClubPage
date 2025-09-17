#!/usr/bin/env python3
"""
Nexus AI Club Presentation Viewer
Opens all presentation formats for easy comparison and viewing
"""

import subprocess
import os
import webbrowser

def open_presentations():
    """Open all presentation formats for viewing"""
    
    print("🎬 Opening Nexus AI Club Presentations...")
    print("=" * 50)
    
    # File paths
    files = {
        "Beautiful PowerPoint": "/Users/cloudaistudio/Documents/UST/NEXUS/Nexus_AI_BEAUTIFUL_Presentation.pptx",
        "Basic PowerPoint": "/Users/cloudaistudio/Documents/UST/NEXUS/Nexus_AI_Club_Enhanced_Presentation.pptx", 
        "Web Presentation": "/Users/cloudaistudio/Documents/UST/NEXUS/nexus-presentation.html",
        "Original PDF": "/Users/cloudaistudio/Documents/UST/NEXUS/Nexus AI Club Pitch.pdf"
    }
    
    # Check which files exist and open them
    for name, filepath in files.items():
        if os.path.exists(filepath):
            print(f"✅ Opening {name}...")
            
            if filepath.endswith('.html'):
                # Open HTML presentation in browser
                webbrowser.open(f'file://{filepath}')
                print(f"   🌐 Opened in web browser (with animations!)")
            else:
                # Open other files with default application
                try:
                    subprocess.run(['open', filepath], check=True)
                    print(f"   📁 Opened with default application")
                except subprocess.CalledProcessError:
                    print(f"   ❌ Could not open automatically")
        else:
            print(f"❌ {name} not found: {filepath}")
    
    print("\n" + "=" * 50)
    print("🎯 COMPARISON GUIDE:")
    print("=" * 50)
    
    print("\n1. 🌐 WEB PRESENTATION (nexus-presentation.html):")
    print("   ✨ Stunning animations and transitions")
    print("   🎨 Modern gradient backgrounds") 
    print("   📱 Responsive design")
    print("   🎬 Professional reveal.js framework")
    print("   💡 Best for: Live presentations, demos, sharing online")
    
    print("\n2. 💎 BEAUTIFUL POWERPOINT (Nexus_AI_BEAUTIFUL_Presentation.pptx):")
    print("   🎨 Professional gradient backgrounds")
    print("   💳 Card-based layouts")
    print("   🌟 Drop shadows and visual effects")
    print("   📊 Consistent branding and typography")
    print("   💡 Best for: PowerPoint users, formal presentations")
    
    print("\n3. 📝 BASIC POWERPOINT (Nexus_AI_Club_Enhanced_Presentation.pptx):")
    print("   📋 Simple, text-focused design")
    print("   🔧 Easy to edit and customize")
    print("   📄 Plain backgrounds")
    print("   💡 Best for: Quick edits, compatibility")
    
    print("\n4. 📜 ORIGINAL PDF (for comparison):")
    print("   👀 See what we improved from")
    print("   📊 Compare the transformation")
    
    print("\n" + "=" * 50)
    print("🏆 RECOMMENDATION: Use the Beautiful PowerPoint for maximum impact!")
    print("🌟 Add PowerPoint animations following the animation guide")
    print("🚀 Your audience will be absolutely impressed!")

def create_quick_start_guide():
    """Create a quick start guide for using the presentations"""
    
    guide_content = """# 🚀 NEXUS AI CLUB PRESENTATION QUICK START

## 🎯 CHOOSE YOUR FORMAT:

### 1. 🌐 **WEB PRESENTATION** (RECOMMENDED FOR DEMOS)
**File**: `nexus-presentation.html`
**How to use**: 
- Double-click to open in browser
- Use arrow keys or click to navigate
- Full-screen mode: Press 'F'
- Speaker notes: Press 'S'

**Advantages**:
✨ Stunning animations built-in
🎨 Modern, responsive design
📱 Works on any device with browser
🔄 Easy to share via URL

### 2. 💎 **BEAUTIFUL POWERPOINT** (RECOMMENDED FOR MEETINGS)
**File**: `Nexus_AI_BEAUTIFUL_Presentation.pptx`
**How to use**:
- Open in Microsoft PowerPoint
- Add animations using Animation Pane
- Follow the Animation Guide PDF
- Present in full-screen mode

**Advantages**:
🎨 Professional design with gradients
💳 Card-based modern layouts
🌟 Drop shadows and visual effects
🔧 Fully editable in PowerPoint

### 3. 📝 **BASIC POWERPOINT** (FOR SIMPLE EDITING)
**File**: `Nexus_AI_Club_Enhanced_Presentation.pptx`
**How to use**:
- Quick and easy to edit
- Compatible with older PowerPoint versions
- Simple text-based design

## 🎬 ANIMATION RECOMMENDATIONS:

### **PowerPoint Animations to Add**:
1. **Title Slides**: Fly In from Left with Bounce
2. **Bullet Points**: Appear with 0.3s delays
3. **Statistics**: Zoom In with emphasis
4. **Cards**: Fade In with Grow effect
5. **Call-to-Action**: Pulse animation

### **Timing Guidelines**:
- **Entrance**: 0.5-0.8 seconds
- **Delays**: 0.3 seconds between elements
- **Emphasis**: 0.2 seconds for highlights
- **Exit**: Use sparingly, 0.3 seconds

## 🎯 PRESENTATION TIPS:

### **Before Presenting**:
- [ ] Test on actual presentation setup
- [ ] Practice timing with animations
- [ ] Prepare for Q&A with specific examples
- [ ] Have backup without animations
- [ ] Check all contact info is current

### **During Presentation**:
- [ ] Start with confidence - your opening is powerful
- [ ] Use statistics to build credibility
- [ ] Tell stories during success slides
- [ ] Engage audience with questions
- [ ] End with clear call-to-action

### **After Presentation**:
- [ ] Capture interested attendee contacts
- [ ] Send follow-up with next meeting details
- [ ] Share presentation materials
- [ ] Schedule one-on-one meetings
- [ ] Track membership applications

## 🚀 SUCCESS METRICS TO TRACK:

- 📈 **Membership applications** (target: 3x increase)
- 👥 **Event attendance** (target: 2x increase)  
- 💬 **Social media engagement** (target: 50% increase)
- 🤝 **Faculty support** (target: 5+ new supporters)
- 💰 **Partnership inquiries** (track all leads)

---

**Remember**: You now have a world-class presentation that positions Nexus AI as THE premier AI club. Use it with confidence! 🌟
"""
    
    with open("/Users/cloudaistudio/Documents/UST/NEXUS/QUICK_START_GUIDE.md", "w") as f:
        f.write(guide_content)
    
    print("✅ Quick Start Guide created: QUICK_START_GUIDE.md")

if __name__ == "__main__":
    open_presentations()
    create_quick_start_guide()
    
    print(f"\n🎉 ALL PRESENTATIONS READY!")
    print(f"Choose the format that works best for your situation:")
    print(f"🌐 Web = Best animations and modern design")
    print(f"💎 Beautiful PowerPoint = Professional and customizable") 
    print(f"📝 Basic PowerPoint = Simple and compatible")
    
    print(f"\n🚀 Go make Nexus AI Club legendary! 🤖")

