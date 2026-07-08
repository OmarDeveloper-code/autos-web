import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import AutoCard from '../components/AutoCard'
import AdminPanel from '../components/AdminPanel'

import api from '../services/api'

function Admin() {
  const [autos, setAutos] = useState([])

  const cargarAutos = async () => {
    const res = await api.get('/autos')
    setAutos(res.data)
  }

  useEffect(() => {
    cargarAutos()
  }, [])

  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar />

      <div className='max-w-7xl mx-auto px-6 pt-32 pb-16'>
        <h1 className='text-5xl font-bold text-slate-800 mb-10'>
          Panel Administrador
        </h1>

        <AdminPanel recargar={cargarAutos} />

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {autos.map((auto) => (
            <AutoCard
              key={auto.id}
              auto={auto}
              recargar={cargarAutos}
              admin={true}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Admin