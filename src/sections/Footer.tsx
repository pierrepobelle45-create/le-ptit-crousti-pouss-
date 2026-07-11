import { business, hours } from '../data/business'

export function Footer() {
  return (
    <footer className="relative bg-braise text-farine">
      <div className="grain pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1400px] px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.28em] text-croute-soft">
              ✦ Pizzeria artisanale
            </p>
            <img
              src="/logo.png"
              alt="Le P'tit Crousti"
              width={180}
              height={233}
              className="mt-6 h-32 w-auto brightness-0 invert opacity-95 md:h-40"
            />
            <p className="mt-6 max-w-[36ch] font-serif text-lg leading-snug text-farine/75">
              La pizza maison, façon tradition italienne, au cœur du Haut-Doubs.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-croute-soft">
              Contact
            </h3>
            <ul className="mt-5 space-y-3 text-farine/85">
              <li>
                <a href={business.phoneHref} className="block transition-colors hover:text-croute-soft">
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-farine/55">
                    téléphone
                  </span>
                  <span className="font-display text-2xl">{business.phone}</span>
                </a>
              </li>
              <li>
                <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-farine/55">
                  adresse
                </span>
                <span>{business.address.street}</span>
                <br />
                <span>
                  {business.address.postalCode} {business.address.city}
                </span>
              </li>
              <li>
                <a
                  href={business.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block transition-colors hover:text-croute-soft"
                >
                  <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-farine/55">
                    Facebook
                  </span>
                  <span>{business.facebook.name}</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-croute-soft">
              Horaires
            </h3>
            <ul className="mt-5 space-y-1.5 font-mono text-[11px] uppercase tracking-[0.16em] text-farine/75">
              {hours.days.map((d) => (
                <li key={d.day} className="flex justify-between">
                  <span>{d.day}</span>
                  <span className="text-farine/55">{d.value}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-tomate">
              ✦ à confirmer
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-farine/15 pt-6 font-mono text-[10px] uppercase tracking-[0.22em] text-farine/55 md:flex-row md:items-center">
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <span>© {new Date().getFullYear()} Le P'tit Crousti · Orchamps-Vennes</span>
            <a
              href="#mentions-legales"
              className="underline decoration-croute-soft underline-offset-4 hover:text-farine"
            >
              Mentions légales
            </a>
            <a
              href={business.google.reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-croute-soft underline-offset-4 hover:text-farine"
            >
              Avis Google ↗
            </a>
          </div>
          <span>
            site par <a href="mailto:pierrepobelle45@gmail.com" className="underline decoration-tomate underline-offset-4 hover:text-farine">Linéa</a> · le geste juste
          </span>
        </div>
      </div>
    </footer>
  )
}
