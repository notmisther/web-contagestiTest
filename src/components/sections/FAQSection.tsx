import { useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

const faqItems: FaqItem[] = [
  {
    question: "¿Qué tipo de negocios pueden trabajar con ustedes?",
    answer:
      "Trabajamos principalmente con emprendedores, microempresas y pequeñas empresas que necesitan más orden, mejor presencia digital o soluciones prácticas para ahorrar tiempo y captar más clientes.",
  },
  {
    question: "¿Necesito tener todo definido antes de solicitar una solución?",
    answer:
      "No. Podemos ayudarte a aterrizar la idea. Muchas veces el negocio sabe que tiene un problema, pero no exactamente qué solución necesita. Nosotros te ayudamos a identificar qué conviene más según tu etapa y tu presupuesto.",
  },
  {
    question: "¿Qué incluye una solución de presencia digital?",
    answer:
      "Puede incluir una landing page o página web orientada a mostrar mejor tu negocio, generar confianza y facilitar el contacto con potenciales clientes. Siempre buscamos que tenga un objetivo comercial claro, no solo que se vea bonita.",
  },
  {
    question: "¿Qué procesos se pueden automatizar en un negocio pequeño?",
    answer:
      "Se pueden automatizar tareas como respuestas iniciales por WhatsApp, correos, formularios, registro de datos en Excel, seguimiento de clientes, avisos internos y otros procesos repetitivos que hoy te quitan tiempo.",
  },
  {
    question: "¿Cómo sé si necesito un sistema a medida?",
    answer:
      "Si tu negocio ya maneja información, seguimiento de clientes, operaciones o procesos que en Excel o WhatsApp se están volviendo desordenados, un sistema a medida puede ayudarte a tener más control, orden y escalabilidad.",
  },
];

function ChevronIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-5 w-5 shrink-0 text-[var(--color-brand-blue-strong)] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="bg-[var(--page-bg)] py-14 sm:py-16 lg:py-20">
      <div className="mx-auto w-full max-w-[var(--section-max)] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[980px] text-center">
          <p className="type-eyebrow uppercase text-[var(--color-text-muted)]">
            PREGUNTAS FRECUENTES
          </p>

          <h2 className="type-h2 mt-3 text-[var(--color-brand-blue-strong)]">
            Resolvemos las dudas más{" "}
            <span className="text-[var(--color-brand-green)]">comunes</span>
          </h2>

          <p className="type-text mx-auto mt-4 max-w-[860px] text-[var(--color-text-body)]">
            Si todavía estás evaluando qué solución necesita tu negocio, aquí
            tienes respuestas claras para ayudarte a decidir con más seguridad.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[960px] space-y-4">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={item.question}
                className={`rounded-[var(--radius-card-md)] border border-[var(--color-border-soft)] bg-[var(--color-surface-white)] px-5 py-5 shadow-[var(--shadow-card)] transition-[border-color,box-shadow,background-color] duration-300 sm:px-6 ${isOpen ? "border-[var(--color-border-soft-strong)]" : ""}`}
              >
                <button
                  type="button"
                  onClick={() => toggleItem(index)}
                  aria-expanded={isOpen}
                  className="flex w-full items-start justify-between gap-4 text-left"
                >
                  <span className="type-card-title text-[var(--color-brand-blue-strong)]">
                    {item.question}
                  </span>

                  <ChevronIcon isOpen={isOpen} />
                </button>

                <div
                  className={`grid transition-[grid-template-rows,opacity,margin-top] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "mt-0 grid-rows-[0fr] opacity-0"}`}
                >
                  <div className="overflow-hidden">
                    <p className="type-card-body text-[var(--color-text-body)]">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mx-auto mt-10 max-w-[900px] rounded-[var(--radius-card-lg)] border border-[var(--color-border-soft)] bg-[var(--color-surface-soft)] p-6 text-center sm:p-7">
          <p className="type-note text-[var(--color-text-note)]">
            ¿No encontraste tu respuesta?
          </p>

          <h3 className="type-h4 mt-2 text-[var(--color-brand-blue-strong)]">
            Conversemos y te orientamos según tu caso
          </h3>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="#contacto"
              className="interactive-button-soft type-button inline-flex min-h-[72px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-green)] px-8 text-center text-white shadow-[var(--shadow-button-green)] sm:min-w-[220px]"
            >
              Quiero asesoría
            </a>

            <a
              href="#servicios"
              className="interactive-button-soft type-button inline-flex min-h-[72px] items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-soft)] bg-[var(--color-surface-white)] px-8 text-center text-[var(--color-brand-blue-strong)] sm:min-w-[220px]"
            >
              Tengo una pregunta
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
