import { useState } from "react";

type TrainingSectionProps = {
  entrepreneurImageSrc?: string;
  teamImageSrc?: string;
};

export default function TrainingSection({
  entrepreneurImageSrc = "/images/capacitacion-emprendedor.jpg",
  teamImageSrc = "/images/capacitacion-equipo.jpg",
}: TrainingSectionProps) {
  const [activeCard, setActiveCard] = useState<"entrepreneur" | "team" | null>(
    null,
  );

  const trainingItems = [
    {
      key: "entrepreneur" as const,
      eyebrow: "PARA EMPRENDEDORES",
      description:
        "Contenidos prácticos y útiles para ordenar, vender y tomar mejores decisiones.",
      imageSrc: entrepreneurImageSrc,
      imageAlt: "Emprendedor participando en una capacitación",
      imageClassName: "aspect-[0.92/1]",
    },
    {
      key: "team" as const,
      eyebrow: "PARA EQUIPOS",
      description:
        "Formación para mejorar habilidades, coordinación y desempeño dentro de la empresa.",
      imageSrc: teamImageSrc,
      imageAlt: "Equipo recibiendo una capacitación",
      imageClassName: "aspect-[1/1.02]",
    },
  ];

  return (
    <section id="capacitaciones" className="bg-[var(--color-surface-base)] py-12 sm:py-14 lg:py-16">
      <div className="mx-auto w-full max-w-[var(--section-max)] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[1240px] text-center">
          <h2 className="type-h2 text-[var(--color-brand-blue-strong)]">
            Capacitaciones para{" "}
            <span className="text-[var(--color-brand-green)]">
              emprendedores y equipos
            </span>
          </h2>

          <p className="type-text mx-auto mt-4 max-w-[900px] text-[var(--color-text-body)]">
            Ayudamos a fortalecer conocimientos, ordenar ideas y mejorar la
            forma de trabajar con capacitaciones diseñadas para la realidad del
            negocio y del equipo.
          </p>
        </div>

        {/* RESPONSIVE */}
        <div className="mt-10 space-y-6 lg:hidden">
          {trainingItems.map((item) => {
            const isActive = activeCard === item.key;

            return (
              <div key={item.key} className="space-y-4">
                <div
                  onMouseEnter={() => setActiveCard(item.key)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={[
                    "interactive-card-soft overflow-hidden rounded-[var(--radius-card-lg)] border border-transparent shadow-[var(--shadow-card)]",
                    isActive ? "interactive-card-soft-active" : "",
                  ].join(" ")}
                >
                  <img
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    className={`h-full w-full object-cover ${item.imageClassName}`}
                  />
                </div>

                <div
                  onMouseEnter={() => setActiveCard(item.key)}
                  onMouseLeave={() => setActiveCard(null)}
                  className={[
                    "interactive-card-soft rounded-[var(--radius-card-md)] border border-[var(--color-border-soft)] bg-transparent p-6 sm:p-7",
                    isActive ? "interactive-card-soft-active" : "",
                  ].join(" ")}
                >
                  <p className="type-eyebrow uppercase text-[var(--color-text-muted)]">
                    {item.eyebrow}
                  </p>

                  <p className="type-text-large mt-4 text-[var(--color-text-dark)]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}

          <p className="type-note mx-auto mt-6 max-w-[470px] text-center text-[var(--color-text-note)] sm:mt-7">
            No solo enseñamos conceptos: buscamos que cada capacitación le deje
            algo útil y aplicable al negocio o al equipo.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#quiero-saber-mas"
              className="interactive-button-soft type-button inline-flex min-h-[72px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-green)] px-8 text-center text-white shadow-[var(--shadow-button-green)] sm:min-w-[222px]"
            >
              Quiero saber más
            </a>

            <a
              href="#solicitar-capacitacion"
              className="interactive-button-soft type-button inline-flex min-h-[72px] items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-soft)] bg-[var(--color-surface-base)] px-8 text-center text-[var(--color-brand-blue-strong)] sm:min-w-[264px]"
            >
              Solicitar capacitación
            </a>
          </div>
        </div>

        {/* DESKTOP */}
        <div className="mt-10 hidden items-center gap-8 lg:grid lg:grid-cols-[0.94fr_1.06fr] lg:gap-12">
          <div className="mx-auto w-full max-w-[620px]">
            <div className="grid grid-cols-2 items-start gap-4 lg:gap-5">
              <div
                onMouseEnter={() => setActiveCard("entrepreneur")}
                onMouseLeave={() => setActiveCard(null)}
                className={[
                  "interactive-card-soft overflow-hidden rounded-[var(--radius-card-lg)] border border-transparent shadow-[var(--shadow-card)]",
                  activeCard === "entrepreneur"
                    ? "interactive-card-soft-active"
                    : "",
                ].join(" ")}
              >
                <img
                  src={entrepreneurImageSrc}
                  alt="Emprendedor participando en una capacitación"
                  className="h-full w-full object-cover aspect-[0.92/1]"
                />
              </div>

              <div
                onMouseEnter={() => setActiveCard("team")}
                onMouseLeave={() => setActiveCard(null)}
                className={[
                  "interactive-card-soft mt-48 overflow-hidden rounded-[var(--radius-card-lg)] border border-transparent shadow-[var(--shadow-card)] lg:mt-52",
                  activeCard === "team" ? "interactive-card-soft-active" : "",
                ].join(" ")}
              >
                <img
                  src={teamImageSrc}
                  alt="Equipo recibiendo una capacitación"
                  className="h-full w-full object-cover aspect-[1/1.02]"
                />
              </div>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[520px]">
            <div className="space-y-4">
              {trainingItems.map((item) => {
                const isActive = activeCard === item.key;

                return (
                  <div
                    key={item.key}
                    onMouseEnter={() => setActiveCard(item.key)}
                    onMouseLeave={() => setActiveCard(null)}
                    className={[
                      "interactive-card-soft rounded-[var(--radius-card-md)] border border-[var(--color-border-soft)] bg-transparent p-6 sm:p-7",
                      isActive ? "interactive-card-soft-active" : "",
                    ].join(" ")}
                  >
                    <p className="type-eyebrow uppercase text-[var(--color-text-muted)]">
                      {item.eyebrow}
                    </p>

                    <p className="type-text-large mt-4 text-[var(--color-text-dark)]">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

            <p className="type-note mx-auto mt-6 max-w-[470px] text-center text-[var(--color-text-note)] sm:mt-7">
              No solo enseñamos conceptos: buscamos que cada capacitación le
              deje algo útil y aplicable al negocio o al equipo.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="/contacto"
                className="interactive-button-soft type-button inline-flex min-h-[72px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-green)] px-8 text-center text-white shadow-[var(--shadow-button-green)] sm:min-w-[222px]"
              >
                Quiero saber más
              </a>

              <a
                href="/contacto"
                className="interactive-button-soft type-button inline-flex min-h-[72px] items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-soft)] bg-[var(--color-surface-base)] px-8 text-center text-[var(--color-brand-blue-strong)] sm:min-w-[264px]"
              >
                Solicitar capacitación
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
