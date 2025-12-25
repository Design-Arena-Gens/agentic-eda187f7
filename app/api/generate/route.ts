import { NextResponse } from 'next/server';

const systemPrompt = `You are the Lead Content Strategist & Market Researcher for 'NextGen Templates'. Your primary goal is to help grow Instagram and Gumroad business by providing high-conversion, well-researched content.

Your Core Knowledge Base:
- Product Focus: Aura Smart Link Pro (A premium, secure, AI-driven link-in-bio template)
- Brand Voice: Professional, futuristic, helpful, and high-energy
- Target Audience: Digital creators, entrepreneurs, freelancers, and influencers who need a smart online presence

Your Output Format (always follow this):
1. The Goal: Why are we making this?
2. The Research: What trend or pain point is this hitting?
3. The Content: Exact script, captions, and hashtags
4. The CTA: Strong call to action for Gumroad sales

Safety First: Never suggest automated bot actions. Focus on manual upload strategies for account safety.`;

const taskPrompts = {
  hook: `Research and create a powerful hook for Aura Smart Link Pro. Focus on current trends in link-in-bio tools and what makes creators click. Provide a hook that can be used across multiple pieces of content.`,
  reel: `Create an Instagram Reel script for Aura Smart Link Pro. Include:
- Hook (first 3 seconds)
- Body (15-20 seconds of value/demonstration)
- CTA (final 5 seconds)
- Caption
- 10-15 relevant hashtags`,
  ad: `Create 5 Instagram Ad copy variations for Aura Smart Link Pro. Each should be 2-3 sentences optimized for conversion. Include psychological triggers and pain points.`,
  gumroad: `Provide Gumroad optimization recommendations for Aura Smart Link Pro based on buyer psychology. Include:
- Product title optimization
- Description improvements
- Pricing psychology
- Thumbnail/cover suggestions
- Trust-building elements`,
  trend: `Analyze current digital marketing and UI/UX trends relevant to link-in-bio tools. Identify 3 specific trends that can be leveraged for Aura Smart Link Pro marketing and provide actionable insights.`
};

export async function POST(request: Request) {
  try {
    const { requestType, customPrompt } = await request.json();

    const taskPrompt = taskPrompts[requestType as keyof typeof taskPrompts];
    const fullPrompt = customPrompt
      ? `${taskPrompt}\n\nAdditional Requirements: ${customPrompt}`
      : taskPrompt;

    // Simulated AI response (in production, this would call OpenAI API)
    const response = generateContent(requestType, customPrompt);

    return NextResponse.json(response);
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to generate content' },
      { status: 500 }
    );
  }
}

function generateContent(requestType: string, customPrompt: string) {
  const responses: Record<string, any> = {
    hook: {
      goal: "Create a scroll-stopping hook that immediately captures attention and speaks to the pain point of having multiple links but only one Instagram bio link.",
      research: `Current trends show:
• 73% of creators struggle with link management in bio
• "Link in bio" is searched 2.1M+ times monthly
• AI-powered tools see 3x higher engagement
• Security concerns are rising (42% worry about link safety)
• Visual, sleek designs convert 2.5x better than basic link pages`,
      content: `**PRIMARY HOOK OPTIONS:**

1. "Your Instagram bio deserves better than a basic link tree 🚀"

2. "Stop losing followers at your link in bio. Here's why... 👇"

3. "This AI-powered link tool just changed the game for creators 💎"

**USAGE:**
Use Hook #1 for carousel posts highlighting features
Use Hook #2 for problem-solution reels
Use Hook #3 for trend-jacking content

**PSYCHOLOGICAL TRIGGERS:**
✓ Creates curiosity gap
✓ Implies exclusivity
✓ Suggests missed opportunity
✓ Promises transformation`,
      cta: "Get Aura Smart Link Pro on Gumroad → Transform your bio into a conversion machine. Limited launch pricing 🔥"
    },
    reel: {
      goal: "Create a 30-second Reel that demonstrates value immediately while building desire for Aura Smart Link Pro through visual proof.",
      research: `Reel trends analysis:
• "Before/After" formats get 4.2x more shares
• First 1.5 seconds determine 80% of watch time
• Text overlay increases completion rate by 67%
• Pain point → Solution format converts 3x higher
• Tech/UI demonstrations perform best 10am-2pm EST`,
      content: `**REEL SCRIPT:**

[0-3s] HOOK:
Text: "Your link in bio is costing you sales 💸"
Visual: Show basic link tree with boring design

[3-10s] PROBLEM:
Text: "Slow loading ❌ No branding ❌ Looks generic ❌"
Visual: Click through slow, generic link page

[10-20s] SOLUTION:
Text: "Meet Aura Smart Link Pro ✨"
Visual: Showcase sleek UI, fast loading, branded design
Voiceover: "AI-powered, lightning fast, and completely YOU"

[20-25s] PROOF:
Text: "Track clicks • Smart analytics • Secure hosting"
Visual: Quick dashboard preview

[25-30s] CTA:
Text: "Link in bio to upgrade 🚀"
Visual: Your Gumroad link prominently displayed

**CAPTION:**
Your link in bio is your digital storefront. Make it count. 💎

Aura Smart Link Pro gives you:
✨ AI-powered optimization
⚡ Lightning-fast loading
🎨 Full customization
📊 Smart analytics
🔒 Enterprise security

Stop losing sales to slow, ugly link pages.

Upgrade now → Link in bio

**HASHTAGS:**
#linkinbio #contentcreator #digitalmarketing #socialmediamarketing #instagramtips #creatortips #entrepreneurlife #smallbusinesstips #marketingstrategy #growyourbusiness #creatoreconomy #digitalproducts #passiveincome #onlinebusiness #marketingtools

**POSTING STRATEGY:**
• Best time: Tuesday-Thursday, 11am-1pm EST
• Pin this to your profile
• Respond to ALL comments within first hour
• Share to Stories with poll sticker`,
      cta: "Tap the link in bio → Get Aura Smart Link Pro → Start converting traffic into customers TODAY. Launch special: 40% off 🔥"
    },
    ad: {
      goal: "Create 5 high-converting ad copy variations that can be A/B tested, each targeting different psychological triggers and pain points.",
      research: `Instagram Ads best practices 2024:
• Questions in copy increase CTR by 48%
• Social proof boosts conversion by 34%
• Urgency/scarcity drives 27% more clicks
• Benefit-focused copy outperforms feature-focused by 2.3x
• Numbers and stats build credibility instantly`,
      content: `**AD COPY #1 - Pain Point Focus**
"Still using a basic link tree? 😬 Your competitors aren't. Aura Smart Link Pro loads 3x faster, looks 10x better, and converts like crazy. See why 10,000+ creators made the switch → [Shop Now]"

**AD COPY #2 - FOMO/Social Proof**
"While you're reading this, a creator just made their first sale through Aura Smart Link Pro. AI-powered link pages that actually convert. Join 10,000+ smart creators → [Get Started]"

**AD COPY #3 - Question Hook**
"What if every person who tapped your link in bio actually bought something? 🤔 Aura Smart Link Pro makes it possible. Smart routing, instant loading, conversion tracking built-in → [Learn More]"

**AD COPY #4 - Direct Benefit**
"3x your link-in-bio conversions without spending a dime on ads. Aura Smart Link Pro: The link page that works as hard as you do. Premium, AI-driven, ridiculously fast → [Upgrade Now]"

**AD COPY #5 - Urgency + Transformation**
"Your Instagram bio is wasting 73% of your clicks right now. Fix it in 5 minutes with Aura Smart Link Pro. Launch special ends soon - secure your lifetime deal → [Claim Discount]"

**TESTING STRATEGY:**
Week 1: Test Ad #1 vs #2
Week 2: Winner vs #3
Week 3: Winner vs #4 and #5
Track: CTR, CPC, Conversion Rate, ROAS

**TARGET AUDIENCES:**
• Creators with 5k-100k followers
• Entrepreneurs interested in digital products
• Freelancers and consultants
• Course creators and coaches
• E-commerce shop owners`,
      cta: "Get Aura Smart Link Pro now → gumroad.com/yourshop → Limited launch pricing + lifetime updates + 30-day money-back guarantee 🚀"
    },
    gumroad: {
      goal: "Optimize your Gumroad product page to maximize conversions using proven buyer psychology principles and platform-specific best practices.",
      research: `Gumroad conversion optimization insights:
• Product titles with power words convert 45% better
• First 2 lines of description are critical (above fold)
• 5-7 bullet points optimal for feature lists
• Social proof increases sales by 62%
• Clear, specific outcomes outperform vague promises
• Preview images should show the actual product
• Tiered pricing increases average order value by 33%`,
      content: `**PRODUCT TITLE OPTIMIZATION:**
Current format: "Aura Smart Link Pro - Link in Bio Template"
Optimized: "Aura Smart Link Pro ⚡ AI-Powered Link-in-Bio Template (Converts 3x Better)"

Why: Includes benefit, social proof implication, and visual element

**DESCRIPTION STRUCTURE:**

**[ABOVE THE FOLD - First 2 lines]**
"Transform your Instagram bio link into a high-converting sales machine. Aura Smart Link Pro is the AI-powered, lightning-fast link page that turns casual clicks into paying customers."

**[PROBLEM AGITATION]**
You know the pain:
❌ Slow-loading link pages that lose visitors
❌ Generic designs that don't match your brand
❌ Zero analytics to track what's working
❌ Clunky builders that waste hours of your time

**[SOLUTION - YOUR PRODUCT]**
Aura Smart Link Pro solves all of this:
✨ AI-optimized layouts that convert
⚡ Loads in under 0.5 seconds
🎨 Fully customizable to match YOUR brand
📊 Built-in analytics dashboard
🔒 Enterprise-grade security
📱 Perfect on every device
🚀 Set up in under 5 minutes

**[WHAT YOU GET]**
Inside Aura Smart Link Pro:
• Complete HTML/CSS/JS template files
• 5 pre-built color themes
• Drag-and-drop customization guide
• Analytics integration tutorial
• Lifetime updates
• Priority support access
• Video setup walkthrough
• Bonus: 50 Canva templates for link thumbnails

**[SOCIAL PROOF]**
"This literally 3x'd my click-to-sale rate. Best $47 I've spent on my business." - Sarah M., Content Creator

Join 10,000+ creators who upgraded their link in bio.

**[GUARANTEE]**
30-Day Money-Back Guarantee - If you don't love it, full refund. No questions.

**THUMBNAIL OPTIMIZATION:**
• Show actual product interface (screenshot of sleek design)
• Include "3x Conversions" badge
• Use high-contrast colors (purple/blue gradient with white text)
• Add "AI-Powered" label
• Mobile mockup showing the link page

**PRICING PSYCHOLOGY:**
Consider tiered pricing:
• Starter: $27 (template only)
• Pro: $47 (template + themes + tutorials) ← Mark as "MOST POPULAR"
• Business: $97 (everything + custom setup + 1-on-1 call)

**TRUST ELEMENTS TO ADD:**
• Display total number of sales
• Add customer testimonials (3-5 with profile pics)
• Include "Lifetime Updates" badge
• Show "Money-Back Guarantee" prominently
• Add your social proof (Instagram handle, follower count)
• Include preview video (30-45 seconds)

**GUMROAD-SPECIFIC TIPS:**
• Enable "Pay what you want" with $47 minimum (increases perceived value)
• Offer a $10 upsell: "Add custom domain setup guide"
• Use Gumroad's email sequence for abandoned carts
• Create a follow-up product: "Advanced Aura Templates Pack"`,
      cta: "Update your Gumroad page today → Watch your conversion rate climb → Your best-selling product is one optimization away 📈"
    },
    trend: {
      goal: "Identify and analyze 3 current trends that can be immediately leveraged to create viral content and drive sales for Aura Smart Link Pro.",
      research: `Trend Analysis Method:
• Monitoring Instagram Explore page patterns
• Analyzing TikTok trending sounds
• Tracking Google Trends in "link in bio" niche
• Reviewing competitor viral content
• Studying platform algorithm changes
• Examining buyer behavior shifts

Current Digital Marketing Landscape:
• Short-form video dominates (87% of content consumption)
• AI tools see 340% increase in search interest
• "Aesthetic" and "clean UI" keywords up 215%
• Security/privacy concerns drive purchase decisions
• Behind-the-scenes content builds trust`,
      content: `**TREND #1: "Day in the Life of a [Tool]" Content**

What it is: Personifying products and showing a "day in the life" perspective - currently getting 2-5M views in tech/digital product space

How to leverage:
Create a Reel: "POV: You're a link in bio page powered by AI"
- Show morning: Links getting organized automatically
- Afternoon: Handling massive traffic spike (fast loading)
- Evening: Generating analytics reports
- Include trending audio + text overlay

Why it works: Makes technical products relatable and entertaining
Conversion potential: High - showcases features naturally
Timeline: Create and post within 48 hours

**TREND #2: "Before/After" Transformation Split-Screen**

What it is: Side-by-side comparisons showing dramatic improvements - 67% higher save rate than regular posts

How to leverage:
Create carousel posts with:
Left side: Basic Linktree/generic page (slow, boring, no brand)
Right side: Aura Smart Link Pro (fast, sleek, branded, animated)

Include metrics:
• Load time: 3.2s → 0.4s
• Bounce rate: 67% → 23%
• Conversion rate: 2% → 6.8%

Why it works: Immediate visual proof of value
Conversion potential: Very High - directly demonstrates ROI
Timeline: Create 5 variations this week

**TREND #3: "Unpopular Opinion" Contrarian Takes**

What it is: Starting with "Unpopular opinion:" then sharing a hot take - drives massive engagement through controversy

How to leverage:
Post ideas:
• "Unpopular opinion: Free link-in-bio tools are costing you thousands in lost sales"
• "Unpopular opinion: Your Linktree is the reason you're not growing"
• "Unpopular opinion: If your link page takes >1 second to load, you've already lost the sale"

Format: Text post or talking-head video
Hook formula: Unpopular opinion → Why it's true → How to fix it → CTA

Why it works: Drives debate, increases comments, boosts algorithmic reach
Conversion potential: Medium-High - builds thought leadership
Timeline: Post 2x per week for next month

**BONUS TREND: AI Feature Spotlights**

What it is: "AI" is the most valuable keyword in 2024 - content featuring AI gets 3.4x more reach

How to leverage:
Create content series: "AI Feature Friday"
Each week showcase one AI feature of Aura:
- Week 1: Smart link prioritization
- Week 2: Automated color scheme generation
- Week 3: Predictive analytics
- Week 4: AI-powered load optimization

Why it works: Rides current AI hype, educates buyers, SEO-friendly
Conversion potential: High - demonstrates unique value prop
Timeline: Start this Friday, continue weekly

**ACTION PLAN:**
Monday: Create Trend #2 carousel
Tuesday: Film Trend #1 Reel
Wednesday: Post Trend #3 opinion
Thursday: Engage with comments, prepare Trend #2 variation
Friday: Launch "AI Feature Friday" series
Weekend: Analyze performance, plan next week

**HASHTAG TRENDS TO USE:**
#AItools (rising 340%)
#creatoreconomy (2.1M posts)
#linkinbio (3.4M posts)
#digitalproducts (892K posts)
#passiveincome (4.2M posts)`,
      cta: "Implement these trends NOW → Watch your engagement explode → Turn views into Gumroad sales → Aura Smart Link Pro is your unfair advantage 🚀"
    }
  };

  return responses[requestType] || responses.hook;
}
