import { useRef } from 'react'

const footerLinks = [
  {
    title: 'ABOUT',
    links: [
      { name: 'Bootcamps', href: '#bootcamps' },
      { name: 'Workshops', href: '#workshops' },
      { name: 'Courses', href: '#courses' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { name: 'About Us', href: '#about-us' },
      { name: 'Contact', href: '#contact' },
      { name: 'Community', href: '#community' },
    ],
  },
  {
    title: 'CONTACT',
    links: [
      { name: 'hello@LazyDeveloper TechEds.com', href: 'mailto:hello@LazyDeveloper TechEds.com' },
      { name: '+91 91741 64948', href: 'tel:+919174164948' },
      { name: '+91 81037 18603', href: 'tel:+918103718603' },
    ],
  },
]

const socialIcons = [
  { 
    name: 'Instagram', 
    href: '#instagram',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.069-1.644-.069-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.668-.072-4.948-.2-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    )
  },
  { 
    name: 'LinkedIn', 
    href: '#linkedin',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    )
  },
  { 
    name: 'Discord', 
    href: '#discord',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028 14.09 14.09 0 001.226-1.994.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.196.372.292a.077.077 0 01-.006.128 12.51 12.51 0 01-1.873.892.076.076 0 00-.041.107 14.36 14.36 0 001.226 1.99.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.956 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.419 0 1.334-.946 2.419-2.157 2.419z" />
      </svg>
    )
  },
  { 
    name: 'YouTube', 
    href: '#youtube',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
  { 
    name: 'X', 
    href: '#x',
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932 6.064-6.932zm-1.29 19.494h2.039L6.482 3.239H4.293L17.61 20.647z" />
      </svg>
    )
  },
]

function FooterSection() {
  const currentYear = new Date().getFullYear()
  const textContainerRef = useRef(null)

  const handleMouseMove = (e) => {
    if (!textContainerRef.current) return
    const rect = textContainerRef.current.getBoundingClientRect()
    // Calculate precise x and y coordinates relative to the container
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    
    // Inject the coordinates directly into CSS variables for max performance
    textContainerRef.current.style.setProperty('--x', `${x}px`)
    textContainerRef.current.style.setProperty('--y', `${y}px`)
  }

  const handleMouseEnter = () => {
    if (textContainerRef.current) {
      textContainerRef.current.style.setProperty('--spotlight-opacity', '1')
    }
  }

  const handleMouseLeave = () => {
    if (textContainerRef.current) {
      textContainerRef.current.style.setProperty('--spotlight-opacity', '0')
    }
  }

  return (
    <footer className="relative flex flex-col bg-black px-4 pt-16 sm:px-6 lg:px-10 lg:pt-20">
      
      {/* 1. Interactive Spotlight Hero Text */}
      <div 
        ref={textContainerRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="absolute left-0 top-0 w-full -translate-y-1/2 overflow-hidden leading-none"
        style={{ '--spotlight-opacity': '0', '--x': '50%', '--y': '50%' }}
      >
        {/* Base Layer: Hollow Outline Text */}
        <span 
          className="block whitespace-nowrap font-display text-[15vw] font-extrabold tracking-tighter text-transparent lg:text-[180px]"
          style={{ WebkitTextStroke: '1px rgba(255,255,255,0.1)' }}
        >
          LazyDeveloper TechEd
        </span>

        {/* Overlay Layer: Solid Colored Text (Revealed by Mask) */}
        <span 
          className="absolute left-0 top-0 block w-full whitespace-nowrap font-display text-[15vw] font-extrabold tracking-tighter text-transparent transition-opacity duration-300 lg:text-[180px]"
          style={{ 
            // Vibrant gradient fill for the text
            backgroundImage: 'linear-gradient(to right, #C34A2C, #ff6a00)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            opacity: 'var(--spotlight-opacity)',
            // The magic: A radial gradient mask that follows the mouse coordinates
            WebkitMaskImage: 'radial-gradient(circle 250px at var(--x) var(--y), black 20%, transparent 80%)',
            maskImage: 'radial-gradient(circle 250px at var(--x) var(--y), black 20%, transparent 80%)',
          }}
        >
          LazyDeveloper TechEd
        </span>
      </div>

      {/* Spacer to push content down below the absolute hero text */}
      <div className="h-20 sm:h-28 lg:h-32"></div>

      {/* 2. Main Content Grid */}
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 border-t border-white/5 pb-12 pt-16 md:grid-cols-2 lg:grid-cols-5 lg:gap-8">
        
        {/* Logo and Social Connection */}
        <div className="pr-10 lg:col-span-2">
          <a href="/" className="mb-6 flex items-center gap-3">
            <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
            <div className="flex flex-col">
              <span className="font-display text-[15px] font-bold uppercase leading-tight tracking-wider text-white">
                LazyDeveloper TechEds
              </span>
              <span className="text-[11px] font-medium tracking-wide text-white/70">
                Coding School
              </span>
            </div>
          </a>
          <p className="mb-4 text-sm font-medium text-brand-gray-100">
            Lets connect on social
          </p>
          <div className="flex flex-wrap items-center gap-5 text-white/90">
            {socialIcons.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="transition-colors hover:text-brand-orange"
                aria-label={item.name}
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Dynamic Link Columns */}
        {footerLinks.map((section) => (
          <div key={section.title}>
            <h5 className="mb-6 font-display text-sm font-bold uppercase tracking-[0.2em] text-brand-orange sm:text-base">
              {section.title}
            </h5>
            <ul className="space-y-4">
              {section.links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-base font-medium text-brand-gray-100 transition-colors hover:text-white"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 3. Bottom Bar */}
      <div className="relative mx-auto mt-12 w-full max-w-7xl border-t border-white/5 py-10 text-center lg:flex lg:items-center lg:justify-between lg:text-left">
        <p className="text-sm font-medium text-brand-gray-200">
          Copyright © {currentYear} LazyDeveloper TechEds Pvt. Ltd. All rights reserved.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-6 lg:mt-0">
          <a href="#terms" className="text-sm font-medium text-brand-gray-200 transition-colors hover:text-white">
            Terms of Use
          </a>
          <a href="#privacy" className="text-sm font-medium text-brand-gray-200 transition-colors hover:text-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection