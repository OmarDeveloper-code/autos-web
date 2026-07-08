function SearchBar({ value, onChange }) {
  return (
    <input
      type='text'
      placeholder='Buscar vehículo...'
      value={value}
      onChange={onChange}
      className='w-full p-4 rounded-2xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-400'
    />
  )
}

export default SearchBar