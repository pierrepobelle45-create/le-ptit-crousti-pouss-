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
  // Assemblé en JS au moment du clic (jamais rendu dans le HTML) pour limiter le scraping.
  contactEmail: ['gauthier.benjamin', 'sfr.fr'],
  service: 'à emporter — du mardi au dimanche, 17h30 à 22h00',
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
  note: 'Service du soir, du mardi au dimanche. Fermé le lundi.',
  days: [
    { day: 'Lundi', value: 'fermé' },
    { day: 'Mardi', value: '17h30 – 22h00' },
    { day: 'Mercredi', value: '17h30 – 22h00' },
    { day: 'Jeudi', value: '17h30 – 22h00' },
    { day: 'Vendredi', value: '17h30 – 22h00' },
    { day: 'Samedi', value: '17h30 – 22h00' },
    { day: 'Dimanche', value: '17h30 – 22h00' },
  ],
} as const
