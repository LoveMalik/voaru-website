import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link to="/" className="flex items-center gap-2.5 font-display text-lg font-bold">
          <img src="/favicon.png" alt="Voaru logo" className="h-9 w-9" width={36} height={36} />
          Voaru
        </Link>
        <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
          <a href="/#features" className="hover:text-foreground">Features</a>
          <a href="/#how" className="hover:text-foreground">How it works</a>
          <a href="/#pricing" className="hover:text-foreground">Pricing</a>
          <Link to="/terms" className="hover:text-foreground">Terms</Link>
        </nav>
        <a href="/#demo" className="rounded-full bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:opacity-90">
          Book a demo
        </a>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-5 py-10 text-sm text-muted-foreground md:flex-row">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <div className="flex items-center gap-2.5 font-display text-lg font-bold text-foreground">
            <img src="/favicon.png" alt="Voaru logo" className="h-9 w-9" width={36} height={36} loading="lazy" />
            Voaru
          </div>
          <p>© {new Date().getFullYear()} Voaru. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <Link to="/terms" className="hover:text-foreground">Terms of Service</Link>
          <a href="/#pricing" className="hover:text-foreground">Pricing</a>
          <a href="/#demo" className="hover:text-foreground">Contact</a>
        </div>
      </div>
    </footer>
  );
}
