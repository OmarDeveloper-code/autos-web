import { useEffect, useState } from 'react'

import { useParams, Link } from 'react-router-dom'

import api from '../services/api'

function Detalle() {
  const { id } = useParams()

  const [auto, setAuto] = useState(null)

  useEffect(() => {
    obtenerAuto()
  }, [])

  const obtenerAuto = async () => {
    try {
      const res = await api.get(`/autos/${id}`)

      setAuto(res.data)
    } catch (error) {
      console.log(error)
    }
  }

  if (!auto) {
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <h1 className='text-4xl font-bold'>
          Cargando...
        </h1>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-slate-100 p-8'>
      <div className='max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2'>
        <img
          src={auto.imagen}
          alt={auto.nombre}
          className='w-full h-full object-cover'
        />

        <div className='p-10'>
          <h1 className='text-5xl font-bold text-slate-800'>
            {auto.nombre}
          </h1>

          <p className='mt-6 text-slate-600 text-lg'>
            {auto.descripcion}
          </p>

          <div className='mt-8 space-y-4 text-xl'>
            <p>
              <strong>Modelo:</strong>{' '}
              {auto.modelo}
            </p>

            <p>
              <strong>Color:</strong>{' '}
              {auto.color}
            </p>

            <p>
              <strong>Capacidad:</strong>{' '}
              {auto.capacidad} personas
            </p>
          </div>

          <h2 className='mt-10 text-5xl font-bold text-blue-600'>
            $
            {Number(auto.precio).toLocaleString(
              'es-CO'
            )}
          </h2>

          <Link to={`/comprar/${auto.id}`}>
            <button className='mt-10 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-2xl text-xl transition'>
              Comprar Vehículo
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Detalle