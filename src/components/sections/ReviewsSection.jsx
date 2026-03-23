const reviewsRow1 = [
  {
    id: 1,
    name: 'pradum_k',
    role: 'MERN Stack Developer',
    avatar: 'https://i.pravatar.cc/150?img=11',
    rating: '4.0',
    text: 'LazyDeveloper Coding School Is An Amazing Place To Learn Coding! The Mentors Are Highly Skilled, Explain Every Concept Clearly.',
  },
  {
    id: 2,
    name: 'Honey Atalkar',
    role: 'Software Engineering Student',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: '4.0',
    text: 'LazyDeveloper Coding School - Best Place To Learn Coding Offline! 🌟 The Teachers Explain Every Topic Step By Step And The Vibe Is Great.',
  },
  {
    id: 3,
    name: 'Parth gup Ta',
    role: 'Frontend Developer',
    avatar: 'https://i.pravatar.cc/150?img=60',
    rating: '4.0',
    text: 'Learning At LazyDeveloper Coding School Has Been An Amazing Experience! The Mentors Explain Everything In Deep Detail.',
  },
  {
    id: 4,
    name: 'Fahad Husain',
    role: 'Full Stack Developer',
    avatar: 'https://i.pravatar.cc/150?img=14',
    rating: '4.0',
    text: 'I Had A Great Experience At Coaching. The Teachers Are Highly Supportive And Knowledgeable. They Explain Real-World Scenarios.',
  },
]

const reviewsRow2 = [
  {
    id: 5,
    name: 'Mohd Siraj',
    role: 'Web Developer',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: '4.0',
    text: 'I Had A Great Experience At Coaching. The Teachers Are Highly Supportive And Knowledgeable. They Explain Things In The Best Way.',
  },
  {
    id: 6,
    name: 'Om Singhal',
    role: 'Backend Developer',
    avatar: 'https://i.pravatar.cc/150?img=16',
    rating: '4.0',
    text: '🌟 LazyDeveloper Coding School - Best Place To Learn Coding Online! 🌟 I Am Currently Learning Coding Here And Im Loving It.',
  },
  {
    id: 7,
    name: 'Aditya Kumar',
    role: 'Coding Mentor',
    avatar: 'https://i.pravatar.cc/150?img=17',
    rating: '4.0',
    text: 'We Proudly Share Our Teaching Journey With LazyDeveloper Coding School, Helping Students Build Future-Ready Skills With Practical Code.',
  },
  {
    id: 8,
    name: 'Riddhi Moonat',
    role: 'UI/UX Developer',
    avatar: 'https://i.pravatar.cc/150?img=5',
    rating: '4.0',
    text: 'LazyDeveloper Coding School Is Honestly One Of The Best Places To Learn Coding. Mentors There Teach In Such A Friendly And Easy Way.',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-2">
      <span className="text-sm font-semibold text-brand-gray-200">{rating}</span>
      <div className="flex gap-1">
        {[...Array(4)].map((_, i) => (
          <svg key={i} className="h-4 w-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    </div>
  )
}

function ReviewCard({ review }) {
  return (
    <div className="w-[320px] shrink-0 rounded-[1.5rem] border border-[#2a1310] bg-[#0a0606] p-6 transition-colors hover:border-[#4a2310] sm:w-[400px]">
      {/* User Info */}
      <div className="flex items-center gap-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-display text-base font-semibold text-white">
            {review.name}
          </h4>
          <p className="text-sm font-medium text-brand-gray-300">
            {review.role}
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 h-[1px] w-full bg-white/5" />

      {/* Rating & Text */}
      <StarRating rating={review.rating} />
      <p className="mt-4 text-sm leading-relaxed text-brand-gray-200">
        {review.text}
      </p>
    </div>
  )
}

function ReviewsSection() {
  return (
    <section className="flex flex-col items-center overflow-hidden bg-brand-black py-20 sm:py-32">
      
      {/* Header */}
      <div className="mb-16 flex flex-col items-center px-4 text-center sm:px-6">
        <div className="mb-6 inline-flex rounded border border-[#3a1b16] px-3 py-1">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#A69E93]">
            HEAR FROM OUR STUDENTS
          </span>
        </div>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-6xl">
          We Help Learners Become Industry-Ready Developers.
        </h2>
      </div>

      {/* Custom Styles for Marquee */}
      <style>{`
        @keyframes scrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes scrollRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-scroll-left {
          animation: scrollLeft 40s linear infinite;
        }
        .animate-scroll-right {
          animation: scrollRight 40s linear infinite;
        }
      `}</style>

      {/* Marquee Containers */}
      <div 
        className="flex w-full flex-col gap-6"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}
      >
        
        {/* Top Row (Scrolls Left) */}
        <div className="flex w-max items-center">
          <div className="flex w-max animate-scroll-left gap-6 hover:[animation-play-state:paused]">
            {/* Render array twice for seamless looping */}
            {[...reviewsRow1, ...reviewsRow1].map((review, idx) => (
              <ReviewCard key={`${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>

        {/* Bottom Row (Scrolls Right) */}
        <div className="flex w-max items-center">
          <div className="flex w-max animate-scroll-right gap-6 hover:[animation-play-state:paused]">
            {/* Render array twice for seamless looping */}
            {[...reviewsRow2, ...reviewsRow2].map((review, idx) => (
              <ReviewCard key={`${review.id}-${idx}`} review={review} />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}

export default ReviewsSection