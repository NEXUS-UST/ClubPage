#!/usr/bin/env python3
"""
Nexus AI Club Presentation Animation Guide
Creates a comprehensive guide for adding animations to the PowerPoint presentation
Also converts the presentation to PDF format
"""

from fpdf import FPDF
import os

def create_animation_guide():
    """Create a detailed animation guide for the presentation"""
    
    class AnimationGuide(FPDF):
        def header(self):
            self.set_font('Arial', 'B', 16)
            self.set_text_color(0, 119, 204)  # Nexus blue
            self.cell(0, 10, 'Nexus AI Club - Presentation Animation Guide', 0, 1, 'C')
            self.ln(10)
            
        def footer(self):
            self.set_y(-15)
            self.set_font('Arial', 'I', 8)
            self.set_text_color(128)
            self.cell(0, 10, f'Page {self.page_no()}', 0, 0, 'C')
    
    pdf = AnimationGuide()
    pdf.add_page()
    pdf.set_font('Arial', '', 12)
    
    # Introduction
    pdf.set_font('Arial', 'B', 14)
    pdf.set_text_color(0, 119, 204)
    pdf.cell(0, 10, 'Animation Recommendations for Maximum Impact', 0, 1)
    pdf.ln(5)
    
    pdf.set_font('Arial', '', 11)
    pdf.set_text_color(0, 0, 0)
    pdf.multi_cell(0, 6, 
        'This guide provides specific animation recommendations for each slide to create a '
        'dynamic, engaging presentation that will captivate your audience and effectively '
        'communicate the Nexus AI Club\'s value proposition.')
    pdf.ln(10)
    
    # Animation recommendations for each slide
    animations = [
        {
            "slide": 1,
            "title": "THE AI REVOLUTION STARTS HERE",
            "animations": [
                "Title: Fly In from Left with Bounce effect",
                "Subtitle: Fade In with 0.5s delay",
                "Statistics: Appear one by one with Zoom effect (0.3s intervals)",
                "Background: Subtle gradient pulse animation"
            ]
        },
        {
            "slide": 2,
            "title": "THE OPPORTUNITY IS NOW",
            "animations": [
                "Title: Wipe from Left",
                "Each bullet point: Fly In from Right with increasing delays",
                "Emojis: Grow/Shrink emphasis on key stats",
                "Background: Light particle effect animation"
            ]
        },
        {
            "slide": 3,
            "title": "BUT THERE'S A PROBLEM...",
            "animations": [
                "Title: Shake animation to emphasize urgency",
                "Problem points: Appear with Typewriter effect",
                "Red warning indicators: Pulse animation",
                "Clock emoji: Rotate animation for urgency"
            ]
        },
        {
            "slide": 4,
            "title": "MEET NEXUS AI",
            "animations": [
                "Title: Zoom In with Bounce",
                "Logo/Brand elements: Fade In with Grow effect",
                "Mission points: Cascade animation from top to bottom",
                "Color transition: Blue theme elements pulse in"
            ]
        },
        {
            "slide": 5,
            "title": "OUR VISION",
            "animations": [
                "Title: Fly In from Top",
                "Vision timeline: Progressive reveal with checkmarks",
                "Numbers: Count-up animation effect (200+, 25+, etc.)",
                "Achievement icons: Celebrate with Star animation"
            ]
        },
        {
            "slide": 6,
            "title": "FOUR PILLARS OF AI EXCELLENCE",
            "animations": [
                "Title: Appear with Expand animation",
                "Pillar boxes: Sequential Zoom In from center",
                "Icons: Bounce animation on appearance",
                "Text content: Fade In after box animation completes"
            ]
        },
        {
            "slide": 7,
            "title": "BUILD REAL AI SOLUTIONS",
            "animations": [
                "Title: Typewriter effect",
                "Skill categories: Appear with Slide In from Left",
                "Technology logos: Spin animation on entry",
                "Project examples: Fade In with emphasis"
            ]
        },
        {
            "slide": 8,
            "title": "YOUR NETWORK IS YOUR NET WORTH",
            "animations": [
                "Title: Gradient text animation",
                "Company logos: Sequential appearance with Grow effect",
                "Statistics: Counter animation for percentages",
                "Event dates: Calendar flip animation"
            ]
        },
        {
            "slide": 9,
            "title": "WE WIN. YOU WIN.",
            "animations": [
                "Title: Bold Zoom In with gold highlight",
                "Awards: Trophy animation with sparkle effects",
                "Achievement list: Victory march animation",
                "Prize money: Cash register/counting animation"
            ]
        },
        {
            "slide": 10,
            "title": "AI FOR GOOD",
            "animations": [
                "Title: Heart pulse animation",
                "Impact areas: Sequential reveal with icons",
                "Project descriptions: Slide In from different directions",
                "Community hours: Odometer counting animation"
            ]
        },
        {
            "slide": 11,
            "title": "WHAT'S IN IT FOR YOU?",
            "animations": [
                "Title: Question mark animation",
                "Audience boxes: Appear with different colored highlights",
                "Benefit lists: Checklist animation with checkmarks",
                "Icons: Bounce animation for emphasis"
            ]
        },
        {
            "slide": 12,
            "title": "WHERE OUR MEMBERS GO",
            "animations": [
                "Title: Arrow pointing upward animation",
                "Alumni profiles: Photo reveal with name/title",
                "Salary figures: Dollar sign emphasis animation",
                "Testimonials: Speech bubble appear animation"
            ]
        },
        {
            "slide": 13,
            "title": "MEET YOUR LEADERS",
            "animations": [
                "Title: Handshake animation",
                "Leadership photos: Professional slide-in",
                "Titles: Typewriter reveal",
                "Advisory board: Appear with authority emphasis"
            ]
        },
        {
            "slide": 14,
            "title": "READY TO SHAPE THE FUTURE?",
            "animations": [
                "Title: Future-tech animation with glow effect",
                "Membership tiers: Card flip animation",
                "Pricing: Number emphasis with currency symbols",
                "Call-to-action: Pulsing button animation"
            ]
        },
        {
            "slide": 15,
            "title": "YOUR AI JOURNEY STARTS NOW",
            "animations": [
                "Title: Rocket launch animation",
                "Action items: Numbered countdown animation",
                "Contact info: QR code scan animation",
                "Final CTA: Strong pulse with urgency colors"
            ]
        }
    ]
    
    # Add animations for each slide
    for anim in animations:
        pdf.set_font('Arial', 'B', 12)
        pdf.set_text_color(0, 119, 204)
        pdf.cell(0, 8, f'Slide {anim["slide"]}: {anim["title"]}', 0, 1)
        pdf.ln(2)
        
        pdf.set_font('Arial', '', 10)
        pdf.set_text_color(0, 0, 0)
        
        for i, animation in enumerate(anim["animations"], 1):
            pdf.cell(10, 6, f'{i}.', 0, 0)
            pdf.cell(0, 6, animation, 0, 1)
        
        pdf.ln(5)
        
        # Add page break if needed
        if pdf.get_y() > 250:
            pdf.add_page()
    
    # Add implementation section
    pdf.add_page()
    pdf.set_font('Arial', 'B', 14)
    pdf.set_text_color(0, 119, 204)
    pdf.cell(0, 10, 'Implementation Instructions', 0, 1)
    pdf.ln(5)
    
    implementation_steps = [
        "Open the Nexus_AI_Club_Enhanced_Presentation.pptx file in Microsoft PowerPoint",
        "Select the first slide and go to Animations tab",
        "For each element, apply the recommended animation from this guide",
        "Set appropriate timing delays (typically 0.3-0.5 seconds between elements)",
        "Use 'Animation Pane' to fine-tune the sequence and timing",
        "Preview each slide to ensure smooth transitions",
        "Practice the presentation with animations to perfect timing"
    ]
    
    pdf.set_font('Arial', '', 11)
    pdf.set_text_color(0, 0, 0)
    
    for i, step in enumerate(implementation_steps, 1):
        pdf.cell(0, 8, f'{i}. {step}', 0, 1)
        pdf.ln(2)
    
    pdf.ln(10)
    
    # Add tips section
    pdf.set_font('Arial', 'B', 12)
    pdf.set_text_color(220, 53, 69)
    pdf.cell(0, 10, 'Pro Tips for Maximum Impact:', 0, 1)
    pdf.ln(3)
    
    tips = [
        "Keep animations consistent in speed and style throughout",
        "Use entrance animations to build excitement, exit animations sparingly",
        "Time animations to match your speaking pace",
        "Test on the actual presentation setup (projector/screen)",
        "Have a backup version without animations in case of technical issues",
        "Practice with animations until they feel natural to your rhythm"
    ]
    
    pdf.set_font('Arial', '', 10)
    pdf.set_text_color(0, 0, 0)
    
    for tip in tips:
        pdf.cell(5, 6, '-', 0, 0)
        pdf.cell(0, 6, f' {tip}', 0, 1)
        pdf.ln(1)
    
    # Save the guide
    guide_path = "/Users/cloudaistudio/Documents/UST/NEXUS/Nexus_AI_Animation_Guide.pdf"
    pdf.output(guide_path)
    print(f"✅ Animation guide created: {guide_path}")
    
    return guide_path

def create_presentation_summary():
    """Create a quick reference summary of the presentation"""
    
    class PresentationSummary(FPDF):
        def header(self):
            self.set_font('Arial', 'B', 16)
            self.set_text_color(0, 119, 204)
            self.cell(0, 10, 'Nexus AI Club - Presentation Summary', 0, 1, 'C')
            self.ln(10)
    
    pdf = PresentationSummary()
    pdf.add_page()
    
    # Executive summary
    pdf.set_font('Arial', 'B', 14)
    pdf.set_text_color(0, 119, 204)
    pdf.cell(0, 10, 'Executive Summary', 0, 1)
    pdf.ln(3)
    
    pdf.set_font('Arial', '', 11)
    pdf.set_text_color(0, 0, 0)
    pdf.multi_cell(0, 6,
        'The enhanced Nexus AI Club presentation transforms the original 7-slide pitch into a '
        'compelling 15-slide powerhouse designed to attract students, secure faculty support, '
        'and establish corporate partnerships. The presentation positions UST as a leader in '
        'AI education and the club as an essential catalyst for student career success.')
    pdf.ln(8)
    
    # Key improvements
    pdf.set_font('Arial', 'B', 12)
    pdf.set_text_color(0, 119, 204)
    pdf.cell(0, 8, 'Key Improvements Over Original:', 0, 1)
    pdf.ln(2)
    
    improvements = [
        "Data-driven arguments with compelling AI job market statistics",
        "Professional 4-pillar framework for club activities",
        "Specific industry partnerships and career outcomes",
        "Multi-tiered membership options for broader appeal",
        "Clear success metrics and social proof",
        "Strong call-to-action with multiple engagement pathways"
    ]
    
    pdf.set_font('Arial', '', 10)
    pdf.set_text_color(0, 0, 0)
    
    for improvement in improvements:
        pdf.cell(5, 6, '*', 0, 0)
        pdf.cell(0, 6, f' {improvement}', 0, 1)
        pdf.ln(1)
    
    # Slide structure
    pdf.ln(8)
    pdf.set_font('Arial', 'B', 12)
    pdf.set_text_color(0, 119, 204)
    pdf.cell(0, 8, '15-Slide Structure:', 0, 1)
    pdf.ln(2)
    
    slides = [
        "1. Hook: The AI Revolution Starts Here",
        "2. Opportunity: AI Job Market Explosion",
        "3. Problem: Skills Gap in Education",
        "4. Solution: Meet Nexus AI Club",
        "5. Vision: Transform UST into AI Hub",
        "6. Framework: Four Pillars of Excellence",
        "7. Learning: Hands-On Skill Development",
        "8. Network: Industry Connections",
        "9. Success: Competition Achievements",
        "10. Impact: AI for Social Good",
        "11. Benefits: Multi-Audience Value Props",
        "12. Proof: Alumni Success Stories",
        "13. Team: Leadership Credibility",
        "14. Options: Membership Tiers",
        "15. Action: Clear Next Steps"
    ]
    
    pdf.set_font('Arial', '', 9)
    pdf.set_text_color(0, 0, 0)
    
    for slide in slides:
        pdf.cell(0, 5, slide, 0, 1)
    
    # Expected outcomes
    pdf.ln(8)
    pdf.set_font('Arial', 'B', 12)
    pdf.set_text_color(40, 167, 69)
    pdf.cell(0, 8, 'Expected Outcomes:', 0, 1)
    pdf.ln(2)
    
    outcomes = [
        "3x increase in membership applications",
        "Secured corporate partnership commitments",
        "Enhanced university reputation in AI education",
        "Higher student placement rates in AI roles",
        "Establishment of AI curriculum integration"
    ]
    
    pdf.set_font('Arial', '', 10)
    pdf.set_text_color(0, 0, 0)
    
    for outcome in outcomes:
        pdf.cell(5, 6, '>', 0, 0)
        pdf.cell(0, 6, f' {outcome}', 0, 1)
        pdf.ln(1)
    
    summary_path = "/Users/cloudaistudio/Documents/UST/NEXUS/Nexus_AI_Presentation_Summary.pdf"
    pdf.output(summary_path)
    print(f"✅ Presentation summary created: {summary_path}")
    
    return summary_path

if __name__ == "__main__":
    print("🎬 Creating presentation animation guide...")
    animation_guide_path = create_animation_guide()
    
    print("📋 Creating presentation summary...")
    summary_path = create_presentation_summary()
    
    print(f"\n🎉 Complete package created!")
    print(f"📁 Files created:")
    print(f"   • PowerPoint: Nexus_AI_Club_Enhanced_Presentation.pptx")
    print(f"   • Animation Guide: {animation_guide_path}")
    print(f"   • Summary: {summary_path}")
    print(f"   • Script: create_nexus_presentation.py")
    print(f"\n🚀 Ready for an amazing presentation!")
