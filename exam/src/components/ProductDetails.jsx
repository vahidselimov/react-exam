function ProductDetails({ card, onBack }) {
  if (!card) return null

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-14">
      <button
        onClick={onBack}
        className="mb-8 inline-flex items-center gap-2 text-sm text-neutral-500 hover:text-black transition cursor-pointer font-medium"
      >
        ← Volver
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
        <div className="w-full aspect-square overflow-hidden rounded-2xl bg-neutral-100">
          <img
            src={card.image}
            alt={card.name}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col pt-2 md:pt-4">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-neutral-900">
            {card.name}
          </h1>
          <p className="text-base md:text-lg text-neutral-500 mt-3 font-normal">
            {card.title}
          </p>
          <p className="text-xl md:text-2xl font-bold text-neutral-900 mt-6">
            {card.price}
          </p>
          <p className="text-sm md:text-base text-neutral-500 leading-relaxed mt-4 max-w-md">
            {card.detailDescription}
          </p>
          <button className="mt-8 w-full max-w-md bg-black text-white text-sm font-medium py-3.5 px-6 rounded-xl hover:bg-neutral-800 transition cursor-pointer text-center">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

