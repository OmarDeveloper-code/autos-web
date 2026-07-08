import { useState } from 'react'
import toast from 'react-hot-toast'

import api from '../services/api'

function AdminPanel({ recargar }) {
  const [form, setForm] = useState({
    nombre: '',
    modelo: '',
    precio: '',
    color: '',
    capacidad: '',
    imagen: '',
    descripcion: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
  e.preventDefault()

  if (
    !form.nombre ||
    !form.modelo ||
    !form.precio ||
    !form.color ||
    !form.capacidad ||
    !form.imagen ||
    !form.descripcion
  ) {
    toast.error('Todos los campos son obligatorios')
    return
  }

  try {
    await api.post('/autos', form)

    toast.success('Vehículo agregado')

    setForm({
      nombre: '',
      modelo: '',
      precio: '',
      color: '',
      capacidad: '',
      imagen: '',
      descripcion: '',
    })

    recargar()
  } catch (error) {
    toast.error('Error al agregar vehículo')
  }
}

  return (
    <div className='bg-white p-8 rounded-3xl shadow-md mb-10'>
      <h2 className='text-3xl font-bold text-slate-800 mb-6'>
        Panel Administrador
      </h2>

      <form
        onSubmit={handleSubmit}
        className='grid md:grid-cols-2 gap-4'
      >
        <input
          required
          type='text'
          name='nombre'
          placeholder='Nombre'
          value={form.nombre}
          onChange={handleChange}
          className='p-4 border rounded-xl'
        />

        <input
          required
          type='text'
          name='modelo'
          placeholder='Modelo'
          value={form.modelo}
          onChange={handleChange}
          className='p-4 border rounded-xl'
        />

        <input
          required
          type='number'
          name='precio'
          placeholder='Precio'
          value={form.precio}
          onChange={handleChange}
          className='p-4 border rounded-xl'
        />

        <input
          required
          type='text'
          name='color'
          placeholder='Color'
          value={form.color}
          onChange={handleChange}
          className='p-4 border rounded-xl'
        />

        <input
          required
          type='number'
          name='capacidad'
          placeholder='Capacidad'
          value={form.capacidad}
          onChange={handleChange}
          className='p-4 border rounded-xl'
        />

        <input
          required
          type='text'
          name='imagen'
          placeholder='URL Imagen'
          value={form.imagen}
          onChange={handleChange}
          className='p-4 border rounded-xl'
        />

        <textarea
          required
          name='descripcion'
          placeholder='Descripción'
          value={form.descripcion}
          onChange={handleChange}
          className='md:col-span-2 p-4 border rounded-xl'
        />

        <button className='md:col-span-2 bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl text-lg font-semibold transition'>
          Agregar Vehículo
        </button>
      </form>
    </div>
  )
}

export default AdminPanel