import React from 'react'
import { useState } from 'react'

export const WeatherCard = ({ weather, temperature, minTemperature, maxTemperature }) => {
    // console.log(weather)
    
    const [isCelsius, setIsCelsius] = useState(true)

    const handleChangeTemperature = () => setIsCelsius(!isCelsius)
    const weatherDescription = (weather?.weather[0].description).charAt(0).toUpperCase() + (weather?.weather[0].description).slice(1)
    // console.log(weather)

    return (
        <article className='main__container'>  
            <header>
                <h2 className='country__name'>{weather?.name}, {weather?.sys.country}</h2>
                <button className='temperature__change' onClick={handleChangeTemperature}>{isCelsius ? '°F' : '°C'}</button>
            </header>  
            <section className='weather__temperature'>
                <div className='icon__container'>
                    <img src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@4x.png`} alt="" />
                    <h3>"{weatherDescription}"</h3>
                </div>
                <div className='temperature__container'>
                    <div className='main__temperature'>
                        <h2 className='temperature'>
                            {
                                isCelsius   
                                    ? `${temperature?.celsius} `
                                    : `${temperature?.farenheit} `
                            }
                        </h2>
                        <p>{isCelsius ? '°C' : '°F'}</p>
                    </div>
                    <div className='minmax'>
                        <p> <span>MIN </span>
                            {
                                isCelsius
                                    ? `${minTemperature?.minCelsius}`
                                    : `${minTemperature?.minFarenheit}`
                            } /
                        </p>  
                        <p> <span>MAX </span>
                            {
                                isCelsius
                                    ? `${maxTemperature?.maxCelsius} °C`
                                    : `${maxTemperature?.maxFarenheit} °F`
                            } 
                        </p>
                    </div>
                </div>
            </section>
            <ul>
                <li><span className='name__tag'>Wind<br />Speed: </span><span className='info__tag'>{weather?.wind.speed}m/s</span></li>
                <li><span className='name__tag'>Clouds: </span><span className='info__tag'>{weather?.clouds.all}%</span></li>
                <li><span className='name__tag'>Pressure: </span><span className='info__tag'>{weather?.main.pressure}hPa</span></li>
                <li><span className='name__tag'>Humidity: </span><span className='info__tag'>{weather?.main.humidity}%</span></li>
            </ul>
            
        </article>
    )
}
