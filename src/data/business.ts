export const business = {
  name: "Le P'tit Crousti",
  type: 'Pizzeria artisanale — pizzas à emporter',
  baseline: 'La pizza maison, façon tradition italienne, au cœur du Haut-Doubs',
  signature:
    "Le secret d'une bonne pizza réside avant tout dans la qualité de la pâte",
  address: {
    street: '3 Grande Rue',
    postalCode: '25390',
    city: 'Orchamps-Vennes',
    region: 'Haut-Doubs',
  },
  phone: '03 81 44 32 16',
  phoneHref: 'tel:+33381443216',
  service: "à emporter — ouverture en soirée, à partir de 17h30",
  budget: '10–20 € par personne',
  facebook: {
    name: "Le p'tit crousti",
    followers: '1 000+',
    url: 'https://www.facebook.com/Leptitcrousti/',
  },
  google: {
    reviewsUrl:
      'https://www.google.com/maps/search/?api=1&query=Le+P%27tit+Crousti+Orchamps-Vennes',
  },
  rating: {
    score: 4.5,
    count: 66,
    source: 'Google',
  },
  plus: [
    'Pizzas aussi proposées avec de la crème fraîche (base alternative)',
    'Pâte faite maison, façonnée selon la tradition italienne',
    '100 % mozzarella · légumes frais · produits de la Région',
  ],
} as const

export const hours = {
  note: 'Service du soir — ouverture à partir de 17h30. Horaires précis à confirmer.',
  days: [
    { day: 'Lundi', value: 'à confirmer' },
    { day: 'Mardi', value: '17h30 – fermeture (à confirmer)' },
    { day: 'Mercredi', value: '17h30 – fermeture (à confirmer)' },
    { day: 'Jeudi', value: '17h30 – fermeture (à confirmer)' },
    { day: 'Vendredi', value: '17h30 – fermeture (à confirmer)' },
    { day: 'Samedi', value: '17h30 – fermeture (à confirmer)' },
    { day: 'Dimanche', value: 'à confirmer' },
  ],
} as const
