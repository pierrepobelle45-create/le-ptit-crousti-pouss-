export type Distributeur = {
  id: 'orchamps' | 'fuans'
  ville: string
  postal: string
  adresse: string
  reperage: string
  horaires: string
  image: string
}

export const distributeurs: Distributeur[] = [
  {
    id: 'orchamps',
    ville: 'Orchamps-Vennes',
    postal: '25390',
    adresse: '3 Grande Rue',
    reperage: 'devant la pizzeria',
    horaires: '24h/24 · 7j/7',
    image: '/photos/distributeur-orchamps-vennes.webp',
  },
  {
    id: 'fuans',
    ville: 'Fuans',
    postal: '25390',
    adresse: '2 Grande Rue — lieu-dit Le Bureau',
    reperage: 'au centre du village',
    horaires: '24h/24 · 7j/7',
    image: '/photos/distributeur-fuans.webp',
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
