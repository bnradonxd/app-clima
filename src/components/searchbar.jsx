import { useState } from 'react'
import '../App.css'

function SearchBar({ onSearch }) {
const [ciudad, setCiudad] = useState("")


const buscar = () =>{
  onSearch(ciudad)
  
}

  return (
    <>
      <div>
      <input
        type='text'
        placeholder='Escribe una ciudad'
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)} 
      />
      </div>
      <br/>
      <button type='submit' onClick={buscar}>Buscar</button>
    </>
  )
}

export default SearchBar
