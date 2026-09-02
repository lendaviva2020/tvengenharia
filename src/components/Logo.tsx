export function LogoSkyline({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      className={className}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 42h36" />
      <path d="M10 42V22l8-6v26" />
      <path d="M22 42V10l10 6v26" />
      <path d="M36 42V18h6v24" />
      <path d="M26 18h2M26 24h2M26 30h2" />
      <path d="M13 26h2M13 32h2" />
      <path d="M27 6l-5 4" opacity="0.6" />
    </svg>
  );
}

export function Logo({ tagline = true }: { tagline?: boolean }) {
  return (
    <span className="flex items-center gap-3 leading-none">
      <LogoSkyline className="size-10 shrink-0 text-gold" />
      <span className="flex flex-col gap-1">
        <span className="flex items-baseline gap-2">
          <span className="font-serif text-2xl font-bold text-gold">TV</span>
          <span className="font-display text-sm uppercase tracking-[0.3em] text-foreground">
            Engenharia
          </span>
        </span>
        {tagline ? (
          <span className="font-display text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            Projetos e Soluções
          </span>
        ) : null}
      </span>
    </span>
  );
}
