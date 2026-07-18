export type PizzaCategory = 'classiques' | 'regionales' | 'creme' | 'fromageres'

export type Pizza = {
  name: string
  price: number
  ingredients: string
  category: PizzaCategory
  base: 'tomate' | 'creme'
  highlight?: string[]
}

export const categories: Array<{ id: PizzaCategory | 'tout'; label: string; hint?: string }> = [
  { id: 'tout', label: 'Tout' },
  { id: 'classiques', label: 'Classiques', hint: 'base tomate' },
  { id: 'regionales', label: 'Régionales du Haut-Doubs', hint: 'le terroir' },
  { id: 'creme', label: 'Base crème' },
  { id: 'fromageres', label: 'Fromagères & Gourmandes' },
]

export const menu: Pizza[] = [
  // ─── LES CLASSIQUES ─────────────────────────────────────────────
  {
    name: 'Marguerita',
    price: 9.5,
    ingredients: 'sauce tomate, mozzarella, origan',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Jambon',
    price: 10.5,
    ingredients: 'sauce tomate, jambon, mozzarella, olives',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Romana',
    price: 11.5,
    ingredients: 'sauce tomate, champignons, jambon, mozzarella, olives',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Délice',
    price: 12,
    ingredients: 'sauce tomate, champignons, jambon, mozzarella, œuf',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Bolognaise',
    price: 12.5,
    ingredients: 'sauce tomate, viande hachée, oignons, mozzarella, champignons',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: '4 Saisons',
    price: 12.5,
    ingredients:
      'sauce tomate, champignons, jambon, oignons, poivrons, artichauts, mozzarella, olives',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Végétarienne',
    price: 12,
    ingredients:
      'sauce tomate, champignons frais, poivrons, oignons, artichauts, mozzarella, olives',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Capricieuse',
    price: 12,
    ingredients: 'sauce tomate, champignons, jambon, poivrons, câpres, mozzarella',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Espagnole',
    price: 12,
    ingredients: 'sauce tomate, poulet, chorizo, poivrons, oignons, mozzarella',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Exotique',
    price: 12,
    ingredients: 'sauce tomate, poulet, crème de curry, mozzarella, ananas',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Napoli',
    price: 11.5,
    ingredients: 'sauce tomate, mozzarella, anchois, câpres, champignons, olives',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Thon',
    price: 12,
    ingredients: 'sauce tomate, thon, oignons, mozzarella, origan',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Merguez',
    price: 12,
    ingredients: 'sauce tomate, mozzarella, chorizo, merguez',
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Jambon cru',
    price: 13.5,
    ingredients:
      "sauce tomate, mozzarella, jambon cru, roquette, parmesan, huile d'olive à l'ail",
    category: 'classiques',
    base: 'tomate',
  },
  {
    name: 'Calzone',
    price: 12,
    ingredients: 'sauce tomate, champignons, jambon, mozzarella, œuf',
    category: 'classiques',
    base: 'tomate',
  },

  // ─── RÉGIONALES DU HAUT-DOUBS ──────────────────────────────────
  {
    name: 'Royale',
    price: 12.5,
    ingredients:
      'sauce tomate, champignons frais, jambon fumé du Haut-Doubs, oignons, mozzarella',
    category: 'regionales',
    base: 'tomate',
    highlight: ['jambon fumé du Haut-Doubs'],
  },
  {
    name: 'Oricampienne',
    price: 13,
    ingredients:
      'sauce tomate, saucisse de Morteau, lardons, cancoillotte, champignons frais, mozzarella',
    category: 'regionales',
    base: 'tomate',
    highlight: ['saucisse de Morteau', 'cancoillotte'],
  },
  {
    name: 'Tartiflette',
    price: 13,
    ingredients:
      'sauce tomate, mozzarella, pomme de terre, lardons, oignons, reblochon',
    category: 'regionales',
    base: 'tomate',
    highlight: ['reblochon'],
  },
  {
    name: 'Morbiflette',
    price: 12.5,
    ingredients:
      'sauce tomate, mozzarella, pomme de terre, lardons, oignons, morbier',
    category: 'regionales',
    base: 'tomate',
    highlight: ['morbier'],
  },
  {
    name: 'Savoyarde',
    price: 12.5,
    ingredients:
      'sauce tomate, mozzarella, pomme de terre, lardons, oignons, raclette',
    category: 'regionales',
    base: 'tomate',
  },
  {
    name: 'Flammenküche',
    price: 11.5,
    ingredients: 'crème fraîche, oignons, lardons, mozzarella',
    category: 'regionales',
    base: 'creme',
  },

  // ─── BASE CRÈME ────────────────────────────────────────────────
  {
    name: 'Thon-moutarde',
    price: 12,
    ingredients: 'base crème, moutarde de Dijon, mozzarella, thon, oignons',
    category: 'creme',
    base: 'creme',
  },
  {
    name: 'Carbonara',
    price: 12.5,
    ingredients: 'base crème, lardons, jambon blanc, mozzarella, bacon, œuf',
    category: 'creme',
    base: 'creme',
  },

  // ─── FROMAGÈRES & GOURMANDES ───────────────────────────────────
  {
    name: 'Chèvre',
    price: 12.5,
    ingredients:
      'sauce tomate, lardons, mozzarella, chèvre, champignons, raisins secs',
    category: 'fromageres',
    base: 'tomate',
  },
  {
    name: 'Chèvre miel',
    price: 11,
    ingredients: 'sauce tomate, mozzarella, chèvre, miel',
    category: 'fromageres',
    base: 'tomate',
  },
  {
    name: '4 Fromages',
    price: 12.5,
    ingredients: 'sauce tomate, mozzarella, chèvre, gorgonzola, reblochon',
    category: 'fromageres',
    base: 'tomate',
    highlight: ['reblochon'],
  },
  {
    name: '2 Fromages',
    price: 12,
    ingredients: 'sauce tomate, mozzarella, gorgonzola, noix en morceaux',
    category: 'fromageres',
    base: 'tomate',
  },
  {
    name: 'Saumon fumé',
    price: 14,
    ingredients:
      'sauce tomate, mozzarella, câpres, saumon fumé, sauce roquette',
    category: 'fromageres',
    base: 'tomate',
  },
  {
    name: 'Pizza Burger',
    price: 13.5,
    ingredients:
      'sauce tomate, viande hachée, cornichons, cheddar, tomates cerises, bacon',
    category: 'fromageres',
    base: 'tomate',
  },
]

export const menuNote =
  '★ La plupart des pizzas sont aussi possibles avec de la crème fraîche en base alternative.'

export type Extra = { name: string; price: number }

export const desserts: Extra[] = [
  { name: 'Mousse au chocolat', price: 4.2 },
  { name: 'Tiramisu framboise / café', price: 4.2 },
  { name: 'Panna cotta', price: 4.2 },
]

export const salades: Extra[] = [
  { name: 'Salade verte', price: 4 },
  { name: 'Salade mêlée', price: 5.5 },
  { name: 'Salade de chèvre', price: 6 },
  { name: 'Salade de poulet', price: 7 },
]
