import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className='min-h-screen bg-gradient-to-br from-slate-50 to-blue-100 flex items-center justify-center px-6 pt-24'>
      <div className='max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center'>
        <div>
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className='text-6xl lg:text-7xl font-bold text-slate-800 leading-tight'
          >
            Encuentra el Auto Perfecto Para Ti
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className='mt-8 text-xl text-slate-600 leading-relaxed'
          >
            Explora vehículos modernos, elegantes y de alto
            rendimiento con información detallada y una
            experiencia visual premium.
          </motion.p>

          <div className='flex flex-wrap gap-4 mt-10'>
            <Link to='/catalogo'>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl shadow-lg text-lg'
              >
                Ver catálogo
              </motion.button>
            </Link>

            <button className='bg-white text-slate-700 px-8 py-4 rounded-2xl shadow-md border'>
              Más información
            </button>
          </div>

          <div className='grid grid-cols-3 gap-6 mt-14'>
           
            

            
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='relative'
        >
          <img
            src='https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1400'
            alt='Auto'
            className='rounded-3xl shadow-2xl'
          />

          <div className='absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-xl'>
            <h3 className='text-2xl font-bold text-slate-800'>
              Premium Cars
            </h3>

            <p className='text-slate-600 mt-2'>
              Vehículos modernos y elegantes.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero