import { business } from '../data/business'

export function MentionsLegales() {
  return (
    <section
      id="mentions-legales"
      className="relative bg-farine-soft text-encre"
      aria-label="Mentions légales"
    >
      <div className="mx-auto max-w-[900px] px-6 py-16 md:px-12 md:py-24">
        <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-encre/55">
          ✦ Mentions légales
        </span>
        <h2 className="mt-4 font-display text-3xl leading-tight text-encre md:text-4xl">
          Les infos <span className="font-serif italic font-normal text-tomate">obligatoires</span>.
        </h2>

        <div className="mt-10 grid grid-cols-1 gap-y-8 text-sm leading-relaxed text-encre/80 md:grid-cols-2 md:gap-x-10">
          <Block label="Éditeur du site">
            <p>
              <strong>{business.name}</strong>
              <br />
              {business.address.street}
              <br />
              {business.address.postalCode} {business.address.city}
            </p>
            <p className="mt-2">
              Téléphone :{' '}
              <a href={business.phoneHref} className="underline decoration-tomate underline-offset-4">
                {business.phone}
              </a>
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.18em] text-encre/50">
              SIREN / SIRET · statut juridique : à compléter
            </p>
          </Block>

          <Block label="Directeur de la publication">
            <p>À compléter par le gérant.</p>
          </Block>

          <Block label="Hébergement">
            <p>
              <strong>Vercel Inc.</strong>
              <br />
              340 S Lemon Ave #4133
              <br />
              Walnut, CA 91789 — États-Unis
            </p>
            <p className="mt-2">
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-tomate underline-offset-4"
              >
                vercel.com
              </a>
            </p>
          </Block>

          <Block label="Conception & réalisation">
            <p>
              <strong>Linéa</strong> — Studio web pour commerçants locaux.
            </p>
            <p className="mt-2">
              <a
                href="mailto:pierrepobelle45@gmail.com"
                className="underline decoration-tomate underline-offset-4"
              >
                pierrepobelle45@gmail.com
              </a>
            </p>
          </Block>

          <Block label="Propriété intellectuelle">
            <p>
              L'ensemble des contenus présents sur ce site (textes, images, logo, mise en page)
              est la propriété de {business.name}. Toute reproduction sans accord préalable est
              interdite.
            </p>
          </Block>

          <Block label="Données personnelles">
            <p>
              Aucune donnée personnelle n'est collectée lors de la simple consultation du site.
              Les informations envoyées via le formulaire de contact sont utilisées uniquement
              pour répondre à votre demande — jamais transmises à des tiers.
            </p>
            <p className="mt-2">
              Conformément au RGPD, vous pouvez demander la suppression de vos données à tout
              moment par téléphone au {business.phone}.
            </p>
          </Block>

          <Block label="Cookies">
            <p>
              Ce site n'utilise pas de cookies de traçage ni d'outils d'analyse tiers. Seule la
              carte Google Maps intégrée peut déposer des cookies de son propre chef — soumis à
              la politique de Google.
            </p>
          </Block>

          <Block label="Litiges">
            <p>
              Les présentes mentions sont soumises au droit français. Tout litige relève de la
              compétence exclusive des tribunaux de Besançon.
            </p>
          </Block>
        </div>

        <p className="mt-12 font-mono text-[10px] uppercase tracking-[0.22em] text-encre/45">
          Dernière mise à jour : juillet 2026
        </p>
      </div>
    </section>
  )
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-tomate">
        {label}
      </h3>
      <div className="mt-3">{children}</div>
    </div>
  )
}
