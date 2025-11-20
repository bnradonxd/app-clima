import { useState } from 'react'
import './App.css'
import SearchBar from "./components/searchbar";

import ClimaMain from "./components/clima/climaMain"
import ClimaTemp from "./components/clima/ClimaTemp"
import ClimaViento from "./components/clima/climaViento"

function App() {

  const [clima, setClima] = useState("")

  
  const busqueda = async (ciudad) =>{


    const APIKEY = import.meta.env.VITE_CLIMA_KEY;

    const URL_BASE = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIKEY}&units=metric&lang=es`

    console.log("URL:", URL_BASE)
    console.log("Buscando en...", ciudad)
    console.log(import.meta.env.VITE_CLIMA_KEY);

    

    try {
      const response = await fetch(`${URL_BASE}`)
      const data = await response.json()
      
      if (data.cod == 200) {
      setClima(data)
      console.log(data)

      } else  {
        console.error("Ciudad no encontrada")
        return
      }


    } catch (error) {
      console.error("Error cargando datos")
    }

    
  }


  return (
    <>
      <div>
      <h1 style={{ color: "orange" }}>
        App Clima
      </h1>
      <SearchBar onSearch={busqueda}/>  
      </div>

    {clima && (
      
    <div className="row">
      <div className="col-">
   <ClimaMain clima={clima} />
      </div>

      <div className="col-6">
      <ClimaTemp main={clima.main} />
      </div>
      
      <div className="col-6">
   <ClimaViento wind={clima.wind} />
        </div>

    </div>

    )
  }
    </>
  )
}

export default App
