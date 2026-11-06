function Header({ onHomeClick }) {
  return (
    <header className="w-full">
      <div className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <div
          onClick={onHomeClick}
          className="text-sm font-medium text-neutral-900 cursor-pointer"
        >
          Nombre del sitio
        </div>
        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-8 text-sm text-neutral-800">
            <li onClick={onHomeClick} className="cursor-pointer hover:text-black transition">Página</li>
            <li onClick={onHomeClick} className="cursor-pointer hover:text-black transition">Página</li>
            <li onClick={onHomeClick} className="cursor-pointer hover:text-black transition">Página</li>
          </ul>
          <button className="bg-black text-white text-sm font-medium px-4 py-2 rounded-lg hover:bg-neutral-800 transition cursor-pointer">
            Botón
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
