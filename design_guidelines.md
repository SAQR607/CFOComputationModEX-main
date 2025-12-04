# CFO Computation Design Guidelines

## Design Approach

**Selected Framework**: Corporate Design System with Arabic Executive Refinement
- Drawing from enterprise platforms like Linear, Stripe, and Microsoft Fluent for corporate credibility
- Adapted for RTL Arabic professional audience
- Executive-level sophistication with accessible information hierarchy

## Typography System

**Arabic Font Stack**:
- Headings: Tajawal Bold (via Google Fonts) - strong, modern Arabic sans-serif
- Body Text: Noto Sans Arabic Regular - exceptional readability, professional
- Accent/Stats: Tajawal Medium for emphasis

**Scale**:
- Hero Headlines: text-5xl to text-6xl (bold)
- Section Titles: text-3xl to text-4xl (bold)
- Card Headers: text-xl to text-2xl (medium)
- Body Text: text-base to text-lg
- Captions/Meta: text-sm

## Layout System

**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 consistently
- Section padding: py-20 to py-24 (desktop), py-12 to py-16 (mobile)
- Card spacing: p-6 to p-8
- Grid gaps: gap-6 to gap-8
- Element margins: mb-4, mb-6, mb-8 for vertical rhythm

**Container Strategy**:
- Max-width: max-w-7xl for most sections
- Narrow content: max-w-4xl for text-heavy areas
- Full-width: Only for hero and major visual sections

**RTL Implementation**:
- All layouts must flow right-to-left
- Navigation aligned to right
- Text-right for all Arabic content
- Flex-row-reverse and grid flow adjustments
- Icons/arrows flipped appropriately

## Component Library

### Navigation (Corporate Executive)
- Fixed header with subtle shadow
- Logo positioned right side
- Primary navigation links (6-8 items) in clean horizontal layout
- Dual CTA buttons: "عرض المسابقة" (primary) and "طلب عرض" (secondary)
- Mobile: Hamburger menu (right-aligned) with full-screen overlay

### Hero Section
**Layout**: Split 60/40 composition
- Right 60%: Arabic headline (3 lines max), subheadline (2 lines), dual CTAs stacked vertically with mb-4 spacing
- Left 40%: Professional finance imagery (boardroom meeting, financial dashboard visualization, or executive handshake)
- Background: Subtle gradient or geometric pattern suggesting financial data
- CTAs with backdrop-blur-md background over image

### Stage Cards (4-Column Grid on Desktop)
- Grid: grid-cols-1 md:grid-cols-2 lg:grid-cols-4
- Each card: Rounded corners (rounded-xl), elevated shadow
- Icon area at top (80x80px), stage number, Arabic title, 3-line description
- Footer: Scoring weight badge and "Requirements" tag
- Hover: Subtle lift effect (no color change)

### Participant Journey Timeline
**Visual Flow**: Horizontal step indicator (5 steps)
- Connected by arrow graphics between stages
- Each step: Circle icon (64x64), Arabic label below, micro-description
- Progress line connecting all steps
- Mobile: Vertical stacked layout

### Scoring Visualization
**Dashboard-Style Display**:
- Large donut chart showing 5 criteria segments
- List beside chart with percentage breakdowns
- Icons for each criterion (accuracy, logic, structure, strategy, presentation)
- Clean data table format below with detailed point allocations

### Certificate Showcase
**3-Column Grid**:
- High-quality certificate mockups (portrait orientation)
- Preview cards with certificate thumbnail
- Title in Arabic, download button below each
- Hover: Preview modal with full certificate view

### Chatbot Widget
- Fixed bottom-left position (RTL adjusted)
- Circular button with chat icon
- Expands to 400x600px card with Arabic Q&A sample
- Header: "المساعد الذكي" with close button

### Sponsorship Packages
**3-Column Cards** (Gold/Silver/Bronze):
- Card hierarchy: Gold elevated highest, Bronze subtle
- Package icon at top, tier name, pricing placeholder
- Bulleted benefits list (5-7 items each)
- CTA: "طلب الرعاية" button

### Forms
- Right-aligned labels
- Input fields with proper RTL text-align
- Placeholder text in lighter gray
- Submit button: Full-width on mobile, auto-width on desktop
- Validation messages in Arabic below fields

## Multi-Column Usage

**Apply 2-3 Column Layouts For**:
- Competition stages (4 cols desktop → 2 tablet → 1 mobile)
- Benefits/features grids (3 cols)
- Certificate displays (3 cols)
- Sponsorship packages (3 cols)
- FAQ accordion (2 cols desktop)

**Single Column For**:
- Hero content area
- Journey timeline narrative
- Long-form Arabic text sections
- Contact form main area

## Images

### Required Images:
1. **Hero**: Executive boardroom scene or financial dashboard visualization (1920x1080)
2. **About Section**: Professional team collaboration or strategy meeting (1200x800)
3. **Stage Icons**: Custom financial icons for each of 4 stages (chart, calculator, strategy, presentation)
4. **Certificate Mockups**: Three high-res certificate designs in portrait format (850x1100)
5. **Jury Panel**: Professional headshots placeholder grid (6-8 people, 400x400 each)
6. **Success Stories**: Participant testimonial images (300x300 circular crops)
7. **Sponsor Logos**: Placeholder grid for partner company logos

### Image Treatment:
- Subtle overlays on hero imagery for text contrast
- Rounded corners (rounded-lg) on content images
- Shadow effects on floating elements (certificates, cards)

## Accessibility & RTL

- `dir="rtl"` on HTML element
- `lang="ar"` attribute
- Semantic HTML5 structure (header, nav, main, section, footer)
- Alt text in Arabic for all images
- ARIA labels for interactive elements
- Keyboard navigation with visible focus states
- Sufficient contrast ratios for all text

## Footer Design

**3-Column Layout** (desktop):
- Right: Logo, company tagline, social icons
- Center: Quick links (About, Stages, Sponsorship, Contact)
- Left: Newsletter signup, contact info
- Bottom bar: Privacy links, required credit: "تصميم العرض والنسخة التجريبية: إبراهيم أحمد"

## Animations

**Minimal, Professional Motion**:
- Fade-in on scroll for section entries
- Subtle hover elevations on cards (translateY(-4px))
- Smooth transitions (transition-all duration-300)
- No distracting parallax or heavy animations
- Loading states for form submissions