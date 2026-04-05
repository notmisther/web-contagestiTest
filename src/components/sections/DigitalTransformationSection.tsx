type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  icon: "presence" | "automation" | "systems";
};

const services: ServiceItem[] = [
  {
    title: "Presencia digital",
    description:
      "Creamos tu página web o landing page enfocada en mostrar bien tu negocio, generar confianza y ayudarte a captar más clientes.",
    bullets: [
      "Diseño profesional y claro",
      "Orientado a captar clientes",
      "Optimizado para celulares",
    ],
    href: "/contacto",
    icon: "presence",
  },
  {
    title: "Automatización de procesos",
    description:
      "Automatizamos tareas repetitivas en WhatsApp, correos, formularios, Excel y otros flujos para que ahorres tiempo y trabajes con más orden.",
    bullets: [
      "Menos tareas manuales",
      "Más rapidez en atención",
      "Más control en tu operación",
    ],
    href: "/contacto",
    icon: "automation",
  },
  {
    title: "Sistemas a medida",
    description:
      "Desarrollamos soluciones adaptadas a tu negocio para organizar mejor tu información, centralizar procesos y crecer con una base más sólida.",
    bullets: [
      "Hecho según tu necesidad",
      "Más orden y seguimiento",
      "Escalable para crecer",
    ],
    href: "/contacto",
    icon: "systems",
  },
];

function PresenceIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 text-[var(--color-brand-blue-strong)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="4" width="18" height="14" rx="2" />
      <path d="M8 20h8" />
      <path d="M12 18v2" />
    </svg>
  );
}

function AutomationIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 text-[var(--color-brand-blue-strong)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 7h7" />
      <path d="M4 17h7" />
      <path d="M13 7h7" />
      <path d="M13 17h7" />
      <circle cx="10" cy="7" r="2" />
      <circle cx="14" cy="17" r="2" />
    </svg>
  );
}

function SystemsIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 text-[var(--color-brand-blue-strong)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="4" y="4" width="7" height="7" rx="1.5" />
      <rect x="13" y="4" width="7" height="7" rx="1.5" />
      <rect x="4" y="13" width="7" height="7" rx="1.5" />
      <path d="M16.5 13.5h3.5v3.5" />
      <path d="M20 13.5 14.5 19" />
    </svg>
  );
}

function ServiceIcon({ icon }: { icon: ServiceItem["icon"] }) {
  if (icon === "presence") return <PresenceIcon />;
  if (icon === "automation") return <AutomationIcon />;
  return <SystemsIcon />;
}

export default function DigitalTransformationSection() {
  return (
    <section id="transformacion-digital" className="bg-[var(--color-brand-blue)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[var(--section-max)] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1100px] text-center">
          <p className="type-eyebrow uppercase text-[var(--color-text-on-dark)] opacity-80">
            TRANSFORMACIÓN DIGITAL
          </p>

          <h2 className="type-h2 mt-3 text-[var(--color-text-on-dark)]">
            Soluciones digitales para{" "}
            <span className="text-[var(--color-brand-green)]">
              vender mejor, trabajar mejor y crecer mejor
            </span>
          </h2>

          <p className="type-text mx-auto mt-4 max-w-[920px] text-[var(--color-text-on-dark)] opacity-90">
            Te ayudamos a modernizar tu negocio con soluciones prácticas y
            entendibles: desde una mejor presencia digital hasta
            automatizaciones y sistemas creados según lo que realmente
            necesitas.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <span className="interactive-scale-soft type-text-sm inline-flex items-center rounded-[var(--radius-pill)] border border-white/15 bg-white/10 px-4 py-2 text-[var(--color-text-on-dark)]">
            Ideal para emprendedores
          </span>
          <span className="interactive-scale-soft type-text-sm inline-flex items-center rounded-[var(--radius-pill)] border border-white/15 bg-white/10 px-4 py-2 text-[var(--color-text-on-dark)]">
            Microempresas
          </span>
          <span className="interactive-scale-soft type-text-sm inline-flex items-center rounded-[var(--radius-pill)] border border-white/15 bg-white/10 px-4 py-2 text-[var(--color-text-on-dark)]">
            Pequeñas empresas
          </span>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="interactive-card-soft rounded-[var(--radius-card-lg)] border border-[var(--color-border-soft)] bg-[var(--color-surface-white)] p-6 shadow-[var(--shadow-card)] sm:p-7"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-[20px] bg-[var(--color-surface-soft)]">
                  <ServiceIcon icon={service.icon} />
                </div>

                <span className="type-text-sm rounded-[var(--radius-pill)] bg-[var(--color-surface-soft)] px-3 py-1.5 text-[var(--color-text-muted)]">
                  Servicio
                </span>
              </div>

              <h3 className="type-card-title mt-6 text-[var(--color-brand-blue-strong)]">
                {service.title}
              </h3>

              <p className="type-card-body mt-4 text-[var(--color-text-body)]">
                {service.description}
              </p>

              <div className="mt-5 space-y-3">
                {service.bullets.map((bullet) => (
                  <div key={bullet} className="flex items-start gap-3">
                    <span className="mt-1 h-[10px] w-[10px] shrink-0 rounded-full bg-[var(--color-brand-green)]" />
                    <p className="type-text-sm text-[var(--color-text-body)]">
                      {bullet}
                    </p>
                  </div>
                ))}
              </div>

              <a
                href={service.href}
                className="interactive-button-soft type-button mt-6 inline-flex min-h-[52px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-blue-strong)] px-6 text-center text-white"
              >
                Quiero este servicio
              </a>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-[var(--radius-card-lg)] border border-white/10 bg-white/10 p-6 sm:p-7 lg:p-8">
          <div className="grid items-center gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h3 className="type-h3 text-[var(--color-text-on-dark)]">
                Empieza con lo que más impacto tenga en tu negocio
              </h3>

              <p className="type-text mt-3 max-w-[760px] text-[var(--color-text-on-dark)] opacity-90">
                No necesitas hacer todo al mismo tiempo. Podemos ayudarte a
                identificar qué te conviene primero: una web para captar
                clientes, automatizar tareas repetitivas o construir un sistema
                que te dé más orden y control.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:justify-end">
              <a
                href="/contacto"
                className="interactive-button-soft type-button inline-flex min-h-[72px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-green)] px-8 text-center text-white shadow-[var(--shadow-button-green)] sm:min-w-[220px]"
              >
                Quiero asesoría
              </a>

              <a
                href="/contacto"
                className="interactive-button-soft type-button inline-flex min-h-[72px] items-center justify-center rounded-[var(--radius-button)] border border-white/15 bg-transparent px-8 text-center text-[var(--color-text-on-dark)] sm:min-w-[220px]"
              >
                Ver más detalles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
