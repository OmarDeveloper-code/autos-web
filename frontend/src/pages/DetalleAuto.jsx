import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'


import Navbar from '../components/Navbar'

import api from '../services/api'

function DetalleAuto() {
  const { id } = useParams()

  const [auto, setAuto] = useState(null)

  const cargarAuto = async () => {
    const res = await api.get(`/autos/${id}`)
    setAuto(res.data)
  }

  useEffect(() => {
    cargarAuto()
  }, [])

  if (!auto) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        Cargando...
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar />

      <div className='max-w-7xl mx-auto px-6 pt-32 pb-20'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <img
            src={auto.imagen}
            alt={auto.nombre}
            className='w-full rounded-3xl shadow-2xl'
          />

          <div>
            <h1 className='text-6xl font-bold text-slate-800'>
              {auto.nombre}
            </h1>

            <div className='mt-8 space-y-4 text-xl text-slate-600'>
              <p>
                <strong>Modelo:</strong> {auto.modelo}
              </p>

              <p>
                <strong>Color:</strong> {auto.color}
              </p>

              <p>
                <strong>Capacidad:</strong>{' '}
                {auto.capacidad} personas
              </p>
            </div>

            <p className='mt-8 text-slate-600 leading-relaxed text-lg'>
              {auto.descripcion}
            </p>

            <h2 className='mt-10 text-5xl font-bold text-blue-600'>
              $
              {Number(auto.precio).toLocaleString('es-CO')}
            </h2>

            <Link to={`/comprar/${auto.id}`}>
              <button className='mt-10 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl transition'>
                Comprar Vehículo
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetalleAuto