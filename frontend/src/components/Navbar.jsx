import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50'>
      <div className='max-w-7xl mx-auto px-6 py-4 flex justify-between items-center'>
        <h1 className='text-2xl font-bold text-blue-600'>
          AutoPremium
        </h1>

        <div className='flex gap-6'>
          <Link
            to='/'
            className='text-slate-700 hover:text-blue-500 transition'
          >
            Inicio
          </Link>

          <Link
            to='/catalogo'
            className='text-slate-700 hover:text-blue-500 transition'
          >
            Catálogo
          </Link>

          <Link
            to='/admin'
            className='bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-xl transition'
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar