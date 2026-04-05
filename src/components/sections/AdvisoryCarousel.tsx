import { useEffect, useRef, useState } from "react";

type Slide = {
  id: number;
  titleBottom: string;
  description: string;
  image: string;
};

const slides: Slide[] = [
  {
    id: 1,
    titleBottom: "Tributaria",
    description:
      "Te brindamos asesoría tributaria clara y personalizada para que cumplas con SUNAT de forma segura, evites errores y tomes mejores decisiones para tu negocio con total confianza.",
    image: "/images/image-asesoria-tributaria.png",
  },
  {
    id: 2,
    titleBottom: "Financiera",
    description:
      "Analizamos la situación financiera de tu negocio para ayudarte a ordenar tus números, mejorar tu control y tomar decisiones con una visión más clara y rentable.",
    image: "/images/image-asesoria-financiera.png",
  },
  {
    id: 3,
    titleBottom: "Transformación digital",
    description:
      "Te ayudamos a modernizar procesos, organizar mejor tu información y aplicar herramientas digitales que impulsen el crecimiento de tu negocio de forma práctica.",
    image: "/images/image-asesoria-digital.png",
  },
];

const AUTO_TIME = 2500;
const MANUAL_PAUSE_TIME = 5000;

export default function AdvisoryCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isManualPause, setIsManualPause] = useState(false);

  const resumeTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (isManualPause) return;

    const interval = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % slides.length);
    }, AUTO_TIME);

    return () => window.clearInterval(interval);
  }, [isManualPause]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) {
        window.clearTimeout(resumeTimeoutRef.current);
      }
    };
  }, []);

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
    setIsManualPause(true);

    if (resumeTimeoutRef.current) {
      window.clearTimeout(resumeTimeoutRef.current);
    }

    resumeTimeoutRef.current = window.setTimeout(() => {
      setIsManualPause(false);
    }, MANUAL_PAUSE_TIME);
  };

  const currentSlide = slides[activeIndex];

  return (
    <section id="asesorias" className="bg-[var(--color-surface-base)] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[var(--section-max)] px-5 sm:px-8 lg:px-10">
        <div
          className="grid items-center gap-8 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-12 xl:gap-16"
          aria-roledescription="carousel"
          aria-label="Sección de asesorías"
        >
          <div
            key={`image-${currentSlide.id}`}
            className="animate-advisory-soft-fade overflow-hidden rounded-[30px] shadow-[var(--shadow-card)] sm:rounded-[36px] lg:rounded-[40px]"
          >
            <img
              src={currentSlide.image}
              alt={currentSlide.titleBottom}
              className="h-full w-full object-cover aspect-[1/1.02] sm:aspect-[1/0.95] lg:aspect-[1/0.98]"
            />
          </div>

          <div aria-live="polite">
            <h2 className="text-[var(--color-brand-blue-strong)]">
              <span className="type-h2 block">Te brindamos</span>
              <span className="type-h2 block text-[var(--color-brand-green)]">
                Asesoría
              </span>

              <span
                key={`title-${currentSlide.id}`}
                className="type-h2-5 animate-advisory-soft-fade block text-[var(--color-brand-blue-strong)]"
              >
                {currentSlide.titleBottom}
              </span>
            </h2>

            <p
              key={`description-${currentSlide.id}`}
              className="type-text animate-advisory-soft-fade mt-5 max-w-[620px] text-[var(--color-text-body)]"
            >
              {currentSlide.description}
            </p>

            <a
              href="/contacto"
              className="interactive-button-soft type-button mt-8 inline-flex min-h-[64px] w-full max-w-[360px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-green)] px-6 text-center text-white shadow-[var(--shadow-button-green)] sm:mt-9 sm:w-auto sm:px-10"
            >
              Queremos saber más de ti
            </a>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3 sm:mt-10">
          {slides.map((slide, index) => {
            const isActive = index === activeIndex;

            return (
              <button
                key={slide.id}
                type="button"
                aria-label={`Ir a ${slide.titleBottom}`}
                aria-pressed={isActive}
                onClick={() => handleDotClick(index)}
                className={[
                  "h-[16px] rounded-full transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]",
                  isActive
                    ? "w-[70px] bg-[var(--color-border-soft)]"
                    : "w-[36px] bg-[var(--color-surface-soft-hover)] hover:bg-[var(--color-border-soft)]",
                ].join(" ")}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
