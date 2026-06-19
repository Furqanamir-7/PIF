export default function Logo({ className = 'h-12 w-12' }) {
  return (
    <div className={`relative overflow-hidden rounded-full border-2 border-pif-cream bg-pif-dark p-0.5 ${className}`}>
      <img
        src="/logo.png"
        alt="Play It Forward logo — dog and cat line art, Est. 2024"
        className="h-full w-full rounded-full object-contain"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
          e.currentTarget.nextElementSibling?.classList.remove('hidden')
        }}
      />
      <div className="hidden flex h-full w-full flex-col items-center justify-center p-1 text-center">
        <svg viewBox="0 0 100 100" className="h-full w-full" aria-hidden="true">
          <circle cx="50" cy="50" r="48" fill="#16261A" stroke="#F4F0E6" strokeWidth="1.5" />
          <path
            d="M28 58c0-8 6-14 14-14s14 6 14 14v8H28v-8z"
            fill="none"
            stroke="#F4F0E6"
            strokeWidth="1.2"
          />
          <circle cx="35" cy="48" r="2" fill="#F4F0E6" />
          <circle cx="49" cy="48" r="2" fill="#F4F0E6" />
          <path d="M62 38c4-6 12-6 16 0" fill="none" stroke="#F4F0E6" strokeWidth="1.2" />
          <path d="M58 55c3 4 8 4 11 0" fill="none" stroke="#F4F0E6" strokeWidth="1" />
          <text x="50" y="88" textAnchor="middle" fill="#F4F0E6" fontSize="7" fontFamily="serif">
            EST 2024
          </text>
        </svg>
      </div>
    </div>
  )
}
