type AudienceCard = {
  title: string;
  description: string;
  href: string;
};

const audienceCards: AudienceCard[] = [
  {
    title: "Emprendedores",
    description:
      "Ordena tu negocio desde el inicio y evita crecer en desorden.",
    href: "#emprendedores",
  },
  {
    title: "Pequeñas empresas",
    description:
      "Controla mejor tu operación con una contabilidad más clara y útil.",
    href: "#pequenas-empresas",
  },
  {
    title: "Medianas empresas",
    description:
      "Fortalece tu estructura contable para decidir con más seguridad.",
    href: "#medianas-empresas",
  },
];

const benefitPills = [
  "Más orden administrativo y documental",
  "Más claridad para tomar decisiones",
  "Acompañamiento contable según tu etapa",
];

function ArrowUpRightIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-7 w-7 text-[var(--color-text-dark)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-8 w-8 text-[var(--color-text-body)]"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 11 6.5 8.5a2 2 0 0 0-2.8 0L2 10.2a2 2 0 0 0 0 2.8l5 5a2 2 0 0 0 2.8 0l1.7-1.7" />
      <path d="m15 13 2.5 2.5a2 2 0 0 0 2.8 0l1.7-1.7a2 2 0 0 0 0-2.8l-5-5a2 2 0 0 0-2.8 0L12.5 7.5" />
      <path d="m8 13 3.2 3.2a2 2 0 0 0 2.8 0l3.4-3.4a1.9 1.9 0 0 0-2.7-2.7l-1.4 1.4a2 2 0 0 1-2.8 0l-.8-.8a2 2 0 0 0-2.8 0L6 11.8" />
    </svg>
  );
}

export default function AccountingSolutionsSection() {
  return (
    <section id="contabilidad" className="bg-[var(--color-brand-blue)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[var(--section-max)] px-5 sm:px-8 lg:px-10">
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1.14fr)_minmax(0,0.86fr)] lg:gap-10 xl:gap-12">
          <div className="lg:pr-5">
            <div className="max-w-[700px]">
              <h2 className="type-h1-5 text-pretty text-[var(--color-surface-white)]">
                <span className="text-[var(--color-brand-green)]">
                  Soluciones contables
                </span>{" "}
                para emprendedores, pequeñas empresas y medianas empresas
              </h2>

              <p className="type-text mt-5 max-w-[720px] text-[var(--color-text-on-dark)] lg:mt-6">
                Ordena tu información, mejora el control de tu negocio y toma
                decisiones con una contabilidad más clara, cercana y adaptada a
                la etapa en la que hoy te encuentras.
              </p>
            </div>

            <div className="mt-8 flex max-w-[760px] flex-col gap-3 lg:mt-7">
              {benefitPills.map((item) => (
                <div
                  key={item}
                  className="interactive-scale-soft type-pill inline-flex w-fit max-w-full items-center gap-3 rounded-[var(--radius-pill)] bg-[var(--color-surface-soft)] px-5 py-3 text-[var(--color-text-body)] sm:px-6"
                >
                  <span className="h-[11px] w-[11px] shrink-0 rounded-full bg-[var(--color-dot)]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row lg:mt-11">
              <a
                href="/contacto"
                className="interactive-button-soft type-button inline-flex min-h-[64px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-green)] px-8 text-center text-white shadow-[var(--shadow-button-green)] sm:min-w-[264px]"
              >
                Ver servicio completo
              </a>

              <a
                href="/contacto"
                className="interactive-button-soft type-button inline-flex min-h-[64px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-surface-white)] px-8 text-center text-[var(--color-brand-blue-strong)] shadow-[var(--shadow-button-neutral)] sm:min-w-[248px]"
              >
                Solicitar asesoría
              </a>
            </div>
          </div>

          <div className="rounded-[var(--radius-card-lg)] bg-[var(--color-surface-base)] p-5 shadow-[var(--shadow-card)] sm:p-7 lg:p-6 xl:p-7">
            <div className="flex items-start justify-between gap-4">
              <div className="max-w-[480px]">
                <p className="type-eyebrow uppercase text-[var(--color-text-muted)]">
                  A QUIÉN AYUDAMOS
                </p>

                <h3 className="type-h3 mt-3 text-[var(--color-brand-blue-strong)]">
                  Un servicio adaptado a cada etapa del negocio
                </h3>
              </div>

              <div className="flex h-[72px] w-[72px] shrink-0 items-center justify-center rounded-[20px] border border-[var(--color-border-soft)] bg-[var(--color-surface-soft)]">
                <HandshakeIcon />
              </div>
            </div>

            <div className="mt-6 space-y-4 lg:mt-7">
              {audienceCards.map((card) => (
                <a
                  key={card.title}
                  href={card.href}
                  className="interactive-card-soft block rounded-[var(--radius-card-md)] border border-[var(--color-border-soft)] bg-[var(--color-surface-soft)] p-5 sm:p-6"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="max-w-[460px]">
                      <h4 className="type-h4 text-[var(--color-text-dark)]">
                        {card.title}
                      </h4>

                      <p className="type-text mt-4 text-[var(--color-text-body)]">
                        {card.description}
                      </p>
                    </div>

                    <div className="shrink-0">
                      <ArrowUpRightIcon />
                    </div>
                  </div>
                </a>
              ))}
            </div>

            <p className="type-text-sm mx-auto mt-7 max-w-[430px] text-center text-[var(--color-text-note)]">
              No solo se trata de cumplir, sino de darle a tu negocio más orden,
              más control y una base más sólida para crecer.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
