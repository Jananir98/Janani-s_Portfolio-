export default function GeometricBackground() {
  return (
    <div aria-hidden="true">
      <style>{`
        .geo-left, .geo-right { pointer-events: none; }
        .facet { transform-origin: center; }
        .float-slow { animation: float 8s ease-in-out infinite; }
        .float-medium { animation: float 10s ease-in-out infinite; }
        .rotate-slow { animation: rotate 24s linear infinite; }
        @keyframes float { 0% { transform: translateY(-6px) } 50% { transform: translateY(6px) } 100% { transform: translateY(-6px) } }
        @keyframes rotate { 0% { transform: rotate(0deg) } 50% { transform: rotate(6deg) } 100% { transform: rotate(0deg) } }
        @media (max-width: 768px) { .geo-left, .geo-right { display:none } }
      `}</style>

      {/* Left complex facets */}
      <svg className="geo-left hidden md:block absolute left-0 top-0 h-full w-1/3" viewBox="0 0 400 900" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gL1" x1="0" x2="1">
            <stop offset="0" stopColor="#ffdede" stopOpacity="0.8" />
            <stop offset="1" stopColor="#fff7f7" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        <rect width="400" height="900" fill="url(#gL1)" />

        <g className="rotate-slow" transform="translate(-60,40)">
          <g className="facet float-slow" opacity="0.08" fill="#ff9fc7">
            <polygon points="20,40 100,0 180,40 100,80" />
            <polygon points="60,100 140,60 220,100 140,140" />
          </g>

          <g className="facet float-medium" opacity="0.06" fill="#ffdede" transform="translate(0,200)">
            <polygon points="10,30 90,0 170,30 90,60" />
            <polygon points="40,90 120,60 200,90 120,120" />
          </g>

          <g className="facet" opacity="0.04" fill="#ffebf0" transform="translate(40,420)">
            <polygon points="0,0 80,-40 160,0 80,40" />
            <polygon points="30,60 110,20 190,60 110,100" />
          </g>
        </g>
      </svg>

      {/* Right complex facets */}
      <svg className="geo-right hidden md:block absolute right-0 bottom-0 h-full w-1/3" viewBox="0 0 400 900" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="gR1" x1="0" x2="1">
            <stop offset="0" stopColor="#fff7f7" stopOpacity="0.3" />
            <stop offset="1" stopColor="#ffdede" stopOpacity="0.9" />
          </linearGradient>
        </defs>
        <rect width="400" height="900" fill="url(#gR1)" />

        <g className="rotate-slow" transform="translate(60,240)">
          <g className="facet float-medium" opacity="0.07" fill="#ffdede">
            <polygon points="220,40 300,0 380,40 300,80" />
            <polygon points="180,100 260,60 340,100 260,140" />
          </g>

          <g className="facet float-slow" opacity="0.05" fill="#ff9fc7" transform="translate(0,240)">
            <polygon points="200,30 280,0 360,30 280,60" />
            <polygon points="170,90 250,60 330,90 250,120" />
          </g>

          <g className="facet" opacity="0.03" fill="#fff0f2" transform="translate(60,520)">
            <polygon points="120,0 200,-40 280,0 200,40" />
            <polygon points="150,60 230,20 310,60 230,100" />
          </g>
        </g>
      </svg>
    </div>
  )
}
