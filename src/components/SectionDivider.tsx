export function SectionDivider() {
  return (
    <div className="mx-auto my-2 flex w-full max-w-xs items-center gap-3" aria-hidden>
      <span className="h-px flex-1 bg-linear-to-l from-gold/80 to-transparent" />
      <span className="grid grid-cols-2 gap-0.5">
        <span className="size-1.5 rotate-45 bg-terracotta/80" />
        <span className="size-1.5 rotate-45 bg-gold" />
        <span className="size-1.5 rotate-45 bg-gold" />
        <span className="size-1.5 rotate-45 bg-olive/70" />
      </span>
      <span className="h-px flex-1 bg-linear-to-r from-gold/80 to-transparent" />
    </div>
  );
}
