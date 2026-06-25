export type TerroirProduit = {
  id: 'morteau' | 'cancoillotte' | 'morbier' | 'montdor' | 'reblochon' | 'jambonfume'
  name: string
  origin: string
  pairing: string
}

export const terroir: TerroirProduit[] = [
  {
    id: 'morteau',
    name: 'Saucisse de Morteau',
    origin: 'IGP · fumée au tuyé',
    pairing: 'Oricampienne',
  },
  {
    id: 'cancoillotte',
    name: 'Cancoillotte',
    origin: 'Franche-Comté · fondante',
    pairing: 'Oricampienne',
  },
  {
    id: 'morbier',
    name: 'Morbier',
    origin: 'AOP · ligne de cendre',
    pairing: 'Morbiflette',
  },
  {
    id: 'montdor',
    name: "Mont d'Or",
    origin: "AOP · le fromage d'hiver",
    pairing: "Pizza au Mont d'Or",
  },
  {
    id: 'reblochon',
    name: 'Reblochon',
    origin: 'AOP · pâte pressée',
    pairing: 'Tartiflette · 4 Fromages',
  },
  {
    id: 'jambonfume',
    name: 'Jambon fumé du Haut-Doubs',
    origin: 'séché · fumé bois résineux',
    pairing: 'Royale',
  },
]

export const terroirIntro =
  "Une pizza qui a le goût d'ici. On va chercher ce qui fait la cuisine du Haut-Doubs et on le met sur la pâte."
