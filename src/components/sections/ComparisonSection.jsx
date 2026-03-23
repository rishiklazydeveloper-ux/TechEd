const comparisonData = [
  {
    LazyDeveloper: 'Highly Affordable, No Quality Cuts',
    others: 'High Fees With Compromised Quality',
  },
  {
    LazyDeveloper: 'Project-Based, Skill-First Learning',
    others: 'Theory-Centric Learning',
  },
  {
    LazyDeveloper: 'Continuously Updated With Industry Trends',
    others: 'Outdated, Static Curriculum',
  },
  {
    LazyDeveloper: 'Internal Hackathons, Challenges & Face-Offs',
    others: 'No Competitive Learning Environment',
  },
  {
    LazyDeveloper: 'Industry-Relevant, Job-Oriented Curriculum',
    others: 'Limited Practical Exposure',
  },
]

function ComparisonSection() {
  return (
    <section className="flex flex-col items-center bg-brand-black px-4 py-20 sm:px-6 sm:py-32 lg:px-10">
      
      {/* Header */}
      <div className="mb-16 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex rounded border border-[#3a1b16] px-3 py-1">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#A69E93]">
            COMPARISON
          </span>
        </div>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-5xl">
          What Sets LazyDeveloper Apart From Other Coders
        </h2>
      </div>

      {/* Main Comparison Container */}
      <div className="mx-auto w-full max-w-5xl rounded-[2rem] border border-white/5 bg-[#0a0a0a] p-2 sm:p-4">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-8">
          
          {/* Left Column (LazyDeveloper - Green Theme) */}
          <div className="relative rounded-[1.5rem] border border-green-500/30 bg-[#0f0f10] p-8 shadow-[0_0_40px_rgba(34,197,94,0.08)] sm:p-10">
            
            {/* Logo & Title */}
            <div className="mb-10 flex items-center gap-4">
              <div className="flex items-center gap-3">
                {/* SVG Mockup of LazyDeveloper Logo */}
                <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                </svg>
                <h3 className="flex flex-col font-display text-xl font-medium text-white sm:text-2xl">
                  <span>LazyDeveloper</span>
                  <span className="text-lg text-brand-gray-100">Coding School</span>
                </h3>
              </div>
            </div>

            {/* List */}
            <ul className="flex flex-col gap-6">
              {comparisonData.map((item, index) => (
                <li key={`LazyDeveloper-${index}`} className="flex items-start gap-4">
                  <svg className="mt-0.5 h-6 w-6 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base font-medium text-white sm:text-lg">
                    {item.LazyDeveloper}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column (Others - Red/Neutral Theme) */}
          <div className="rounded-[1.5rem] p-8 sm:p-10">
            
            {/* Logo & Title */}
            <div className="mb-10 flex items-center gap-4">
              <svg className="h-10 w-10 text-brand-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <h3 className="font-display text-xl font-medium text-white sm:text-2xl">
                Others
              </h3>
            </div>

            {/* List */}
            <ul className="flex flex-col gap-6">
              {comparisonData.map((item, index) => (
                <li key={`others-${index}`} className="flex items-start gap-4">
                  <svg className="mt-0.5 h-6 w-6 shrink-0 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-base font-medium text-brand-gray-100 sm:text-lg">
                    {item.others}
                  </span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

    </section>
  )
}

export default ComparisonSection