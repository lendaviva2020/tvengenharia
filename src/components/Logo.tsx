export function Logo({ tagline = true, width = 140 }: { tagline?: boolean; width?: number }) {
  return (
    <svg
      viewBox="0 0 210 66"
      width={width}
      role="img"
      aria-label="TV Engenharia — Projetos e Soluções"
    >
      <g
        fill="none"
        stroke="#C9A227"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="4" y="32" width="9" height="26" rx="1" />
        <rect x="15" y="20" width="9" height="38" rx="1" />
        <rect x="26" y="38" width="9" height="20" rx="1" />
      </g>
      <text
        x="44"
        y="34"
        fontFamily="'Cormorant Garamond', Georgia, serif"
        fontWeight="700"
        fontSize="30"
        fill="#C9A227"
      >
        TV
      </text>
      <text
        x="44"
        y="48"
        fontFamily="'Oswald', sans-serif"
        fontWeight="500"
        fontSize="11"
        letterSpacing="2.5"
        fill="#C9A227"
      >
        ENGENHARIA
      </text>
      {tagline ? (
        <text
          x="44"
          y="59"
          fontFamily="'DM Sans', sans-serif"
          fontSize="7"
          letterSpacing="1.4"
          fill="#A9A49C"
        >
          PROJETOS E SOLUÇÕES
        </text>
      ) : null}
    </svg>
  );
}
