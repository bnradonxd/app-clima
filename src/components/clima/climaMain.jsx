import IconosAnimados from "../iconosAnimados.jsx";

function climaMain({clima}) {


return(
        
        <div className='card-clima'>
        <h2>{clima.name}</h2>
        
        <img 
        src={`https://flagsapi.com/${clima.sys.country.toUpperCase()}/flat/48.png`}
        alt="bandera"
        />
        
        <h6>{clima.sys.country}</h6>
        <IconosAnimados iconCode={clima.weather[0].icon}/>

            {/* <img 
              src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@4x.png`} 
              alt="icono"
            /> */}
            
            <h6 style={{ textTransform: "capitalize" }} >
            {clima.weather[0].description} 
      
      </h6>

     
      <p>🌡 Temperatura Actual : {clima.main.temp} °C</p>
       <p>🧊 Sensación Térmica : {clima.main.feels_like} °C</p>

      </div>
);
}

export default climaMain;
