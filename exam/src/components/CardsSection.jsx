import Card from './Card'

function CardsSection({ cards, onCardClick }) {
  return (
    <section className="mt-14 mb-20">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-8">
        Encabezado de sección
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {cards.map((card) => (
          <Card key={card.id} card={card} onClick={onCardClick} />
        ))}
      </div>
    </section>
  )
}

export default CardsSection

