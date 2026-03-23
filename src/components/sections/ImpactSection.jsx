import { useEffect, useRef } from 'react'

function ImpactSection() {
  const containerRef = useRef(null)
  const trackRef = useRef(null)

  const galleryImages = [
    {
      id: 1,
      src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop',
      alt: 'Classroom teaching',
    },
    {
      id: 2,
      src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop',
      alt: 'Students focusing',
    },
    {
      id: 3,
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop',
      alt: 'Students smiling',
    },
    {
      id: 4,
      src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop',
      alt: 'Group photo',
    },
  ]

  // High-performance scroll animation logic
  useEffect(() => {
    let animationFrameId

    const handleScroll = () => {
      if (!containerRef.current || !trackRef.current) return

      // Calculate how far the user has scrolled within the 300vh container
      const rect = containerRef.current.getBoundingClientRect()
      const scrollDistance = rect.height - window.innerHeight
      const scrolled = Math.max(0, -rect.top)

      // Get progress from 0 to 1
      let progress = scrolled / scrollDistance
      progress = Math.max(0, Math.min(1, progress))

      // Calculate the maximum distance the track can move horizontally
      const maxScroll = trackRef.current.scrollWidth - window.innerWidth

      // Apply direct DOM manipulation for perfectly smooth 60fps translation
      trackRef.current.style.transform = `translate3d(-${progress * maxScroll}px, 0, 0)`
    }

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId)
      animationFrameId = requestAnimationFrame(handleScroll)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    // Trigger once on mount to set initial position
    handleScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="flex flex-col items-center justify-center bg-brand-black pt-16 sm:pt-24 lg:pt-32">
      
      {/* --- 1. BENTO BOX GRID --- */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 gap-4 rounded-[2rem] border border-white/5 bg-[#111111] p-4 shadow-2xl lg:grid-cols-12">
          
          {/* Left Column */}
          <div className="flex flex-col gap-4 lg:col-span-7">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#080808] p-6 transition-colors hover:bg-[#0c0c0c]">
                <div>
                  <div className="flex items-center gap-2">
                    <svg className="h-6 w-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M21.582 6.186a2.645 2.645 0 00-1.859-1.874C18.082 3.863 12 3.863 12 3.863s-6.082 0-7.723.449a2.645 2.645 0 00-1.859 1.874C2 7.842 2 12.015 2 12.015s0 4.172.418 5.828a2.645 2.645 0 001.859 1.874c1.64.449 7.723.449 7.723.449s6.082 0 7.723-.449a2.645 2.645 0 001.859-1.874C22 16.187 22 12.015 22 12.015s0-4.173-.418-5.829zM9.545 14.93V9.1l5.591 2.915-5.591 2.915z" />
                    </svg>
                    <h3 className="text-3xl font-medium tracking-tight text-brand-orange">600k</h3>
                  </div>
                  <p className="mt-1 text-sm font-medium text-brand-gray-200">Sheryians Subscriber</p>
                </div>
                <p className="mt-10 text-xs font-medium leading-relaxed text-brand-gray-300">
                  Be part of a vibrant learning ecosystem.
                </p>
              </div>

              <div className="flex flex-col justify-between rounded-2xl border border-white/5 bg-[#080808] p-6 transition-colors hover:bg-[#0c0c0c]">
                <div>
                  <div className="flex items-center gap-2">
                    <svg className="h-6 w-6 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                    <h3 className="text-3xl font-medium tracking-tight text-brand-orange">01 Million</h3>
                  </div>
                  <p className="mt-1 text-sm font-medium text-brand-gray-200">Career-Driven Learners</p>
                </div>
                <p className="mt-10 text-xs font-medium leading-relaxed text-brand-gray-300">
                  Join a large and growing community of coders.
                </p>
              </div>
            </div>

            <div className="flex flex-1 flex-col justify-between rounded-2xl border border-white/5 bg-[#080808] p-6 sm:p-8">
              <div>
                <h2 className="font-display text-3xl font-light text-white sm:text-4xl md:text-5xl">
                  UNLOCK{' '}
                  <span className="mx-1 inline-flex -space-x-2 align-middle">
                    {[1, 2, 3, 4].map((i) => (
                      <img
                        key={i}
                        className="inline-block h-8 w-8 rounded-full border-2 border-[#080808] object-cover grayscale sm:h-10 sm:w-10"
                        src={`https://i.pravatar.cc/100?img=${i + 15}`}
                        alt="Student"
                      />
                    ))}
                  </span>{' '}
                  YOUR
                </h2>
                <div className="my-6">
                  <div className="inline-flex h-10 w-20 cursor-pointer items-center justify-end rounded-full border border-brand-orange/40 px-3 transition-colors hover:bg-brand-orange/10">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
                <h2 className="font-display text-3xl font-light leading-tight text-white sm:text-4xl md:text-5xl">
                  FIRST JOB AND<br />INTERNSHIP WITH US!
                </h2>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-2xl border border-white/5 bg-[#080808] p-8 lg:col-span-5">
            <div className="absolute -right-10 -top-10 h-64 w-64 rotate-12 bg-[#1a1a1a] opacity-50" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 80%, 30% 100%, 0 70%)' }}>
               <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop" alt="Students" className="h-full w-full object-cover mix-blend-overlay" />
            </div>
            <div className="absolute -bottom-10 -right-10 h-48 w-48 -rotate-12 bg-[#1a1a1a] opacity-50" style={{ clipPath: 'polygon(20% 0%, 100% 0, 100% 100%, 0 100%, 0 20%)' }}>
               <img src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop" alt="Coding" className="h-full w-full object-cover mix-blend-overlay" />
            </div>
            <div className="relative z-10">
              <h2 className="font-display text-4xl font-light leading-tight text-white">Start<br />Learning</h2>
            </div>
            <div className="relative z-10 mt-auto">
              <h3 className="mb-8 font-display text-3xl font-bold tracking-wide text-white sm:text-4xl">
                A <span className="text-[#a8b845]">place</span> built by coders
              </h3>
              <div className="mb-8">
                <svg className="h-8 w-8 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <a href="#contact" className="inline-flex items-center rounded-xl border border-brand-orange/40 px-6 py-3 text-sm font-medium text-brand-orange transition-colors hover:bg-brand-orange/10">
                Get in touch 
                <svg className="ml-2 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* --- 2. COMPANY MARQUEE --- */}
      <div 
        className="relative mt-20 w-full overflow-hidden py-10 sm:mt-24"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)' }}
      >
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .hide-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
        
        <div className="flex w-max animate-marquee items-center gap-16 px-8 sm:gap-32 lg:gap-40">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="flex items-center gap-16 text-brand-gray-300/40 sm:gap-32 lg:gap-40">
              <span className="flex items-center gap-2 font-display text-2xl font-semibold tracking-wide transition-colors hover:text-brand-gray-300/80">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM8 12l4-4 4 4M12 8v8" />
                </svg>
                nagarro
              </span>
              <span className="font-display text-3xl font-bold tracking-tight transition-colors hover:text-brand-gray-300/80">amazon</span>
              <span className="flex items-center gap-1 font-display text-3xl font-bold tracking-tight transition-colors hover:text-brand-gray-300/80">
                Walmart
                <svg className="h-6 w-6 text-yellow-500/50" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l2.4 4.8 5.6.8-4 4 1 5.4-4.8-2.6-4.8 2.6 1-5.4-4-4 5.6-.8z" />
                </svg>
              </span>
              <span className="font-display text-3xl font-black tracking-tighter transition-colors hover:text-brand-gray-300/80">tcs</span>
              <span className="flex items-center gap-2 font-display text-2xl font-medium tracking-wide transition-colors hover:text-brand-gray-300/80">
                <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
                  <path d="M2 12h20" />
                </svg>
                rapidops
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* --- 3. SCROLL-LINKED IMPACT GALLERY --- */}
      {/* 300vh height creates the scrollable area while the content stays pinned inside */}
      <div ref={containerRef} className="relative mt-12 h-[300vh] w-full bg-brand-black">
        <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden pt-12">
          
          <div className="flex flex-col items-center px-4 text-center sm:px-6">
            <div className="inline-flex rounded border border-white/10 px-4 py-1.5">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#A69E93]">
                Impact
              </span>
            </div>
            <h2 className="mt-8 max-w-3xl font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
              How We Are Doing It Faster And Better Than Others!
            </h2>
          </div>

          <div className="mt-16 w-full overflow-hidden pb-12">
            {/* The padding classes below dynamically calculate to exactly 50vw minus half the width of the card.
              This guarantees the very first card is perfectly centered on the screen at 0 progress.
            */}
            <div 
              ref={trackRef}
              className="flex w-max items-center gap-6 pl-[20vw] pr-[20vw] sm:gap-10 sm:pl-[29vw] sm:pr-[29vw] md:pl-[32.5vw] md:pr-[32.5vw] lg:pl-[36vw] lg:pr-[36vw] xl:pl-[38vw] xl:pr-[38vw]"
              style={{ willChange: 'transform' }}
            >
              {galleryImages.map((img) => (
                <div 
                  key={img.id} 
                  // Image sizes decreased by ~30% from the original version
                  className="group relative h-[42vh] w-[60vw] shrink-0 overflow-hidden rounded-[2.5rem] bg-[#111] shadow-2xl sm:h-[50vh] sm:w-[42vw] md:w-[35vw] lg:h-[52vh] lg:w-[28vw] xl:w-[24vw]"
                >
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute right-5 top-5 flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-black/60 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:bg-brand-orange">
                    <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

    </section>
  )
}

export default ImpactSection