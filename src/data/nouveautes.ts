export type Nouveaute = {
  name: string
  tagline: string
  note?: string
}

export const nouveautes: Nouveaute[] = [
  {
    name: "Pizza au Mont d'Or",
    tagline: "Le fromage du Haut-Doubs qui coule, fondu sur la pâte croustillante.",
    note: 'de saison',
  },
  {
    name: 'Pizza poulet pesto',
    tagline: 'Poulet rôti, pesto vert basilic, ce qu’il faut de fraîcheur.',
  },
]

export const nouveautesNote =
  'Ces pizzas tournent. Demandez la nouveauté du moment au téléphone.'
