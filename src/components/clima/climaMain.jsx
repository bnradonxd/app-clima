function climaMain({clima}) {

return(
        
        <div className='card-clima'>
        <h2>{clima.name}</h2>
        <h6>{clima.sys.country}</h6>
            <img 
              src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} 
              alt="icono"
            />
            <h6 style={{ textTransform: "capitalize" }}>
            {clima.weather[0].description} 
      
      </h6>
      <br></br>
      <p>🌡 Temperatura Actual : {clima.main.temp} °C</p>
       <p>🧊 Sensación Térmica : {clima.main.feels_like} °C</p>

      </div>
);
}

export default climaMain;
