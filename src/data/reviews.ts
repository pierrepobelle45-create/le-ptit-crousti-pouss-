export type Review = {
  author: string
  text: string
  rating: number
}

// Note réelle : 4,5/5 — 66 avis Google. Verbatims volontairement absents :
// laisser la note brute et la fiche Google parler, plutôt qu'inventer.
export const reviews: Review[] = []

export const reviewsSummary = {
  score: 4.5,
  count: 66,
  source: 'Google',
  fbFollowers: 1000,
}
