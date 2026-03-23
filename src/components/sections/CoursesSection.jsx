const courses = [
  {
    id: 1,
    title: 'Data Science & Analytics with Gen AI',
    description:
      'Gain hands-on experience in data analysis, visualization, and AI integration.',
    features: [
      { icon: 'clock', text: '115+ Hours' },
      { icon: 'badge', text: 'Yes Certified' },
      { icon: 'support', text: '24/7 Mentor Support' },
    ],
    price: 'Rs.6999',
    oldPrice: 'Rs.14891 (+GST)',
    theme: 'light',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop', // Placeholder
  },
  {
    id: 2,
    title: '2.0 Job Ready AI Powered Cohort: Complete Web Development + DSA + Gen-AI + Aptitude',
    description: '',
    features: [
      { icon: 'clock', text: '5+ Months' },
      { icon: 'badge', text: 'Yes Certified' },
      { icon: 'support', text: '24/7 Mentor Support' },
    ],
    price: 'Rs.5999',
    oldPrice: 'Rs.11998 (+GST)',
    theme: 'orange',
    img: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop', // Placeholder
  },
  {
    id: 3,
    title: 'Java and DSA Domination',
    description:
      'Ace your coding interviews Master Java and DSA with our expert-led course, packed with interactive l',
    features: [
      { icon: 'clock', text: '200+ Hours' },
      { icon: 'badge', text: 'Yes Certified' },
      { icon: 'support', text: '24/7 Mentor Support' },
    ],
    price: 'Rs.4999',
    oldPrice: 'Rs.9998 (+GST)',
    theme: 'dark',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', // Placeholder
  },
]

// Helper function to render SVG icons
const FeatureIcon = ({ type, className }) => {
  switch (type) {
    case 'clock':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    case 'badge':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      )
    case 'support':
      return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      )
    default:
      return null
  }
}

function CoursesSection() {
  return (
    <section className="bg-[#FFF5F1] px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto w-full max-w-6xl">
        
        {/* Header Content */}
        <div className="mb-20 flex flex-col items-center text-center">
          <div className="mb-6 inline-flex rounded border border-[#C34A2C]/30 px-3 py-1">
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#C34A2C]">
              COURSES
            </span>
          </div>
          <h2 className="mb-8 max-w-3xl font-display text-4xl font-medium leading-tight text-brand-black sm:text-5xl lg:text-6xl">
            Not Sure Which Course Fits You? Don't Worry, We're Here To Help.
          </h2>
          <a
            href="#explore"
            className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C34A2C] px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-[#A33D24]"
          >
            Explore Courses
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative flex flex-col gap-10 pb-20">
          {courses.map((course, index) => {
            // Determine styles based on theme
            let cardBg, textColor, secondaryText, iconBg, iconColor, buttonStyle
            
            if (course.theme === 'light') {
              cardBg = 'bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-brand-gray-100/50'
              textColor = 'text-brand-black'
              secondaryText = 'text-brand-gray-300'
              iconBg = 'bg-brand-orange/10'
              iconColor = 'text-brand-orange'
              buttonStyle = 'bg-brand-black text-white hover:bg-black/80'
            } else if (course.theme === 'orange') {
              cardBg = 'bg-[#de5027] shadow-[0_20px_50px_rgba(222,80,39,0.2)]'
              textColor = 'text-white'
              secondaryText = 'text-white/80'
              iconBg = 'bg-white/15'
              iconColor = 'text-white'
              buttonStyle = 'bg-white text-[#de5027] hover:bg-white/90'
            } else {
              cardBg = 'bg-[#0B0B0B] shadow-[0_20px_50px_rgba(0,0,0,0.3)]'
              textColor = 'text-white'
              secondaryText = 'text-brand-gray-200'
              iconBg = 'bg-brand-orange/10'
              iconColor = 'text-brand-orange'
              buttonStyle = 'bg-white text-brand-black hover:bg-white/90'
            }

            return (
              <div
                key={course.id}
                className={`sticky w-full origin-top rounded-[2.5rem] p-6 transition-all duration-500 sm:p-10 lg:p-12 ${cardBg}`}
                style={{
                  // This calculation pushes each card slightly further down from the top 
                  // so you can see the top edge of the card behind it.
                  top: `calc(12vh + ${index * 30}px)`,
                }}
              >
                <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:gap-16">
                  
                  {/* Left: Image */}
                  <div className="w-full shrink-0 overflow-hidden rounded-3xl lg:w-5/12">
                    <div className="aspect-video w-full bg-[#111] sm:aspect-[4/3] lg:aspect-[4/3]">
                      <img
                        src={course.img}
                        alt={course.title}
                        className="h-full w-full object-cover opacity-90 transition-transform duration-700 hover:scale-105"
                      />
                    </div>
                  </div>

                  {/* Right: Content */}
                  <div className="flex w-full flex-col lg:w-7/12">
                    <h3 className={`font-display text-3xl font-medium sm:text-4xl lg:text-5xl ${textColor}`}>
                      {course.title}
                    </h3>
                    
                    {course.description && (
                      <p className={`mt-6 max-w-xl text-base leading-relaxed sm:text-lg ${secondaryText}`}>
                        {course.description}
                      </p>
                    )}

                    {/* Features Row */}
                    <div className="mt-8 flex flex-wrap items-center gap-6 border-b border-current/10 pb-8 sm:gap-8">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${iconBg}`}>
                            <FeatureIcon type={feature.icon} className={`h-5 w-5 ${iconColor}`} />
                          </div>
                          <span className={`text-sm font-semibold sm:text-base ${textColor}`}>
                            {feature.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price and CTA */}
                    <div className="mt-8 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                      <div>
                        <p className={`text-lg font-medium ${textColor}`}>Price</p>
                        <div className="mt-1 flex items-baseline gap-3">
                          <span className={`font-display text-4xl font-bold sm:text-5xl ${course.theme === 'orange' ? 'text-white' : 'text-brand-orange'}`}>
                            {course.price}
                          </span>
                          <span className={`text-sm font-medium line-through sm:text-base ${secondaryText}`}>
                            {course.oldPrice}
                          </span>
                        </div>
                      </div>

                      <button className={`group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 text-sm font-bold transition-all duration-300 ${buttonStyle}`}>
                        Check Course
                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default CoursesSection