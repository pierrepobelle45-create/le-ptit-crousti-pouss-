import { useLenis } from './hooks/useLenis'
import { Header } from './components/Header'
import { PhoneFloat } from './components/PhoneFloat'
import { Hero } from './sections/Hero'
import { Maison } from './sections/Maison'
import { Fabrication } from './sections/Fabrication'
import { Carte } from './sections/Carte'
import { Terroir } from './sections/Terroir'
import { Nouveautes } from './sections/Nouveautes'
import { Distributeurs } from './sections/Distributeurs'
import { Galerie } from './sections/Galerie'
import { Avis } from './sections/Avis'
import { Contact } from './sections/Contact'
import { MentionsLegales } from './sections/MentionsLegales'
import { Footer } from './sections/Footer'

export default function App() {
  useLenis()

  return (
    <main className="relative bg-farine text-encre">
      <Header />
      <Hero />
      <Maison />
      <Fabrication />
      <Carte />
      <Terroir />
      <Nouveautes />
      <Distributeurs />
      <Galerie />
      <Avis />
      <Contact />
      <MentionsLegales />
      <Footer />
      <PhoneFloat />
    </main>
  )
}
