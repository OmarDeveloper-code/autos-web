import { useEffect, useState } from 'react'

import Navbar from '../components/Navbar'
import SearchBar from '../components/SearchBar'
import AutoCard from '../components/AutoCard'

import api from '../services/api'

function Catalogo() {
  const [autos, setAutos] = useState([])
  const [search, setSearch] = useState('')

  const cargarAutos = async () => {
    const res = await api.get('/autos')
    setAutos(res.data)
  }

  useEffect(() => {
    cargarAutos()
  }, [])

  const autosFiltrados = autos.filter((auto) =>
    auto.nombre.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='min-h-screen bg-slate-100'>
      <Navbar />

      <div className='max-w-7xl mx-auto px-6 pt-32 pb-16'>
        <h1 className='text-5xl font-bold text-slate-800 mb-10'>
          Catálogo de Vehículos
        </h1>

        <div className='mb-10'>
          <SearchBar
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {autosFiltrados.map((auto) => (
            <AutoCard key={auto.id} auto={auto} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Catalogo