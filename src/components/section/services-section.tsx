import BlurFade from "@/components/magicui/blur-fade";
import { DATA } from "@/data/resume";
import { Code2, Gauge, LifeBuoy, PlugZap, Smartphone, TestTube2 } from "lucide-react";

const BLUR_FADE_DELAY = 0.04;

const serviceIcons = {
  Smartphone,
  Code2,
  Gauge,
  PlugZap,
  TestTube2,
  LifeBuoy,
} as const;

const serviceStyles = [
  {
    icon: "text-sky-500",
    iconBackground: "bg-sky-500/10",
    ring: "ring-sky-500/20",
    glow: "from-sky-500/20",
  },
  {
    icon: "text-violet-500",
    iconBackground: "bg-violet-500/10",
    ring: "ring-violet-500/20",
    glow: "from-violet-500/20",
  },
  {
    icon: "text-amber-500",
    iconBackground: "bg-amber-500/10",
    ring: "ring-amber-500/20",
    glow: "from-amber-500/20",
  },
  {
    icon: "text-emerald-500",
    iconBackground: "bg-emerald-500/10",
    ring: "ring-emerald-500/20",
    glow: "from-emerald-500/20",
  },
  {
    icon: "text-rose-500",
    iconBackground: "bg-rose-500/10",
    ring: "ring-rose-500/20",
    glow: "from-rose-500/20",
  },
  {
    icon: "text-cyan-500",
    iconBackground: "bg-cyan-500/10",
    ring: "ring-cyan-500/20",
    glow: "from-cyan-500/20",
  },
] as const;

export default function ServicesSection() {
  return (
    <section id="services">
      <div className="flex min-h-0 flex-col gap-y-8">
        <div className="flex flex-col gap-y-4 items-center justify-center">
          <div className="flex items-center w-full">
            <div className="flex-1 h-px bg-linear-to-r from-transparent from-5% via-border via-95% to-transparent" />
            <div className="border bg-primary z-10 rounded-xl px-4 py-1">
              <span className="text-background text-sm font-medium">Services</span>
            </div>
            <div className="flex-1 h-px bg-linear-to-l from-transparent from-5% via-border via-95% to-transparent" />
          </div>
          <div className="flex flex-col gap-y-3 items-center justify-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">What I do</h2>
            <p className="text-muted-foreground md:text-lg/relaxed lg:text-base/relaxed xl:text-lg/relaxed text-balance text-center">
              I help turn ideas into fast, responsive, and maintainable web experiences, from UI
              implementation to API integration, testing, optimization, and long-term product
              improvements.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {DATA.services.map((service, id) => {
            const Icon = serviceIcons[service.icon];
            const style = serviceStyles[id % serviceStyles.length];

            return (
              <BlurFade key={service.title} delay={BLUR_FADE_DELAY * 12 + id * 0.05}>
                <div className="group relative h-full overflow-hidden rounded-2xl border bg-card/80 p-5 shadow-sm ring-2 ring-border/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-border/40">
                  <div
                    className={`absolute inset-x-0 top-0 h-24 bg-linear-to-b ${style.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                  />
                  <div
                    className={`relative mb-4 flex size-10 items-center justify-center rounded-xl border bg-background shadow-sm ring-4 ${style.ring}`}
                  >
                    <div
                      className={`absolute inset-1 rounded-lg ${style.iconBackground} transition-transform duration-300 group-hover:scale-110`}
                    />
                    <Icon className={`relative size-4 ${style.icon}`} aria-hidden />
                  </div>
                  <div className="relative flex flex-col gap-2">
                    <h3 className="font-semibold leading-tight tracking-tight">{service.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {service.description}
                    </p>
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
