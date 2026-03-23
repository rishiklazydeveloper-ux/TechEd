const galleryData = {
  column1: [
    { type: 'image', h: 'h-[400px] md:h-[600px]', src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=800&auto=format&fit=crop', alt: 'Community gathering' },
    { type: 'image', h: 'h-[300px]', src: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop', alt: 'Students working together' },
  ],
  column2: [
    { type: 'image', h: 'h-[250px]', src: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop', alt: 'Teaching session' },
    { type: 'card', h: 'min-h-[250px] md:h-[326px]' }, // Calculated height to align nicely on desktop
    { type: 'image', h: 'h-[400px]', src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=800&auto=format&fit=crop', alt: 'Whiteboard discussion' },
  ],
  column3: [
    { type: 'image', h: 'h-[300px]', src: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=800&auto=format&fit=crop', alt: 'Corporate event' },
    { type: 'image', h: 'h-[400px] md:h-[600px]', src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop', alt: 'Happy students group' },
    ],
}

function CommunitySection() {
  const renderItem = (item, index) => {
    if (item.type === 'image') {
      return (
        <div 
          key={`img-${index}`} 
          className={`group relative ${item.h} w-full overflow-hidden rounded-3xl bg-brand-gray-100/50`}
        >
          <img 
            src={item.src} 
            alt={item.alt} 
            className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
            loading="lazy"
          />
          {/* Subtle overlay on hover */}
          <div className="absolute inset-0 bg-brand-black/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
      )
    }
    
    if (item.type === 'card') {
      return (
        <div 
          key={`card-${index}`} 
          className={`flex w-full ${item.h} flex-col justify-end overflow-hidden rounded-3xl bg-gradient-to-t from-[#C34A2C] via-[#8A331E] to-[#2B1109] p-6 transition-all duration-300 hover:shadow-[0_20px_50px_rgba(195,74,44,0.3)] sm:p-8`}
        >
          <h3 className="font-display text-2xl font-bold leading-tight text-white sm:text-3xl">
            Meet And Greet
          </h3>
          <p className="mt-4 text-sm leading-relaxed text-white/90 sm:text-base">
            Open Conversations About Careers, Coding, Bootcamps, Internships, Real-World Engineering, And The Journey.
          </p>
        </div>
      )
    }
    return null
  }

  return (
    <section className="flex flex-col items-center bg-white px-4 py-20 sm:px-6 sm:py-32 lg:px-10">
      
      {/* Header (Text changed to black for contrast) */}
      <div className="mb-20 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex rounded border border-brand-orange/30 px-3 py-1 bg-brand-orange/5">
          <span className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-orange">
            COMMUNITY
          </span>
        </div>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight text-brand-black sm:text-5xl lg:text-6xl">
          A Glimpse Of Our Community
        </h2>
      </div>

      {/* 3-Column Asymmetric Masonry Grid */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-6 md:grid-cols-3">
        
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {galleryData.column1.map(renderItem)}
        </div>

        {/* Middle Column */}
        <div className="flex flex-col gap-6 md:-mt-10 lg:-mt-16"> {/* Slight negative margin on desktop for extra overlap feel */}
          {galleryData.column2.map(renderItem)}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">
          {galleryData.column3.map(renderItem)}
        </div>

      </div>
    </section>
  )
}

export default CommunitySection