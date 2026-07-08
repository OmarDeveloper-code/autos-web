import { useState } from 'react'

import { useNavigate } from 'react-router-dom'

import toast from 'react-hot-toast'

import api from '../services/api'

function Login() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    usuario: '',
    password: '',
  })

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const login = async (e) => {
    e.preventDefault()

    try {
      const res = await api.post(
        '/auth/login',
        form
      )

      localStorage.setItem(
        'token',
        res.data.token
      )

      toast.success('Bienvenido admin')

      navigate('/admin')
    } catch (error) {
      toast.error('Credenciales inválidas')
    }
  }

  return (
    <div className='min-h-screen flex items-center justify-center bg-slate-100 p-6'>
      <div className='bg-white p-10 rounded-3xl shadow-xl w-full max-w-md'>
        <h1 className='text-5xl font-bold text-center text-slate-800'>
          Admin Login
        </h1>

        <form
          onSubmit={login}
          className='mt-10 space-y-5'
        >
          <input
            required
            type='text'
            name='usuario'
            placeholder='Usuario'
            value={form.usuario}
            onChange={handleChange}
            className='w-full p-4 border rounded-2xl'
          />

          <input
            required
            type='password'
            name='password'
            placeholder='Contraseña'
            value={form.password}
            onChange={handleChange}
            className='w-full p-4 border rounded-2xl'
          />

          <button className='w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-2xl text-xl transition'>
            Ingresar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login