type HeroProps = {
  imageSrc?: string;
};

export default function Hero({
  imageSrc = "/images/hero-contagesti.jpg",
}: HeroProps) {
  return (
    <section className="bg-[var(--color-brand-blue)] py-8 lg:py-14">
      <div className="mx-auto w-full max-w-[var(--section-max)] px-5 sm:px-8 md:px-10 lg:px-[10px]">
        <div className="grid items-stretch gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="flex h-full flex-col justify-center rounded-[42px] bg-[var(--color-surface-base)] px-8 py-10 shadow-[var(--shadow-card)] sm:px-10 sm:py-12 lg:rounded-[58px] lg:px-[50px] lg:py-[46px]">
            <h1 className="type-h1 max-w-[590px] leading-[0.98] text-[var(--color-brand-blue-strong)]">
              Tu aliado perfecto
              <br />
              para potenciar tu
              <br />
              desarrollo
              <br />
              enfocados en
              <br />
              <span className="text-[var(--color-brand-green)]">
                impulsar tu
              </span>
              <br />
              <span className="text-[var(--color-brand-green)]">
                crecimiento
              </span>
            </h1>

            <p className="type-text mt-5 max-w-[640px] leading-[1.1] text-[var(--color-text-body)] lg:mt-4 lg:max-w-[560px]">
              Un equipo comprometido con potenciar tu desarrollo financiero.
              Expertos en asesoría financiera, contable y de gestión.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:mt-9">
              <a
                href="/contacto"
                className="interactive-button-soft type-button inline-flex min-h-[64px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-green)] px-8 text-center text-white shadow-[var(--shadow-button-green)]"
              >
                Agenda una reunión gratis
              </a>

              <a
                href="/contacto"
                className="interactive-button-soft type-button inline-flex min-h-[64px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-blue-strong)] px-8 text-center text-white shadow-[var(--shadow-button-neutral)]"
              >
                Asesoría virtual
              </a>
            </div>
          </div>

          <div className="hidden overflow-hidden rounded-[42px] shadow-[var(--shadow-card)] lg:flex lg:rounded-[46px]">
            <img
              src={imageSrc}
              alt="Asesor de negocios sonriendo en una oficina"
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
