const youtubeVideos = [
  {
    id: 1,
    title: 'Build a Portfolio Website from Scratch',
    views: '82K Views',
    likes: '3.4K Likes',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 2,
    title: 'How to Get Placed in Tech in 2025 (No Luck, Just Skills)',
    views: '45K Views',
    likes: '2.8K Likes',
    thumbnail: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 3,
    title: 'Complete Web Development Roadmap',
    views: '128K Views',
    likes: '6.2K Likes',
    thumbnail: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=600&auto=format&fit=crop',
  },
  {
    id: 4,
    title: 'Master JavaScript in 30 Days - Full Course',
    views: '840K Views',
    likes: '22K Likes',
    thumbnail: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?q=80&w=600&auto=format&fit=crop',
  },
]

function VideoCard({ video }) {
  return (
    <div className="group w-[300px] shrink-0 cursor-pointer rounded-2xl border border-[#1f1f1f] bg-[#0a0606] p-4 transition-all duration-300 hover:border-[#3a1b16] sm:w-[380px]">
      {/* Thumbnail */}
      <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-[#111]">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/90 backdrop-blur-sm">
             <svg className="h-6 w-6 translate-x-0.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
             </svg>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-4">
        <h4 className="line-clamp-2 font-display text-base font-medium leading-snug text-white transition-colors group-hover:text-brand-orange sm:text-lg">
          {video.title}
        </h4>
        <div className="mt-3 flex items-center gap-2 text-xs font-medium text-brand-gray-300">
          <span>{video.views}</span>
          <span className="h-1 w-1 rounded-full bg-brand-gray-300/50"></span>
          <span>{video.likes}</span>
        </div>
      </div>
    </div>
  )
}

function YouTubeSection() {
  return (
    <section className="flex flex-col items-center overflow-hidden bg-brand-black pb-20 sm:pb-32">
      
      {/* Header */}
      <div className="mb-12 flex flex-col items-center px-4 text-center sm:px-6">
        <div className="mb-6 inline-flex rounded border border-[#3a1b16] px-3 py-1">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-[#A69E93]">
            YOUTUBE
          </span>
        </div>
        <h2 className="max-w-3xl font-display text-4xl font-medium leading-tight text-white sm:text-5xl lg:text-5xl">
          200+ Free Coding Tutorials On LazyDeveloper
        </h2>
      </div>

      {/* Custom Styles for Marquee */}
      <style>{`
        @keyframes scrollLeftSlow {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left-slow {
          animation: scrollLeftSlow 50s linear infinite;
        }
      `}</style>

      {/* Marquee Container */}
      <div 
        className="flex w-full"
        style={{ maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)' }}
      >
        <div className="flex w-max items-center">
          <div className="flex w-max animate-scroll-left-slow gap-4 hover:[animation-play-state:paused] sm:gap-6">
            {/* Render array twice for seamless looping */}
            {[...youtubeVideos, ...youtubeVideos].map((video, idx) => (
              <VideoCard key={`${video.id}-${idx}`} video={video} />
            ))}
          </div>
        </div>
      </div>

    </section>
  )
}

export default YouTubeSection