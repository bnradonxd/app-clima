import { useState } from 'react'
import './App.css'
import SearchBar from "./components/searchbar.jsx";
import ClimaMain from "./components/clima/ClimaMain.jsx"
import ClimaTemp from "./components/clima/climaTemp.jsx"
import ClimaViento from "./components/clima/climaViento.jsx"

function App() {

  const [clima, setClima] = useState(null)
  const [error, setError] = useState(null)

  
  const busqueda = async (ciudad) =>{
    
    if (!ciudad.trim()) {
      setError("Por favor, introduce el nombre de una ciudad.");
      setClima(null);
      return;
    }

    setClima(null);
    setError(null);

    const APIKEY = import.meta.env.VITE_CLIMA_KEY;

    const URL_BASE = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${APIKEY}&units=metric&lang=es`

    try {
      const response = await fetch(URL_BASE)
      const data = await response.json()
      
      if (data.cod == 200) {
        setClima(data)
      
      } else if (data.cod == 404 || data.cod == "404") {
        setError(`⚠️ Ciudad "${ciudad}" no encontrada. Por favor, revisa el nombre.`);
      
      } else {
        setError(`⚠️ Error ${data.cod}: ${data.message || 'Error desconocido de la API.'}`);
      }

    } catch (fetchError) {
      console.error("Error cargando datos:", fetchError)
      setError("❌ Ocurrió un error de red. Intenta de nuevo.");
    }
  }


  return (
    <div className="App">
      {}
      <h1>
        App Clima
      </h1>
      <SearchBar onSearch={busqueda}/>  
      
      <hr className='my-4'/>

      
      {error && (
        <div className="row justify-content-center">
            <div className="col-12">
                <p className="error-message">{error}</p>
            </div>
        </div>
      )}
      
      {!clima && !error && <p></p>}


      {clima && !error && (
        <div className="container mt-4"> 
          <div className="row justify-content-center">
            
            <div className="col-12 mb-4">
              <ClimaMain clima={clima} />
            </div>

            <div className="col-12 col-md-6 mb-4">
              <ClimaTemp main={clima.main} />
            </div>
            
            <div className="col-12 col-md-6 mb-4">
              <ClimaViento wind={clima.wind} />
            </div>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default App