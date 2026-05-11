function MarqueeStrip() {
  const items = [
    "Open water",
    "Still learning",
    "Log every dive",
    "Buoyancy obsessed",
    "Reef mornings",
    "Nitrox curious",
    "No commercial ops",
    "Just a hobby",
  ];
  const Strip = ({ id }: { id: string }) => (
    <span className="flex shrink-0 items-center gap-10 pr-10">
      {items.map((t, i) => (
        <span key={`${id}-${i}`} className="flex items-center gap-3 text-muted-foreground">
          <span className="h-1 w-1 animate-pulse-dot rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
          {t}
        </span>
      ))}
    </span>
  );
  return (
    <div className="relative overflow-hidden border-y border-border/80 bg-secondary/25 py-3">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee items-center whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.28em]">
          <Strip id="a" />
          <span aria-hidden>
            <Strip id="b" />
          </span>
        </div>
      </div>
    </div>
  );
}

function HudStat({ label, value, hint }: { label: string; value: string; hint: string }) {
  return (
    <div className="group relative overflow-hidden rounded-sm border border-border/70 bg-card/40 p-5 shadow-glow transition-[border-color,box-shadow] duration-500 ease-out-expo hover:border-accent/35 hover:shadow-[0_0_48px_hsl(var(--accent)/0.12)]">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground">{label}</p>
      <p className="mt-3 font-display text-2xl uppercase tracking-tight text-foreground md:text-3xl">{value}</p>
      <p className="mt-2 font-mono text-xs leading-relaxed text-muted-foreground">{hint}</p>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/75 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-4 md:px-10">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-40" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_hsl(var(--accent))]" />
            </span>
            <span className="font-display text-lg uppercase tracking-tight md:text-xl">Zay Ya</span>
          </div>
          <nav className="hidden items-center gap-8 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground md:flex">
            <a className="transition-colors hover:text-accent" href="#log">
              Log
            </a>
            <a className="transition-colors hover:text-accent" href="#frames">
              Frames
            </a>
            <a className="transition-colors hover:text-accent" href="#hello">
              Hello
            </a>
          </nav>
          <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent/90">Recreational</div>
        </div>
      </header>

      <section className="relative min-h-[100dvh] overflow-hidden pt-24">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url(/hero.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/55 to-background" />
        <div className="absolute inset-0 bg-radial-glow" />
        <div className="absolute inset-0 bg-tech-grid opacity-40" />
        <div className="scanlines pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay" aria-hidden />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-16 px-5 pb-24 pt-8 md:flex-row md:items-end md:justify-between md:px-10 md:pb-20 lg:pt-12">
          <div className="max-w-3xl space-y-8 md:pb-4">
            <div className="space-y-2">
              <p className="animate-fade-up font-mono text-xs uppercase tracking-[0.4em] text-accent">Surface interval / personal site</p>
              <div className="relative animate-fade-up fade-up-delay-1">
                <h1 className="relative z-10 font-display text-[clamp(3.5rem,12vw,9rem)] uppercase leading-[0.88] tracking-tight text-foreground">
                  Zay Ya
                </h1>
                <p
                  className="pointer-events-none absolute -left-1 top-2 font-display text-[clamp(3.5rem,12vw,9rem)] uppercase leading-[0.88] tracking-tight text-stroke opacity-[0.07]"
                  aria-hidden
                >
                  Zay Ya
                </p>
              </div>
            </div>

            <p className="animate-fade-up fade-up-delay-2 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
              I am a recreational diver — not a pro, not commercial, just someone who loves the water, collects
              small moments, and is forever working on skills like trim and calm breathing.
            </p>

            <div className="animate-fade-up fade-up-delay-3 flex flex-wrap items-center gap-4">
              <a
                href="#log"
                className="inline-flex items-center gap-2 border border-primary bg-primary px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-[transform,box-shadow] duration-300 ease-out-expo hover:-translate-y-0.5 hover:shadow-[0_0_40px_hsl(var(--primary)/0.35)]"
              >
                Open the log
              </a>
              <a
                href="#hello"
                className="inline-flex items-center gap-2 border border-border/80 bg-background/40 px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-foreground backdrop-blur-sm transition-colors hover:border-accent/50 hover:text-accent"
              >
                Say hi
              </a>
            </div>

            <dl className="animate-fade-up fade-up-delay-4 grid max-w-lg grid-cols-2 gap-6 border-t border-border/60 pt-8 font-mono text-xs uppercase tracking-widest text-muted-foreground md:grid-cols-3">
              <div>
                <dt className="text-[10px] text-accent/80">Status</dt>
                <dd className="mt-2 text-foreground">Amateur</dd>
              </div>
              <div>
                <dt className="text-[10px] text-accent/80">Mode</dt>
                <dd className="mt-2 text-foreground">Fun dives</dd>
              </div>
              <div className="col-span-2 md:col-span-1">
                <dt className="text-[10px] text-accent/80">Vibe</dt>
                <dd className="mt-2 text-foreground">Curious</dd>
              </div>
            </dl>
          </div>

          <div className="relative mx-auto w-full max-w-sm md:mx-0 md:max-w-xs lg:max-w-sm">
            <div className="animate-float-slow relative">
              <div className="absolute -inset-px rounded-sm bg-gradient-to-br from-accent/40 via-transparent to-primary/30 opacity-60 blur-sm" />
              <img
                src="/portrait.jpg"
                alt="Zay Ya"
                className="relative z-10 aspect-[3/4] w-full rounded-sm border border-border object-cover shadow-glow"
              />
              <div className="absolute -bottom-3 left-4 right-4 z-20 border border-border/80 bg-background/90 px-4 py-2 font-mono text-[10px] uppercase tracking-[0.35em] text-muted-foreground backdrop-blur-md">
                Hobbyist · no credentials flex
              </div>
            </div>
          </div>
        </div>
      </section>

      <MarqueeStrip />

      <section className="border-b border-border/60 bg-card/20 px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3 md:gap-6">
          <HudStat label="Skill focus" value="Buoyancy" hint="The quiet stuff — breath, weighting, not touching the bottom." />
          <HudStat label="Why I dive" value="Wonder" hint="Light shafts, small fish, the hush once you descend." />
          <HudStat label="This site" value="Notebook" hint="Trip scraps and frames — not a business card, not a résumé." />
        </div>
      </section>

      <section id="log" className="scroll-mt-28 border-b border-border/60 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Field notes</p>
              <h2 className="mt-3 font-display text-4xl uppercase tracking-tight md:text-5xl">Dive journal</h2>
            </div>
            <p className="max-w-md text-pretty text-muted-foreground md:text-right">
              Little write-ups from weekends and holidays — where we went, what surprised me, what I want to repeat.
              Nothing here is instruction; I am still a student of the water.
            </p>
          </div>

          <ul className="mt-14 grid gap-4 font-mono text-sm md:grid-cols-3">
            <li className="border border-border/70 bg-background/50 p-6 backdrop-blur-sm transition-colors hover:border-accent/30">
              <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">01</span>
              <p className="mt-4 text-foreground">Local shore sites I keep going back to</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Easy entries, familiar viz, good for drills.</p>
            </li>
            <li className="border border-border/70 bg-background/50 p-6 backdrop-blur-sm transition-colors hover:border-accent/30">
              <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">02</span>
              <p className="mt-4 text-foreground">Gear experiments that actually helped</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">Small changes — clips, hose routing, warmth.</p>
            </li>
            <li className="border border-border/70 bg-background/50 p-6 backdrop-blur-sm transition-colors hover:border-accent/30">
              <span className="text-[10px] uppercase tracking-[0.35em] text-muted-foreground">03</span>
              <p className="mt-4 text-foreground">Marine life I am learning to name</p>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">ID books, blurry photos, happy mistakes.</p>
            </li>
          </ul>
        </div>
      </section>

      <section id="frames" className="scroll-mt-28 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Still frames</p>
              <h2 className="mt-3 font-display text-4xl uppercase tracking-tight md:text-5xl">From the blue</h2>
            </div>
            <p className="max-w-md text-pretty text-muted-foreground">
              Phone and compact camera shots — not Nat Geo, just proof I was there and the water was doing something
              beautiful.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-12 md:gap-6">
            <figure className="group relative md:col-span-7 md:row-span-2">
              <div className="absolute -inset-1 rounded-sm bg-gradient-to-tr from-accent/20 to-transparent opacity-0 blur-md transition-opacity duration-500 group-hover:opacity-100" />
              <img
                src="/exp-1.jpg"
                alt="Underwater scene from a recreational dive"
                className="relative h-full min-h-[280px] w-full rounded-sm border border-border object-cover shadow-glow md:min-h-[420px]"
              />
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Log frame A — ambient light
              </figcaption>
            </figure>

            <figure className="md:col-span-5">
              <div className="flex h-full flex-col justify-between border border-border/70 bg-card/30 p-8 backdrop-blur-sm">
                <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-accent">Caption</p>
                <p className="mt-6 font-display text-3xl uppercase leading-none text-foreground">Salt &amp; haze</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  The kinds of dives I write home about: blue water, easy current, friends on the boat.
                </p>
              </div>
            </figure>

            <figure className="group md:col-span-5">
              <img
                src="/exp-2.jpg"
                alt="Another moment from a fun dive"
                className="aspect-[4/3] w-full rounded-sm border border-border object-cover shadow-glow transition-transform duration-700 ease-out-expo group-hover:scale-[1.02] md:aspect-auto md:h-full md:min-h-[200px]"
              />
              <figcaption className="mt-3 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Log frame B — closer in
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section id="hello" className="scroll-mt-28 border-t border-border/60 bg-gradient-to-b from-card/30 to-background px-5 py-24 md:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-stretch gap-12 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-xl space-y-6">
            <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">Hello</p>
            <h2 className="font-display text-4xl uppercase tracking-tight md:text-5xl">Fellow bubble blowers</h2>
            <p className="text-pretty text-lg leading-relaxed text-muted-foreground">
              If you are also an amateur who geeks out over tides and viz forecasts, I would love to swap stories. This
              is not a company inbox — just a person who happens to spend weekends wet.
            </p>
            <p className="font-mono text-xs text-muted-foreground">
              (Drop a line wherever you already know me — social, dive club, whatever feels normal.)
            </p>
          </div>
          <div className="relative w-full max-w-md lg:max-w-sm">
            <div className="absolute -inset-2 rounded-sm bg-gradient-to-br from-primary/15 via-transparent to-accent/20 blur-xl" />
            <div className="relative border border-border/80 bg-background/80 p-8 backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Disclaimer</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Nothing on this site is training advice or a substitute for a certified instructor. I share my own
                hobby journey only.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-border px-5 py-12 text-center md:px-10">
        <p className="font-mono text-[11px] uppercase tracking-[0.28em] text-muted-foreground">
          © {new Date().getFullYear()} Zay Ya — recreational diver, personal site
        </p>
      </footer>
    </div>
  );
}
