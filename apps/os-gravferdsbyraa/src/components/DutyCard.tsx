export default function DutyCard() {
  return (
    <div className="fixed bottom-8 right-8 z-[60]">
      <a
        href="tel:56574950"
        className="bg-surface-container-highest/80 backdrop-blur-md px-6 py-4 rounded-full flex items-center gap-4 border border-outline-variant/15 shadow-[0_32px_32px_rgba(35,26,10,0.06)] hover:scale-105 transition-transform"
      >
        <span
          className="material-symbols-outlined text-tertiary"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          phone_in_talk
        </span>
        <div>
          <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold leading-none mb-1">
            Døgnvakt
          </p>
          <p className="text-lg font-headline font-bold text-on-surface leading-none">
            56 57 49 50
          </p>
        </div>
      </a>
    </div>
  );
}
