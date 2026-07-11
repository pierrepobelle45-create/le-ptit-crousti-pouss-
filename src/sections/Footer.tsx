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
              ✦ fermé le lundi
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

        <div
          id="mentions-legales"
          className="mt-10 scroll-mt-24 border-t border-farine/15 pt-6 font-mono text-[10px] leading-relaxed tracking-[0.06em] text-farine/45"
        >
          <h3 className="uppercase tracking-[0.28em] text-farine/55">Mentions légales</h3>
          <p className="mt-3 max-w-[92ch]">
            <span className="text-farine/70">Éditeur du site.</span> SARL Gauthier Le P'tit
            Crousti (nom commercial « Le P'tit Crousti »), société à responsabilité limitée au
            capital de 5 000 €, immatriculée au RCS de Besançon le 30 octobre 2017 sous le SIREN{' '}
            <span className="tracking-[0.12em]">832 965 610</span> — SIRET siège{' '}
            <span className="tracking-[0.12em]">832 965 610 00013</span>. TVA intracommunautaire :
            FR11 832 965 610. Code NAF/APE : 56.10C — Restauration de type rapide. Siège social :
            3 Grande Rue, 25390 Orchamps-Vennes, France. Tél.{' '}
            <a href={business.phoneHref} className="underline underline-offset-2 hover:text-farine">
              03 81 44 32 16
            </a>
            . Directeur de la publication : Benjamin Gauthier, gérant.
          </p>
          <p className="mt-2 max-w-[92ch]">
            <span className="text-farine/70">Hébergement.</span> Vercel Inc., 440 N Barranca Ave
            #4133, Covina, CA 91723, États-Unis — vercel.com.{' '}
            <span className="text-farine/70">Conception & réalisation.</span> Linéa (studio
            indépendant), pierrepobelle45@gmail.com.
          </p>
          <p className="mt-2 max-w-[92ch]">
            <span className="text-farine/70">Propriété intellectuelle.</span> L'ensemble des
            contenus (textes, photos, logo, mise en page) est la propriété exclusive de la SARL
            Gauthier Le P'tit Crousti. Toute reproduction sans accord écrit préalable est
            interdite (art. L.111-1 et suivants du Code de la propriété intellectuelle).
          </p>
          <p className="mt-2 max-w-[92ch]">
            <span className="text-farine/70">Données personnelles (RGPD).</span> Aucune donnée
            n'est collectée lors de la simple consultation du site. Les informations envoyées via
            le formulaire de contact servent uniquement à répondre à votre demande et ne sont
            transmises à aucun tiers. Vous pouvez exercer vos droits d'accès, de rectification ou
            de suppression en appelant le{' '}
            <a href={business.phoneHref} className="underline underline-offset-2 hover:text-farine">
              03 81 44 32 16
            </a>
            . Réclamation auprès de la CNIL : www.cnil.fr.
          </p>
          <p className="mt-2 max-w-[92ch]">
            <span className="text-farine/70">Cookies.</span> Ce site n'utilise pas de cookies de
            suivi ni d'outils d'analyse tiers. La carte Google Maps intégrée peut déposer des
            cookies de son propre chef (Google LLC — Politique de confidentialité Google).
          </p>
          <p className="mt-2 max-w-[92ch]">
            <span className="text-farine/70">Litiges.</span> Les présentes sont soumises au droit
            français. En cas de litige et à défaut d'accord amiable, les tribunaux de Besançon
            sont seuls compétents.
          </p>
        </div>
      </div>
    </footer>
  )
}
