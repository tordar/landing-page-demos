export default function Footer() {
  return (
    <footer className="bg-[#0f2318] py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-full bg-[#c9a84c] flex items-center justify-center">
              <span className="text-[#1a3a2a] font-bold text-xs">S</span>
            </div>
            <span className="text-white/60 text-sm">
              Stranda Golfklubb
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://strandagolf.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              strandagolf.no
            </a>
            <a
              href="https://www.golfbox.no"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white/70 text-xs transition-colors"
            >
              Golfbox login
            </a>
          </div>

          {/* Copyright */}
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Stranda Golfklubb
          </p>
        </div>
      </div>
    </footer>
  );
}
