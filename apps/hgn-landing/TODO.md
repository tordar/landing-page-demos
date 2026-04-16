# HGN Elektro Website - TODO

## Project Overview
Rebuild of HGN Elektro website using Next.js with App Router, Tailwind CSS, and shadcn/ui components.

## 🏗️ Core Structure

### Layout Components
- [ ] **Navbar** - Include in layout.tsx
  - [ ] Logo/branding
  - [ ] Navigation items: Hjem, Tjenester, Portefølje, Autorisasjoner, Karriere, Om HGN, Kontakt oss
  - [ ] Search functionality
  - [ ] Mobile responsive menu
  
- [ ] **Footer** - Include in layout.tsx
  - [ ] Contact information (phone, email, address)
  - [ ] Terms and disclosures (Personvern, Åpenhetsloven)
  - [ ] Social media links (Facebook, LinkedIn)
  - [ ] Company branding
  - [ ] Copyright information

## 📄 Pages Structure

### 1. Home Page (`/`)
- [ ] **Hero Section**
  - [ ] Company vision: "Vår visjon er å levere elektrotjenester av kvalitet gjennom stolthet til vårt arbeid"
  - [ ] Call-to-action button
  
- [ ] **Project Slider**
  - [ ] Showcase featured projects
  - [ ] Navigation arrows/dots
  - [ ] Auto-play functionality
  - [ ] Projects to include:
    - [ ] Oslo Handelstands Forening
    - [ ] Brand Factory
    - [ ] Grenseveien 88
  
- [ ] **Service Modules**
  - [ ] Næring og offentlig
  - [ ] Privat
  - [ ] Smarthus
  - [ ] Each module links to detailed service pages
  
- [ ] **Contact Banner**
  - [ ] Prominent call-to-action for contacting the company
  - [ ] Quick contact information

### 2. Tjenester Page (`/tjenester`)
- [ ] **Service Overview**
  - [ ] Grid layout of all services
  - [ ] Service categories:
    - [ ] Næring og offentlig
    - [ ] Privat
    - [ ] Smarthus
    - [ ] Elbil-lading
    - [ ] Enøktiltak
    - [ ] Belysning
  
- [ ] **Individual Service Pages** (`/tjenester/[service]`)
  - [ ] `/tjenester/naering-offentlig`
  - [ ] `/tjenester/privat`
  - [ ] `/tjenester/smarthus`
  - [ ] `/tjenester/elbil-lading`
  - [ ] `/tjenester/enoktiltak`
  - [ ] `/tjenester/belysning`
  - [ ] Detailed descriptions for each service
  - [ ] Related projects/case studies
  - [ ] Contact form for service inquiries

### 3. Portefølje Page (`/portefolje`)
- [ ] **Project Grid**
  - [ ] Display all projects in grid layout
  - [ ] Project cards with images and brief descriptions
  
- [ ] **Filtering System**
  - [ ] Filter by industry type:
    - [ ] Hoteller
    - [ ] Kontor
    - [ ] Industri
    - [ ] Skoler
    - [ ] Butikker
    - [ ] Privat
  
- [ ] **Individual Project Pages** (`/portefolje/[project]`)
  - [ ] `/portefolje/oslo-handelstands-forening`
  - [ ] `/portefolje/brand-factory`
  - [ ] `/portefolje/grenseveien-88`
  - [ ] Detailed project information
  - [ ] Image gallery
  - [ ] Technical specifications
  - [ ] Client testimonials (if available)

### 4. Autorisasjoner Page (`/autorisasjoner`)
- [ ] **Authorization Grid**
  - [ ] Display all company authorizations
  - [ ] Certificate images/badges
  - [ ] Authorization descriptions
  - [ ] Validity dates
  - [ ] Issuing authorities

### 5. Karriere Page (`/karriere`)
- [ ] **Company Culture Section**
  - [ ] What kind of person the company is looking for
  - [ ] Company values and work environment
  - [ ] Benefits and opportunities
  
- [ ] **Open Application Form**
  - [ ] Personal information fields
  - [ ] CV upload
  - [ ] Cover letter
  - [ ] Contact information
  - [ ] Form validation and submission

### 6. Om HGN Page (`/om-hgn`)
- [ ] **Company Story**
  - [ ] Company history and mission
  - [ ] Vision statement
  
- [ ] **Founders Section**
  - [ ] Profile images of three founders
  - [ ] Basic information about each founder
  - [ ] Their roles and expertise
  - [ ] Professional backgrounds

### 7. Kontakt Oss Page (`/kontakt-oss`)
- [ ] **Contact Form**
  - [ ] General inquiry form
  - [ ] Project inquiry form
  - [ ] Form validation and submission
  
- [ ] **Contact Information**
  - [ ] Phone: 22 12 00 03
  - [ ] Email: post@hgnelektro.no
  - [ ] Address: Strømsveien 223, 0668 Oslo
  - [ ] Business hours
  
- [ ] **Team Grid**
  - [ ] Display all employees
  - [ ] Individual contact information
  - [ ] Roles and specializations
  - [ ] Profile images

### 8. Search Functionality (`/search`)
- [ ] **Search Implementation**
  - [ ] Search across all pages
  - [ ] Filter by page type
  - [ ] Search results with snippets
  - [ ] Highlighting of search terms

## 🎨 Design & UI Components

### shadcn/ui Components Needed
- [ ] Button
- [ ] Card
- [ ] Badge
- [ ] Navigation Menu
- [ ] Sheet (for mobile menu)
- [ ] Separator
- [ ] Form components (Input, Textarea, Select)
- [ ] Dialog/Modal
- [ ] Carousel (for project slider)
- [ ] Tabs
- [ ] Avatar
- [ ] Skeleton (for loading states)

### Custom Components
- [ ] **ProjectSlider** - Hero section carousel
- [ ] **ServiceCard** - Service display cards
- [ ] **ProjectCard** - Portfolio project cards
- [ ] **TeamMember** - Employee profile cards
- [ ] **ContactForm** - Reusable contact forms
- [ ] **SearchBar** - Global search component
- [ ] **FilterBar** - Portfolio filtering
- [ ] **AuthorizationBadge** - Authorization display

## 🔧 Technical Implementation

### Data Management
- [ ] Create data structures for:
  - [ ] Projects
  - [ ] Services
  - [ ] Team members
  - [ ] Authorizations
  - [ ] Company information

### SEO & Performance
- [ ] Metadata for all pages
- [ ] Open Graph tags
- [ ] Image optimization
- [ ] Loading states
- [ ] Error boundaries

### Responsive Design
- [ ] Mobile-first approach
- [ ] Tablet breakpoints
- [ ] Desktop optimization
- [ ] Touch-friendly interactions

### Accessibility
- [ ] ARIA labels
- [ ] Keyboard navigation
- [ ] Screen reader compatibility
- [ ] Color contrast compliance

## 🚀 Deployment
- [ ] Environment setup
- [ ] Build optimization
- [ ] Domain configuration
- [ ] SSL certificate
- [ ] Performance monitoring

## 📝 Content
- [ ] Gather all project images
- [ ] Write service descriptions
- [ ] Collect team photos and bios
- [ ] Authorization certificates
- [ ] Company branding assets
- [ ] Legal pages content

---

## Priority Order
1. ✅ Project setup (Next.js, Tailwind, shadcn/ui)
2. 🔄 Layout components (Navbar, Footer)
3. 🔄 Home page structure
4. 🔄 Basic page routing
5. 🔄 Core components
6. 🔄 Content integration
7. 🔄 Styling and responsive design
8. 🔄 Forms and interactions
9. 🔄 Search functionality
10. 🔄 Testing and optimization 