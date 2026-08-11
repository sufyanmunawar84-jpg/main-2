import { DevicePhoneMobileIcon, HomeModernIcon, BuildingOffice2Icon, SignalIcon } from "@heroicons/react/24/outline";
import { siteConfig } from "@/lib/site";

const services = [
  {
    icon: DevicePhoneMobileIcon,
    title: "Mobile & SIM-only",
    text: "New connections, network switches, data needs and contract lengths — explained without the jargon.",
  },
  {
    icon: HomeModernIcon,
    title: "Home broadband",
    text: "Talk through connection types and household needs based on your address and how you use the internet.",
  },
  {
    icon: BuildingOffice2Icon,
    title: "Business connectivity",
    text: "Guidance for sole traders and teams who need reliable mobile lines or workplace connectivity.",
  },
  {
    icon: SignalIcon,
    title: "Coverage & upgrades",
    text: "Discuss 5G considerations, device upgrades and what to check before you change anything.",
  },
] as const;

export function Services() {
  return (
    <section id="services" className="section-pad scroll-mt-24 bg-[var(--foam)]">
      <div className="container-shell">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--teal)]">What a call covers</p>
          <h2 className="display-font mt-3 text-[clamp(2rem,4vw,3.25rem)] font-bold leading-[1.05] tracking-[-0.04em] text-[var(--ink)]">
            One conversation about how you stay connected.
          </h2>
          <p className="mt-4 text-lg leading-8 text-[var(--muted)]">
            Tell us what matters. We help you make sense of the plan types available across the UK.
          </p>
        </div>

        <ul className="mt-14 grid gap-x-10 gap-y-12 sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.title} className="border-t border-[var(--line)] pt-6">
                <Icon className="h-7 w-7 text-[var(--teal)]" aria-hidden="true" />
                <h3 className="display-font mt-4 text-xl font-bold tracking-[-0.02em]">{service.title}</h3>
                <p className="mt-3 leading-7 text-[var(--muted)]">{service.text}</p>
              </li>
            );
          })}
        </ul>

        <p className="mt-12 max-w-3xl text-xs leading-5 text-[var(--muted)]">
          UK providers and networks may include Vodafone, EE, O2, Three, Sky, Virgin Media and BT, among others. Names are
          examples only; {siteConfig.name} is not affiliated with or endorsed by these providers.
        </p>
      </div>
    </section>
  );
}
