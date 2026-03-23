import { useState, useEffect } from 'react'

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'Courses', href: '#courses' },
  { name: 'Bootcamp', href: '#bootcamp' },
  { name: 'Request Callback', href: '#request-callback' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Maintain scroll logic: Hide on scroll down, show on scroll up
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
        setIsOpen(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  return (
    <header
      className={`fixed left-0 top-6 z-50 w-full px-4 transition-transform duration-500 ease-in-out sm:px-10 ${
        isVisible ? 'translate-y-0' : '-translate-y-[150%]'
      }`}
    >
      {/* The main container div has NO background, making the items inside appear distinct and floating */}
      <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between">
        
        {/* --- 1. Distinct Left Logo Island --- */}
        <div className="flex items-center gap-3 rounded-3xl bg-[#0f0f10]/80 px-6 py-4 shadow-2xl backdrop-blur-md">
          <a href="/" className="flex items-center gap-3" aria-label="Sheryians home">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-orange font-display text-lg font-bold text-white transition-transform duration-300 hover:rotate-6">
              S
            </span>
            <div className="flex flex-col">
              <span className="font-display text-[17px] font-bold leading-none tracking-wide text-white">
                Sheryians
              </span>
              <span className="mt-1 text-[11px] font-medium leading-none tracking-wider text-white/70">
                Coding School
              </span>
            </div>
          </a>
        </div>

        {/* --- 2. Distinct Center Link Island (Gradient Blur Pill) --- */}
        {/* Desktop Only */}
        <nav className="hidden items-center rounded-full border border-white/10 bg-gradient-to-r from-white/5 via-white/5 to-white/5 px-2 py-2 shadow-[0_8px_32px_rgba(0,0,0,0.3)] backdrop-blur-xl lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              // Increased size by using base text and larger padding (px-7 py-3.5)
              className="rounded-full px-7 py-3.5 text-base font-medium tracking-wide text-brand-gray-100 transition-colors duration-300 hover:bg-white/10 hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* --- 3. Distinct Right Button Island (Sign In & Mobile Toggle) --- */}
        <div className="flex items-center gap-4">
          
          {/* Desktop Sign In Button */}
          <div className="hidden items-center rounded-full bg-brand-orange transition-all duration-300 hover:scale-105 hover:bg-[#A33D24] shadow-2xl lg:flex">
            <a
              href="#signin"
              className="px-10 py-5 text-base font-bold tracking-wide text-white"
            >
              Sign In
            </a>
          </div>

          {/* Mobile Menu Button - Also a distinct island */}
          <div className="flex lg:hidden items-center rounded-2xl bg-[#0f0f10]/80 p-1 backdrop-blur-md shadow-lg">
             <button
               type="button"
               onClick={() => setIsOpen(!isOpen)}
               className="relative z-50 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-white transition-colors hover:bg-white/10"
               aria-expanded={isOpen}
             >
               <span className="sr-only">Open main menu</span>
               <div className="flex w-5 flex-col gap-1.5">
                 <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
                 <span className={`h-0.5 w-full bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                 <span className={`h-0.5 w-full bg-current transition-transform duration-300 ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
               </div>
             </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {/* Attaches to the overall header div for now */}
        <div
          className={`absolute left-0 top-full mt-4 w-full origin-top overflow-hidden rounded-3xl border border-white/10 bg-[#0a0a0c]/95 backdrop-blur-xl transition-all duration-300 ease-in-out lg:hidden ${
            isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          }`}
        >
          <div className="flex flex-col space-y-2 p-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="rounded-xl px-4 py-3 text-base font-medium text-brand-gray-100 transition-colors hover:bg-white/5 hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="mt-4 border-t border-white/10 pt-4">
              <a
                href="#signin"
                className="flex w-full items-center justify-center rounded-xl bg-brand-orange px-4 py-3 text-base font-bold text-white transition-colors hover:bg-[#A33D24]"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </a>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}

export default Navbar