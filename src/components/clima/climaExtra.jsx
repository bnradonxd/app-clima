function mainclima({clima}) {


<div    className='card-clima'>
        <h2>{clima.name}</h2>
        <h6>País: {clima.sys.country}</h6>
            <img 
              src={`https://openweathermap.org/img/wn/${clima.weather[0].icon}@2x.png`} 
              alt="icono"
            />
            <h6 style={{ textTransform: "capitalize" }}>
      {clima.weather[0].description}
      </h6>
      </div>
    
}

export default mainclima;
