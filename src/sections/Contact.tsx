import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { business, hours } from '../data/business'
import { Section } from '../components/Section'

type FormState = { nom: string; tel: string; email: string; message: string }
type Status = 'idle' | 'sending' | 'sent' | 'error'

export function Contact() {
  const [form, setForm] = useState<FormState>({ nom: '', tel: '', email: '', message: '' })
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({})

  function update<K extends keyof FormState>(k: K, v: string) {
    setForm((f) => ({ ...f, [k]: v }))
    if (errors[k]) setErrors((e) => ({ ...e, [k]: undefined }))
  }

  function validate(): boolean {
    const next: Partial<Record<keyof FormState, string>> = {}
    if (!form.nom.trim()) next.nom = 'Merci de renseigner votre nom.'
    if (!form.tel.trim() || !/^[\d\s.+()-]{8,}$/.test(form.tel.trim()))
      next.tel = 'Un numéro pour vous rappeler.'
    if (form.email && !/.+@.+\..+/.test(form.email))
      next.email = "L'email ne semble pas valide."
    if (!form.message.trim() || form.message.trim().length < 5)
      next.message = 'Dites-nous en un peu plus.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    setTimeout(() => setStatus('sent'), 900)
  }

  return (
    <Section id="contact" tone="farine" eyebrow="Infos & contact" index="08 — On vous attend">
      <div className="mx-auto max-w-[1400px] px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Colonne infos */}
          <div className="lg:col-span-5">
            <h2 className="font-display text-[clamp(2.4rem,6vw,5.4rem)] leading-[0.92] text-encre">
              On vous{' '}
              <span className="font-serif italic font-normal text-tomate">attend</span>
              .
            </h2>

            <a
              href={business.phoneHref}
              className="mt-10 block group"
              aria-label={`Téléphone — ${business.phone}`}
            >
              <span className="block font-mono text-[10px] uppercase tracking-[0.28em] text-encre/55">
                Commander · à emporter
              </span>
              <span className="mt-2 block font-display text-[clamp(2.4rem,7vw,5.2rem)] leading-none text-tomate transition-colors group-hover:text-tomate-deep">
                {business.phone}
              </span>
              <span className="mt-3 inline-block font-mono text-[10px] uppercase tracking-[0.22em] text-encre/65">
                ↗ cliquer pour appeler
              </span>
            </a>

            <div className="mt-12 grid grid-cols-1 gap-y-8 sm:grid-cols-2">
              <InfoBlock label="Adresse">
                <p>{business.address.street}</p>
                <p>
                  {business.address.postalCode} {business.address.city}
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-encre/55 mt-2">
                  {business.address.region}
                </p>
              </InfoBlock>

              <InfoBlock label="Service">
                <p>À emporter</p>
                <p>Du mardi au dimanche</p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-tomate mt-2">
                  17h30 – 22h00
                </p>
              </InfoBlock>

              <InfoBlock label="Budget">
                <p>{business.budget}</p>
              </InfoBlock>

              <InfoBlock label="Facebook">
                <p>
                  <a
                    href={business.facebook.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline decoration-tomate decoration-2 underline-offset-4 hover:text-tomate"
                  >
                    {business.facebook.name}
                  </a>
                </p>
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-encre/55 mt-2">
                  {business.facebook.followers} fans
                </p>
              </InfoBlock>
            </div>

            {/* Horaires */}
            <div className="mt-12 border-t border-encre/15 pt-8">
              <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-encre/55">
                Horaires
              </h3>
              <p className="mt-3 max-w-[40ch] text-sm text-encre/70">{hours.note}</p>
              <ul className="mt-6 divide-y divide-encre/10">
                {hours.days.map((d) => (
                  <li
                    key={d.day}
                    className="flex items-center justify-between py-3 font-mono text-[12px] uppercase tracking-[0.16em] text-encre/80"
                  >
                    <span>{d.day}</span>
                    <span className="text-encre/60">{d.value}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 font-mono text-[10px] uppercase tracking-[0.22em] text-tomate">
                ✦ fermé le lundi
              </p>
            </div>
          </div>

          {/* Colonne plan + formulaire */}
          <div className="lg:col-span-7">
            {/* Plan — vraie carte Google Maps */}
            <div className="relative overflow-hidden rounded-sm bg-encre">
              <div className="aspect-[16/10] w-full">
                <iframe
                  src="https://maps.google.com/maps?q=3+Grande+Rue,+25390+Orchamps-Vennes&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  className="block h-full w-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Plan — Le P'tit Crousti, 3 Grande Rue, Orchamps-Vennes"
                />
              </div>
              <div className="pointer-events-none absolute inset-x-0 top-0 z-10 flex items-start justify-between p-5">
                <span className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-tomate px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-farine shadow-[0_4px_14px_-4px_rgba(58,30,20,0.45)]">
                  ✦ 3 Grande Rue · Orchamps-Vennes
                </span>
                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=3+Grande+Rue,+25390+Orchamps-Vennes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pointer-events-auto inline-flex items-center gap-1.5 rounded-full bg-farine px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-encre transition-colors hover:bg-encre hover:text-farine"
                >
                  Itinéraire ↗
                </a>
              </div>
            </div>

            {/* Formulaire */}
            <form
              onSubmit={onSubmit}
              className="mt-10 grid grid-cols-1 gap-5 rounded-sm border border-encre/15 bg-farine-soft p-6 md:p-8"
              noValidate
            >
              <div className="flex items-baseline justify-between">
                <h3 className="font-display text-2xl text-encre md:text-3xl">
                  Une grosse commande ? Une soirée ?
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-encre/55">
                  Message
                </span>
              </div>
              <p className="text-sm text-encre/70">
                Écrivez-nous. Pour les commandes du soir, appeler reste le plus rapide.
              </p>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <Field
                  label="Nom"
                  value={form.nom}
                  onChange={(v) => update('nom', v)}
                  error={errors.nom}
                  autoComplete="name"
                />
                <Field
                  label="Téléphone"
                  value={form.tel}
                  onChange={(v) => update('tel', v)}
                  error={errors.tel}
                  type="tel"
                  autoComplete="tel"
                />
              </div>
              <Field
                label="Email (optionnel)"
                value={form.email}
                onChange={(v) => update('email', v)}
                error={errors.email}
                type="email"
                autoComplete="email"
              />
              <Field
                label="Votre message"
                value={form.message}
                onChange={(v) => update('message', v)}
                error={errors.message}
                multiline
              />

              <div className="flex items-center justify-between pt-2">
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-encre/55">
                  réponse sous 24h
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'sent'}
                  className="inline-flex items-center gap-2 rounded-full bg-encre px-6 py-3 font-mono text-[11px] uppercase tracking-[0.22em] text-farine transition-colors hover:bg-tomate disabled:opacity-60"
                >
                  {status === 'sending' ? 'envoi…' : status === 'sent' ? 'envoyé ✓' : 'envoyer →'}
                </button>
              </div>

              <AnimatePresence>
                {status === 'sent' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-2 rounded-sm bg-basilic/15 px-4 py-3 text-sm text-basilic-deep"
                  >
                    Merci ! On revient vers vous rapidement. Pour une commande tout de suite,
                    appelez le{' '}
                    <a href={business.phoneHref} className="font-medium underline">
                      {business.phone}
                    </a>
                    .
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>
      </div>
    </Section>
  )
}

function InfoBlock({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="font-mono text-[10px] uppercase tracking-[0.28em] text-encre/55">
        {label}
      </h3>
      <div className="mt-3 font-serif text-lg leading-snug text-encre">{children}</div>
    </div>
  )
}

function Field({
  label,
  value,
  onChange,
  error,
  type = 'text',
  multiline = false,
  autoComplete,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  error?: string
  type?: string
  multiline?: boolean
  autoComplete?: string
}) {
  const id = label.toLowerCase().replace(/\s/g, '-')
  const base =
    'w-full bg-transparent border-b border-encre/25 pb-2 pt-4 text-encre placeholder:text-encre/40 focus:border-tomate focus:outline-none transition-colors'
  return (
    <label htmlFor={id} className="block">
      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-encre/55">
        {label}
      </span>
      {multiline ? (
        <textarea
          id={id}
          value={value}
          rows={4}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} resize-none`}
          aria-invalid={!!error}
        />
      ) : (
        <input
          id={id}
          type={type}
          value={value}
          autoComplete={autoComplete}
          onChange={(e) => onChange(e.target.value)}
          className={base}
          aria-invalid={!!error}
        />
      )}
      {error && (
        <span className="mt-1 block text-xs text-tomate">{error}</span>
      )}
    </label>
  )
}

