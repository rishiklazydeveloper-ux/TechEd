import { useState } from 'react'

const faqData = [
  {
    id: 1,
    question: 'Are LazyDeveloper courses suitable for beginners?',
    answer: 'Yes, LazyDeveloper provides beginner-friendly courses along with advanced concepts. Our courses are designed in a way that suits beginners as well as professionals who wants to learn advance concepts.',
  },
  {
    id: 2,
    question: 'Does LazyDeveloper Coding School provide placement assistance?',
    answer: 'Yes, we provide placement assistance and help you prepare for interviews.',
  },
  {
    id: 3,
    question: 'What programming languages and technologies are covered in the courses?',
    answer: 'We cover a wide range including MERN stack, Java, C++, Python, and more.',
  },
  {
    id: 4,
    question: 'Are the classes live or pre-recorded, and can I access recordings later?',
    answer: 'Our classes include a mix of live sessions and pre-recorded materials, with full access to recordings.',
  },
  {
    id: 5,
    question: 'Are there any prerequisites or age restrictions for enrolling in the courses?',
    answer: 'Prerequisites vary by course, but most are open to anyone with basic computer knowledge.',
  },
]

function FAQSection() {
  const [openId, setOpenId] = useState(null)

  const toggleAccordion = (id) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section className="flex flex-col items-center bg-[#0a0a0c] px-4 py-20 sm:px-6 sm:py-32 lg:px-10">
      
      {/* Header (Text changed to black for contrast) */}
      <div className="mb-20 flex flex-col items-center text-center">
        <div className="mb-6 inline-flex rounded border border-[#3a1b16] px-4 py-1.5 bg-[#141417]">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8A331E]">
            F.A.Qs
          </span>
        </div>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-5xl">
          Frequently Asked Questions From Our Students
        </h2>
      </div>

      {/* Accordion List */}
      <div className="mx-auto w-full max-w-6xl space-y-4">
        {faqData.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden rounded-[2rem] border border-[#1f1f23] bg-black transition-all duration-300 hover:border-brand-orange/40"
          >
            <button
              onClick={() => toggleAccordion(item.id)}
              className="flex w-full items-center justify-between p-6 text-left sm:p-8"
              aria-expanded={openId === item.id}
            >
              <div className="flex items-center gap-6 sm:gap-8">
                {/* Large Numbering */}
                <span className="font-display text-3xl font-bold tracking-tighter text-[#A69E93] transition-colors group-hover:text-brand-orange sm:text-4xl md:text-5xl">
                  {String(item.id).padStart(2, '0')}
                </span>
                {/* Question */}
                <h3 className="max-w-xl text-base font-semibold text-white sm:text-lg md:text-xl">
                  {item.question}
                </h3>
              </div>

              {/* Circular Arrow Button */}
              <div className={`relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-[6px] border-[#1f1f23] bg-black shadow-[0_0_10px_rgba(255,255,255,0.03)] transition-all duration-300 group-hover:border-brand-orange group-hover:bg-brand-orange ${openId === item.id ? 'rotate-180 bg-brand-orange border-brand-orange' : ''}`}>
                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </div>
            </button>
            
            {/* Accordion Content */}
            <div
              className={`transition-all duration-500 ease-in-out ${
                openId === item.id ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-[#1f1f23] px-6 pb-10 pt-8 sm:px-8 sm:pl-[148px]"> {/* Align answer with question text */}
                <p className="text-base leading-relaxed text-brand-gray-200 sm:text-lg">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection