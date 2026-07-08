import { useState } from 'react'

import toast from 'react-hot-toast'

import api from '../services/api'

function EditModal({
  auto,
  cerrar,
  recargar,
}) {
  const [form, setForm] = useState({
    nombre: auto.nombre,
    modelo: auto.modelo,
    precio: auto.precio,
    color: auto.color,
    capacidad: auto.capacidad,
    imagen: auto.imagen,
    descripcion: auto.descripcion,
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const actualizar = async (e) => {
    e.preventDefault()

    try {
      await api.put(`/autos/${auto.id}`, form)

      toast.success('Vehículo actualizado')

      cerrar()

      recargar()
    } catch (error) {
      toast.error('Error al actualizar')
    }
  }

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-6'>
      <div className='bg-white w-full max-w-3xl rounded-3xl p-8 shadow-2xl overflow-y-auto max-h-[90vh]'>
        <div className='flex justify-between items-center mb-8'>
          <h2 className='text-4xl font-bold text-slate-800'>
            Editar Vehículo
          </h2>

          <button
            onClick={cerrar}
            className='text-2xl'
          >
            ✕
          </button>
        </div>

        <form
          onSubmit={actualizar}
          className='grid md:grid-cols-2 gap-5'
        >
          <input
            required
            type='text'
            name='nombre'
            placeholder='Nombre'
            value={form.nombre}
            onChange={handleChange}
            className='p-4 border rounded-2xl'
          />

          <input
            required
            type='text'
            name='modelo'
            placeholder='Modelo'
            value={form.modelo}
            onChange={handleChange}
            className='p-4 border rounded-2xl'
          />

          <input
            required
            type='number'
            name='precio'
            placeholder='Precio'
            value={form.precio}
            onChange={handleChange}
            className='p-4 border rounded-2xl'
          />

          <input
            required
            type='text'
            name='color'
            placeholder='Color'
            value={form.color}
            onChange={handleChange}
            className='p-4 border rounded-2xl'
          />

          <input
            required
            type='number'
            name='capacidad'
            placeholder='Capacidad'
            value={form.capacidad}
            onChange={handleChange}
            className='p-4 border rounded-2xl'
          />

          <input
            required
            type='text'
            name='imagen'
            placeholder='Imagen URL'
            value={form.imagen}
            onChange={handleChange}
            className='p-4 border rounded-2xl'
          />

          <textarea
            required
            name='descripcion'
            placeholder='Descripción'
            value={form.descripcion}
            onChange={handleChange}
            className='md:col-span-2 p-4 border rounded-2xl'
          />

          <button className='md:col-span-2 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl text-xl transition'>
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  )
}

export default EditModal