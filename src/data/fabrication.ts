export type FabricationStep = {
  index: string
  title: string
  body: string
  cue: string
}

export const fabrication: FabricationStep[] = [
  {
    index: '01',
    title: 'La pâte maison',
    body: "Le secret d'une bonne pizza réside avant tout dans la qualité de la pâte. On la pétrit ici, on la laisse pousser, on la façonne à la main, façon tradition italienne.",
    cue: 'pétrir · pousser · façonner',
  },
  {
    index: '02',
    title: 'Les ingrédients frais',
    body: "100 % mozzarella, légumes frais, produits de la Région. On choisit ce qu'on mange — pas un ingrédient n'arrive ici par hasard.",
    cue: 'mozzarella · légumes · région',
  },
  {
    index: '03',
    title: "Le four chaud",
    body: "Le four monte. La pâte gonfle, la croûte dore, le fromage file. Trois minutes, le temps qu'il faut.",
    cue: 'chauffer · dorer · filer',
  },
  {
    index: '04',
    title: 'Croustillant',
    body: "Sortie du four, on plie, on ferme la boîte chaude. Vous l'ouvrez chez vous : ça croustille.",
    cue: 'plier · emporter · croquer',
  },
]
