export function DitkaLogoSmall() {
  return (
    <svg width="64" height="64" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Face outline - strong jaw */}
      <path 
        d="M 48 20 Q 34 22 28 32 Q 24 40 24 48 Q 24 58 28 64 Q 32 70 38 74 Q 43 77 48 77 Q 53 77 58 74 Q 64 70 68 64 Q 72 58 72 48 Q 72 40 68 32 Q 62 22 48 20 Z" 
        fill="#F4D7B8" 
        stroke="#0B162A" 
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Neck */}
      <path 
        d="M 38 74 L 36 88 L 60 88 L 58 74" 
        fill="#F4D7B8" 
        stroke="#0B162A" 
        strokeWidth="1.5"
      />
      
      {/* Hair - slicked back */}
      <path 
        d="M 34 22 Q 38 18 48 18 Q 58 18 62 22 Q 66 26 68 32 L 66 30 Q 60 24 48 24 Q 36 24 30 30 L 28 32 Q 30 26 34 22 Z" 
        fill="#5A4A42" 
        stroke="#0B162A" 
        strokeWidth="1.5"
      />
      
      {/* Eyebrows - thick and expressive */}
      <path 
        d="M 32 38 Q 36 36 40 37" 
        stroke="#0B162A" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path 
        d="M 56 37 Q 60 36 64 38" 
        stroke="#0B162A" 
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      
      {/* Eyes - stern look */}
      <ellipse cx="37" cy="44" rx="3" ry="4" fill="#0B162A"/>
      <ellipse cx="59" cy="44" rx="3" ry="4" fill="#0B162A"/>
      
      {/* Eye highlights */}
      <circle cx="38" cy="43" r="1" fill="#FFFFFF"/>
      <circle cx="60" cy="43" r="1" fill="#FFFFFF"/>
      
      {/* Nose - strong */}
      <path 
        d="M 48 40 L 48 54 M 44 52 Q 46 54 48 54 Q 50 54 52 52" 
        stroke="#0B162A" 
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Iconic Mustache - thick and bold */}
      <path 
        d="M 48 56 Q 42 58 36 56 Q 34 56 34 57 Q 34 60 38 61 Q 43 62 48 60 M 48 56 Q 54 58 60 56 Q 62 56 62 57 Q 62 60 58 61 Q 53 62 48 60" 
        fill="#5A4A42" 
        stroke="#0B162A" 
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      
      {/* Mouth - slight frown/serious */}
      <path 
        d="M 42 66 Q 48 65 54 66" 
        stroke="#0B162A" 
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Chin line - strong jaw */}
      <path 
        d="M 32 68 Q 40 73 48 73 Q 56 73 64 68" 
        stroke="#D4A574" 
        strokeWidth="1"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Ear left */}
      <ellipse cx="26" cy="46" rx="3" ry="6" fill="#F4D7B8" stroke="#0B162A" strokeWidth="1.5"/>
      <path d="M 27 46 Q 28 46 28 48" stroke="#D4A574" strokeWidth="0.8" fill="none"/>
      
      {/* Ear right */}
      <ellipse cx="70" cy="46" rx="3" ry="6" fill="#F4D7B8" stroke="#0B162A" strokeWidth="1.5"/>
      <path d="M 69 46 Q 68 46 68 48" stroke="#D4A574" strokeWidth="0.8" fill="none"/>
      
      {/* Collar/shirt */}
      <path 
        d="M 36 86 L 34 96 L 62 96 L 60 86" 
        fill="#E67E22" 
        stroke="#0B162A" 
        strokeWidth="1.5"
      />
      
      {/* Accent lines for depth */}
      <path d="M 32 50 Q 30 54 30 58" stroke="#D4A574" strokeWidth="0.8" fill="none" opacity="0.6"/>
      <path d="M 64 50 Q 66 54 66 58" stroke="#D4A574" strokeWidth="0.8" fill="none" opacity="0.6"/>
    </svg>
  );
}
