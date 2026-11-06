function Card({ card, onClick }) {
  return (
    <div
      onClick={() => onClick(card)}
      className="cursor-pointer flex flex-col"
    >
      <div className="w-full aspect-square overflow-hidden rounded-xl bg-neutral-100">
        <img
          src={card.image}
          alt={card.title}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="mt-4 text-base font-semibold text-neutral-900">
        {card.title}
      </h3>
      <p className="mt-1 text-sm text-neutral-500 leading-relaxed">
        {card.description}
      </p>
    </div>
  )
}

export default Card
