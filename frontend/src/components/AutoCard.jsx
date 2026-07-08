import { motion } from 'framer-motion'

import { FaTrash, FaEdit } from 'react-icons/fa'

import { Link } from 'react-router-dom'

import toast from 'react-hot-toast'

import api from '../services/api'

import { useState } from 'react'

import EditModal from './EditModal'

function AutoCard({ auto, recargar, admin }) {
  const [mostrarModal, setMostrarModal] =
    useState(false)

  const eliminar = async () => {
    const confirmar = window.confirm(
      `¿Deseas eliminar ${auto.nombre}?`
    )

    if (!confirmar) return

    try {
      await api.delete(`/autos/${auto.id}`)

      toast.success('Vehículo eliminado')

      recargar()
    } catch (error) {
      toast.error('Error al eliminar')
    }
  }

  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        className='bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition'
      >
        <div className='overflow-hidden'>
          <img
            src={auto.imagen}
            alt={auto.nombre}
            className='w-full h-60 object-cover hover:scale-110 transition duration-500'
          />
        </div>

        <div className='p-6'>
          <div className='flex justify-between items-start'>
            <h2 className='text-2xl font-bold text-slate-800'>
              {auto.nombre}
            </h2>

            {admin && (
              <div className='flex gap-3'>
                <button
                  onClick={() =>
                    setMostrarModal(true)
                  }
                  className='bg-blue-100 hover:bg-blue-200 p-3 rounded-xl text-blue-500 transition'
                >
                  <FaEdit />
                </button>

                <button
                  onClick={eliminar}
                  className='bg-red-100 hover:bg-red-200 p-3 rounded-xl text-red-500 transition'
                >
                  <FaTrash />
                </button>
              </div>
            )}
          </div>

          <div className='mt-4 space-y-2'>
            <p className='text-slate-600'>
              Modelo: {auto.modelo}
            </p>

            <p className='text-slate-600'>
              Color: {auto.color}
            </p>

            <p className='text-slate-600'>
              Capacidad: {auto.capacidad} personas
            </p>
          </div>

          <p className='mt-4 text-slate-500'>
            {auto.descripcion}
          </p>

          <div className='mt-6 flex justify-between items-center'>
            <span className='text-3xl font-bold text-blue-600'>
              $
              {Number(auto.precio).toLocaleString(
                'es-CO'
              )}
            </span>

            <Link to={`/detalle/${auto.id}`}>
              <button className='bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-2xl transition'>
                Ver detalles
              </button>
            </Link>
          </div>
        </div>
      </motion.div>

      {mostrarModal && (
        <EditModal
          auto={auto}
          cerrar={() =>
            setMostrarModal(false)
          }
          recargar={recargar}
        />
      )}
    </>
  )
}

export default AutoCard