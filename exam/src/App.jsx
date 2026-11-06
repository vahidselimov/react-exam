import { useState } from 'react'
import Header from './components/header'
import Hero from './components/Hero'
import CardsSection from './components/CardsSection'
import ProductDetails from './components/ProductDetails'
import { cardsData } from './data/cardsData'

function App() {
  const [selectedCard, setSelectedCard] = useState(null)

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans">
      <Header onHomeClick={() => setSelectedCard(null)} />
      {selectedCard ? (
        <ProductDetails
          card={selectedCard}
          onBack={() => setSelectedCard(null)}
        />
      ) : (
        <main className="max-w-6xl mx-auto px-6">
          <Hero />
          <CardsSection
            cards={cardsData}
            onCardClick={(card) => setSelectedCard(card)}
          />
        </main>
      )}
    </div>
  )
}

export default App
