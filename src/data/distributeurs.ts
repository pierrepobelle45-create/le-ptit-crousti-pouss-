export type Distributeur = {
  id: 'orchamps' | 'fuans'
  ville: string
  postal: string
  adresse: string
  reperage: string
  horaires: string
}

export const distributeurs: Distributeur[] = [
  {
    id: 'orchamps',
    ville: 'Orchamps-Vennes',
    postal: '25390',
    adresse: 'adresse précise à confirmer',
    reperage: 'à côté de la pizzeria',
    horaires: '24/7 — à confirmer',
  },
  {
    id: 'fuans',
    ville: 'Fuans',
    postal: '25390',
    adresse: 'adresse précise à confirmer',
    reperage: 'au village',
    horaires: '24/7 — à confirmer',
  },
]

export const distributeursIntro =
  "Même quand la pizzeria est fermée, la pizza reste là. Deux distributeurs en libre-service, 24h/24, à Orchamps-Vennes et à Fuans."

export const distributeursHowItWorks = [
  { step: '01', title: 'Choisir', body: 'On sélectionne sa pizza sur l’écran tactile.' },
  { step: '02', title: 'Payer', body: 'Carte bancaire, sans contact, en quelques secondes.' },
  { step: '03', title: 'Cuire', body: 'La machine fait chauffer la pizza, prête en ~3 minutes.' },
  { step: '04', title: 'Déguster', body: 'Sortie chaude, croustillante, dans sa boîte. À emporter.' },
]
