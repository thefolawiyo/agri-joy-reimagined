export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
        <circle cx="12" cy="12" r="10.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
        <path
          d="M1.5 12h21M12 1.5c3.4 3 3.4 18 0 21M12 1.5c-3.4 3-3.4 18 0 21"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
      </svg>
      <span className="text-[1.05rem] font-medium tracking-[0.34em] uppercase">Earth</span>
    </span>
  );
}
