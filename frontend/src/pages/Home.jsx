import Navbar from '../components/Navbar'
import Hero from '../components/Hero'

function Home() {
  return (
    <div className='bg-slate-50 overflow-hidden'>
      <Navbar />

      <Hero />

      <section className='py-24 px-6'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-5xl font-bold text-slate-800'>
              ¿Por Qué Elegirnos?
            </h2>

            <p className='mt-6 text-xl text-slate-600'>
              Ofrecemos calidad, confianza y tecnología moderna.
            </p>
          </div>

          <div className='grid md:grid-cols-2 gap-8 max-w-5xl mx-auto'>
            <div className='bg-white p-10 rounded-3xl shadow-md'>
              <h3 className='text-3xl font-bold text-blue-600'>
                Calidad
              </h3>

              <p className='mt-4 text-slate-600 leading-relaxed'>
                Vehículos inspeccionados y garantizados para
                brindar la mejor experiencia.
              </p>
            </div>

            <div className='bg-white p-10 rounded-3xl shadow-md'>
              <h3 className='text-3xl font-bold text-blue-600'>
                Seguridad
              </h3>

              <p className='mt-4 text-slate-600 leading-relaxed'>
                Trabajamos con estándares modernos y soporte
                especializado.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home