function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] flex-col items-center justify-center overflow-hidden bg-brand-black px-4 pt-32 pb-20 sm:px-6 lg:px-10">
      
      {/* Background Radial Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-orange/15 blur-[120px]" />

      {/* Background Subtle Grid (Matching the design) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_40%,transparent_100%)]" />

      {/* Main Content Container */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        
        {/* Top Tagline */}
        <p className="mb-6 text-sm font-semibold tracking-[0.15em] text-brand-orange uppercase sm:text-base">
          Learn. Build. Get Placed.
        </p>

        {/* Main Heading */}
        <h1 className="mb-8 font-display text-5xl font-medium leading-[1.1] text-white sm:text-6xl md:text-7xl">
          Become The Software Engineer That Companies Want To Hire!
        </h1>

        {/* Subtitle */}
        <p className="mb-10 max-w-3xl text-lg leading-relaxed text-brand-gray-100 sm:text-xl">
          Join a growing community of students preparing for real-world tech careers at LazyDeveloper.
        </p>

        {/* Avatar Group & Stats */}
        <div className="mb-10 flex flex-col items-center gap-4 sm:flex-row">
          <div className="flex -space-x-3">
            {/* Placeholder avatars (using Pravatar for quick realistic testing) */}
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-10 w-10 overflow-hidden rounded-full border-2 border-brand-black bg-brand-gray-300"
              >
                <img
                  src={`https://i.pravatar.cc/100?img=${i + 10}`}
                  alt="Student avatar"
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <p className="text-sm font-medium text-brand-gray-200">
            <span className="font-bold text-brand-orange">1 Million+</span> Students learning in our mastery programs
          </p>
        </div>

        {/* CTA Button */}
        <a
          href="#journey"
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#C34A2C] px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-[#A33D24]"
        >
          Start Journey
          <svg
            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            />
          </svg>
        </a>
      </div>
    </section>
  )
}

export default HeroSection