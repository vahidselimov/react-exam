import Title from './title'
import heroImg from '../assets/hero.jpg'

function Hero() {
  return (
    <section className="pt-8 pb-6">
      <Title />
      <p className="mt-4 text-sm md:text-base text-neutral-600 max-w-2xl leading-relaxed">
        Subtítulo que establece el contexto, comparte más información sobre el sitio web o, en general, motiva a la gente a seguir navegando.
      </p>
      <div className="mt-6 mb-10">
        <button className="bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-neutral-800 transition">
          Botón
        </button>
      </div>
      <div className="w-full overflow-hidden rounded-xl">
        <img
          src={heroImg}
          alt="Hero"
          className="w-full h-[360px] md:h-[460px] object-cover"
        />
      </div>
    </section>
  )
}

export default Hero

