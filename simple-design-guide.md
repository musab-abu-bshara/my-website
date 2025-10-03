# Simple Design Guide - Arabic Website

## Your Color Palette

```css
/* Main Colors */
--primary-burgundy: rgb(
  140,
  30,
  70
); /* Buttons, headings, important elements */
--secondary-copper: rgb(180, 120, 80); /* Accents, highlights, warm elements */
--accent-charcoal: rgb(60, 60, 60); /* Text, borders */

/* Supporting Colors */
--white: #ffffff; /* Background, cards */
--cream: rgb(250, 245, 240); /* Light sections */
--warm-gray: rgb(120, 110, 100); /* Subtle borders */
```

## Page Designs

### 1. Home Page (الصفحة الرئيسية)

**Header/Navigation:**

- Background: `--primary-burgundy`
- Text: white
- Logo: white

**Hero Section:**

- Background: `--cream`
- Main heading: `--primary-burgundy`
- Text: `--accent-charcoal`
- CTA button: `--primary-burgundy` with white text

**Welcome Cards:**

- Background: white
- Border: `--warm-gray`
- Headings: `--primary-burgundy`
- Text: `--accent-charcoal`
- Hover: border becomes `--secondary-copper`

**Footer:**

- Background: `--accent-charcoal`
- Text: white
- Links: `--secondary-copper`

### 2. About Page (من أنا)

**Hero Section:**

- Background: light `--secondary-copper` (very faded)
- Heading: `--primary-burgundy`
- Text: `--accent-charcoal`

**Photo Section:**

- Photo border: `--primary-burgundy` (4px)
- Background: white

**Skills Section:**

- Background: white
- Skill bars: gradient from `--primary-burgundy` to `--secondary-copper`
- Text: `--accent-charcoal`

### 3. Contact Page (تواصل معي)

**Form:**

- Background: white
- Input borders: `--warm-gray`
- Focus borders: `--primary-burgundy`
- Submit button: `--primary-burgundy` with white text
- Labels: `--accent-charcoal`

**Contact Info Cards:**

- Background: light `--secondary-copper` (very faded)
- Icons: `--primary-burgundy`
- Text: `--accent-charcoal`

### 4. Services Page (خدماتي)

**Service Cards:**

- Background: white
- Border: `--warm-gray`
- Heading: `--primary-burgundy`
- Price: `--secondary-copper`
- Text: `--accent-charcoal`
- Button: `--primary-burgundy` with white text
- Hover: border becomes `--secondary-copper`

**Process Steps:**

- Step numbers: `--primary-burgundy` background, white text
- Step content: white background
- Text: `--accent-charcoal`

### 5. Portfolio Page (أعمالي)

**Filter Buttons:**

- Default: white background, `--accent-charcoal` text
- Active: `--primary-burgundy` background, white text
- Hover: `--secondary-copper` background, white text

**Project Cards:**

- Background: white
- Image overlay on hover: `--primary-burgundy` with opacity
- Title: `--primary-burgundy`
- Description: `--accent-charcoal`
- "View" button: `--secondary-copper` background, white text

### 6. Album Page (الألبوم)

**Photo Grid:**

- Photo borders: `--warm-gray`
- Hover overlay: `--primary-burgundy` with 80% opacity
- Category tags: `--secondary-copper` background, white text

**Lightbox:**

- Background: `--accent-charcoal` with opacity
- Navigation arrows: `--secondary-copper`
- Close button: `--primary-burgundy`

### 7. Privacy Policy Page (سياسة الخصوصية)

**Content:**

- Background: white
- Main headings: `--primary-burgundy`
- Subheadings: `--secondary-copper`
- Text: `--accent-charcoal`
- Important highlights: `--secondary-copper` background (very light)
- Links: `--primary-burgundy`

### 8. Return Policy Page (سياسة الإرجاع)

**Highlight Box:**

- Background: light `--secondary-copper` (very faded)
- Border: `--secondary-copper`
- Text: `--accent-charcoal`

**Steps:**

- Step numbers: `--primary-burgundy` circles, white text
- Content: white background
- Headings: `--primary-burgundy`
- Text: `--accent-charcoal`

### 9. Terms Page (الشروط والأحكام)

**Navigation Sidebar:**

- Background: `--cream`
- Current section: `--primary-burgundy` text
- Other links: `--accent-charcoal`

**Content:**

- Background: white
- Headings: `--primary-burgundy`
- Text: `--accent-charcoal`
- Important clauses: light `--secondary-copper` background

### 10. Testimonials Page (آراء العملاء)

**Hero:**

- Background: gradient from light `--secondary-copper` to `--cream`
- Heading: `--primary-burgundy`

**Testimonial Cards:**

- Background: white
- Left border: `--primary-burgundy` (4px)
- Client name: `--primary-burgundy`
- Company: `--secondary-copper`
- Review text: `--accent-charcoal`
- Stars: `--secondary-copper`

**Client Photos:**

- Border: `--secondary-copper` (2px)

## Quick Reference

### When to use each color:

**Primary Burgundy** - Use for:

- All buttons
- Main headings
- Important links
- Navigation background
- Borders on photos/important elements

**Secondary Copper** - Use for:

- Accents and highlights
- Hover states
- Tags and badges
- Icons
- Light section backgrounds (very faded)

**Accent Charcoal** - Use for:

- All body text
- Footer background
- Form borders (default state)

**White** - Use for:

- Card backgrounds
- Button text
- Main content areas

**Cream** - Use for:

- Light section backgrounds
- Sidebar backgrounds

**Warm Gray** - Use for:

- Subtle borders
- Dividers

## Typography

**Arabic Fonts:**

- Headers: Cairo (Bold weight)
- Body: Tajawal (Normal weight)

**Font Colors:**

- Headers: `--primary-burgundy`
- Body text: `--accent-charcoal`
- Links: `--primary-burgundy`

## Button Styles

**Primary Button:**

- Background: `--primary-burgundy`
- Text: white
- Sharp corners (4px radius)

**Secondary Button:**

- Background: `--secondary-copper`
- Text: white
- Sharp corners (4px radius)

**Outline Button:**

- Border: `--primary-burgundy`
- Text: `--primary-burgundy`
- Background: transparent
- Hover: Background becomes `--primary-burgundy`, text becomes white
