function TransformSection() {
  // Array of placeholder images for the background floating effect
  const bgImages = [
    'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=400&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=400&auto=format&fit=crop',
  ];

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden bg-brand-black px-4 py-32 sm:px-6 lg:px-10">
      
      {/* Background Grid (Blurred & Darkened) */}
      <div className="absolute inset-0 grid grid-cols-2 gap-4 opacity-20 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {bgImages.map((src, i) => (
          <div 
            key={i} 
            className={`relative overflow-hidden rounded-2xl bg-[#111] ${i % 2 === 0 ? 'h-32 sm:h-48 mt-8' : 'h-40 sm:h-56'}`}
          >
            <img src={src} alt="" className="h-full w-full object-cover blur-[3px]" />
          </div>
        ))}
      </div>

      {/* Center Mask / Radial Gradient Overlay */}
      {/* This makes the center purely black so the text is readable, fading out to show the cards on the edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(15,15,16,1)_40%,rgba(15,15,16,0.3)_100%)]" />
      <div className="absolute inset-0 bg-brand-black/30" />

      {/* Main Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1000px] flex-col items-center text-center">
        <h2 className="font-display text-[2.5rem] font-medium leading-[1.15] text-white sm:text-5xl md:text-6xl lg:text-[72px]">
          Transform Your Learning Journey Into A Career Breakthrough With <br className="hidden sm:block" />
          <span
            className="mt-2 inline-block text-transparent"
            style={{ WebkitTextStroke: '1.5px #C34A2C' }}
          >
            LazyDeveloper
          </span>
        </h2>

        <a
          href="#explore"
          className="mt-12 inline-flex items-center justify-center rounded-xl bg-brand-orange px-8 py-4 text-sm font-bold tracking-wide text-white transition-all duration-300 hover:scale-105 hover:bg-[#A33D24]"
        >
          Explore Courses →
        </a>
      </div>
    </section>
  )
}

export default TransformSection