type FooterPrincipalProps = {
  brandName?: string;
  tagline?: string;
  whatsappHref?: string;
  phone?: string;
  email?: string;
  address?: string;
};

const servicios = [
  { label: "Asesoría", href: "#asesorias" },
  { label: "Contabilidad", href: "#contabilidad" },
  { label: "Capacitaciones", href: "#capacitaciones" },
  { label: "Transformación digital", href: "#transformacion-digital" },
];

const accesos = [
  { label: "Inicio", href: "/" },
  { label: "Nosotros", href: "/sobre-nosotros" },
  { label: "Eventos", href: "/eventos" },
  { label: "Contacto", href: "/contacto" },
];

export default function FooterPrincipal({
  brandName = "Contagesti",
  tagline = "Soluciones claras para emprendedores, microempresas y pequeñas empresas.",
  whatsappHref = "https://wa.me/51923880101?text=Hola%20Contagesti%2C%20quiero%20saber%20más%20sobre%20sus%20servicios.",
  phone = "+51 923 880 101",
  email = "contacto@contagesti.com",
  address = "Trujillo, Perú",
}: FooterPrincipalProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--color-brand-blue)] text-[var(--color-text-on-dark)]">
      <div className="mx-auto w-full max-w-[var(--section-max)] px-5 sm:px-8 lg:px-10">
        <div className="border-b border-[var(--color-border-soft)] py-6">
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <div className="type-eyebrow uppercase text-[var(--color-text-on-dark)] opacity-75">
                {brandName}
              </div>

              <h2 className="type-h3 mt-2 text-[var(--color-text-on-dark)]">
                Conversemos sobre lo que tu negocio necesita hoy
              </h2>

              <p className="type-text mt-2 max-w-2xl text-[var(--color-text-on-dark)] opacity-80">
                {tagline}
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href={whatsappHref}
                target="_blank"
                rel="noreferrer"
                className="interactive-button-soft type-button inline-flex min-h-[50px] items-center justify-center rounded-[var(--radius-button)] bg-[var(--color-brand-green)] px-5 py-3 text-center text-white shadow-[var(--shadow-button-green)]"
              >
                Escríbenos por WhatsApp
              </a>

              <a
                href="/contacto"
                className="interactive-button-soft type-button inline-flex min-h-[50px] items-center justify-center rounded-[var(--radius-button)] border border-[var(--color-border-soft)] bg-[var(--color-brand-blue)] px-5 py-3 text-center text-[var(--color-text-on-dark)]"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>

        <div className="grid gap-8 py-8 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
          <div>
            <div className="type-h4 text-[var(--color-text-on-dark)]">
              {brandName}
            </div>

            <p className="type-text-sm mt-3 max-w-sm text-[var(--color-text-on-dark)] opacity-80">
              Acompañamos a negocios que buscan más orden, más claridad y
              soluciones prácticas para crecer mejor sin complicarse.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <span className="interactive-scale-soft type-text-sm inline-flex items-center rounded-[var(--radius-pill)] border border-[var(--color-border-soft)] bg-[var(--color-brand-blue)] px-3 py-1.5 text-[var(--color-text-on-dark)] opacity-90">
                Perú
              </span>
              <span className="interactive-scale-soft type-text-sm inline-flex items-center rounded-[var(--radius-pill)] border border-[var(--color-border-soft)] bg-[var(--color-brand-blue)] px-3 py-1.5 text-[var(--color-text-on-dark)] opacity-90">
                Atención cercana
              </span>
              <span className="interactive-scale-soft type-text-sm inline-flex items-center rounded-[var(--radius-pill)] border border-[var(--color-border-soft)] bg-[var(--color-brand-blue)] px-3 py-1.5 text-[var(--color-text-on-dark)] opacity-90">
                Soluciones prácticas
              </span>
            </div>
          </div>

          <div>
            <div className="type-eyebrow uppercase text-[var(--color-text-on-dark)] opacity-75">
              Servicios
            </div>

            <ul className="mt-4 space-y-3">
              {servicios.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="type-text-sm text-[var(--color-text-on-dark)] opacity-80 transition-opacity duration-300 hover:opacity-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="type-eyebrow uppercase text-[var(--color-text-on-dark)] opacity-75">
              Accesos
            </div>

            <ul className="mt-4 space-y-3">
              {accesos.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="type-text-sm text-[var(--color-text-on-dark)] opacity-80 transition-opacity duration-300 hover:opacity-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="type-eyebrow uppercase text-[var(--color-text-on-dark)] opacity-75">
              Contacto
            </div>

            <div className="mt-4 space-y-3">
              <a
                href="https://wa.me/51923880101?text=Hola!%20Me%20interesa%20mucho%20saber%20acerca%20de%20sus%20servicios%20de%20Contagesti.%0A%0AMi%20nombre%20es:%20..."
                target="_blank"
                rel="noopener noreferrer"
                data-astro-reload
                className="type-text-sm block text-[var(--color-text-on-dark)] opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                {phone}
              </a>

              <a
                href={`mailto:${email}`}
                className="type-text-sm block text-[var(--color-text-on-dark)] opacity-80 transition-opacity duration-300 hover:opacity-100"
              >
                {email}
              </a>

              <p className="type-text-sm text-[var(--color-text-on-dark)] opacity-80">
                {address}
              </p>
            </div>

            <div className="mt-5 rounded-[var(--radius-card-md)] border border-[var(--color-border-soft)] bg-[var(--color-brand-blue)] p-4">
              <div className="type-eyebrow uppercase text-[var(--color-text-on-dark)] opacity-70">
                Horario de atención
              </div>

              <p className="type-text-sm mt-2 text-[var(--color-text-on-dark)] opacity-85">
                Lunes a sábado
                <br />
                9:00 a. m. – 8:00 p. m.
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-[var(--color-border-soft)] py-4 md:flex-row md:items-center md:justify-between">
          <p className="type-note text-[var(--color-text-on-dark)] opacity-70">
            © {year} {brandName}. Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="/privacidad"
              className="type-note text-[var(--color-text-on-dark)] opacity-70 transition-opacity duration-300 hover:opacity-100"
            >
              Política de privacidad
            </a>

            <a
              href="/terminos"
              className="type-note text-[var(--color-text-on-dark)] opacity-70 transition-opacity duration-300 hover:opacity-100"
            >
              Términos y condiciones
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
