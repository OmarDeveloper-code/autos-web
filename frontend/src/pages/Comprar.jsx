import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Navbar from '../components/Navbar'

import api from '../services/api'

function Comprar() {
  const { id } = useParams()

  const [auto, setAuto] = useState(null)

  const [form, setForm] = useState({
    nombres: '',
    apellidos: '',
    telefono: '',
    correo: '',
    metodoPago: '',
  })

  const [comprado, setComprado] = useState(false)

  const cargarAuto = async () => {
    const res = await api.get(`/autos/${id}`)
    setAuto(res.data)
  }

  useEffect(() => {
    cargarAuto()
  }, [])

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const comprar = async (e) => {
  e.preventDefault()

  try {
    await api.post('/compras', {
      ...form,
      autoId: auto.id,
    })

    setComprado(true)
  } catch (error) {
    console.log(error)

    alert('Error al realizar compra')
  }
}

  if (!auto) return null

  if (comprado) {
    return (
      <div className='min-h-screen bg-slate-100 flex items-center justify-center p-6'>
        <div className='bg-white p-12 rounded-3xl shadow-xl max-w-2xl w-full'>
          <h1 className='text-5xl font-bold text-green-600'>
            ¡Compra Exitosa!
          </h1>

          <p className='mt-6 text-xl text-slate-600'>
            Gracias por tu compra.
          </p>

          <div className='mt-10 space-y-4 text-lg'>
            <p>
              <strong>Cliente:</strong>{' '}
              {form.nombres} {form.apellidos}
            </p>

            <p>
              <strong>Vehículo:</strong> {auto.nombre}
            </p>

            <p>
              <strong>Método de pago:</strong>{' '}
              {form.metodoPago}
            </p>

            <p>
              <strong>Total:</strong> $
              {Number(auto.precio).toLocaleString('es-CO')}
            </p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar />

      <div className='max-w-5xl mx-auto px-6 pt-32 pb-20'>
        <div className='bg-white p-10 rounded-3xl shadow-xl'>
          <h1 className='text-5xl font-bold text-slate-800 mb-10'>
            Comprar Vehículo
          </h1>

          <div className='grid lg:grid-cols-2 gap-10'>
            <div>
              <img
                src={auto.imagen}
                alt={auto.nombre}
                className='rounded-3xl'
              />

              <h2 className='text-4xl font-bold mt-6'>
                {auto.nombre}
              </h2>

              <p className='mt-4 text-slate-600'>
                {auto.descripcion}
              </p>

              <h3 className='mt-6 text-4xl font-bold text-blue-600'>
                $
                {Number(auto.precio).toLocaleString('es-CO')}
              </h3>
            </div>

            <form
              onSubmit={comprar}
              className='space-y-5'
            >
              <input
                required
                type='text'
                name='nombres'
                placeholder='Nombres'
                value={form.nombres}
                onChange={handleChange}
                className='w-full p-4 border rounded-2xl'
              />

              <input
                required
                type='text'
                name='apellidos'
                placeholder='Apellidos'
                value={form.apellidos}
                onChange={handleChange}
                className='w-full p-4 border rounded-2xl'
              />

              <input
                required
                type='tel'
                pattern='[0-9]+'
                name='telefono'
                placeholder='Número de teléfono'
                value={form.telefono}
                onChange={handleChange}
                className='w-full p-4 border rounded-2xl'
              />

              <input
                required
                type='email'
                name='correo'
                placeholder='Correo'
                value={form.correo}
                onChange={handleChange}
                className='w-full p-4 border rounded-2xl'
              />

              <select
                required
                name='metodoPago'
                value={form.metodoPago}
                onChange={handleChange}
                className='w-full p-4 border rounded-2xl'
              >
                <option value=''>
                  Selecciona método de pago
                </option>

                <option>Visa</option>
                <option>Mastercard</option>
                <option>BBVA</option>
                <option>Bancolombia</option>
              </select>

              <button className='w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl text-xl transition'>
                Confirmar Compra
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comprar