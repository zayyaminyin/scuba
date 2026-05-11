export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section
        className="relative flex min-h-[85vh] flex-col justify-end overflow-hidden bg-cover bg-center px-6 pb-16 pt-32 md:px-12"
        style={{ backgroundImage: "linear-gradient(180deg, hsl(220 40% 4% / 0.2) 0%, hsl(220 40% 4%) 100%), url(/hero.jpg)" }}
      >
        <div className="scanlines pointer-events-none absolute inset-0 opacity-30" aria-hidden />
        <div className="relative z-10 max-w-4xl animate-fade-up space-y-6">
          <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Beyond the critical limit</p>
          <h1 className="font-display text-5xl uppercase leading-[0.95] text-foreground md:text-7xl lg:text-8xl">
            Zay Ya
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground md:text-xl">
            Professional saturation diver and expedition lead — telemetry, deep operations, and partners at depth.
          </p>
        </div>
      </section>

      <section className="border-t border-border px-6 py-20 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_1.1fr] md:items-center">
          <div className="space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight md:text-4xl">Expedition log</h2>
            <p className="text-muted-foreground">
              Field notes from commercial and research dives — rigging, bell runs, and life support under pressure.
            </p>
            <ul className="font-mono text-sm text-accent">
              <li>01 — Saturation systems &amp; gas management</li>
              <li>02 — ROV / diver coordination</li>
              <li>03 — Partner operations worldwide</li>
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/exp-1.jpg"
              alt="Expedition still one"
              className="aspect-[4/5] w-full rounded-sm border border-border object-cover shadow-glow"
            />
            <img
              src="/exp-2.jpg"
              alt="Expedition still two"
              className="aspect-[4/5] w-full translate-y-8 rounded-sm border border-border object-cover shadow-glow md:translate-y-12"
            />
          </div>
        </div>
      </section>

      <section className="border-t border-border bg-card/40 px-6 py-20 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:items-center md:justify-between">
          <div className="max-w-md space-y-4">
            <h2 className="font-display text-3xl uppercase tracking-tight md:text-4xl">Partners &amp; contact</h2>
            <p className="text-muted-foreground">
              For expedition support, media, or technical partnerships, reach out through your usual channel.
            </p>
          </div>
          <img
            src="/portrait.jpg"
            alt="Zay Ya portrait"
            className="mx-auto w-full max-w-xs rounded-sm border border-border object-cover shadow-glow md:mx-0"
          />
        </div>
      </section>

      <footer className="border-t border-border px-6 py-10 text-center font-mono text-xs text-muted-foreground md:px-12">
        © {new Date().getFullYear()} Zay Ya — saturation diving &amp; expedition lead
      </footer>
    </div>
  );
}
