import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { WeatherCard } from './components/WeatherCard'
import Loading from './components/Loading'

function App() {

  const [latlon, setLatlon] = useState()
  const [weather, setWeather] = useState()
  const [temperature, setTemperature] = useState()
  const [maxTemperature, setMaxTemperature] = useState()
  const [minTemperature, setMinTemperature] = useState()

  const [background, setBackground] = useState()

  

  useEffect(() => {
    const success = pos => {
      // console.log(pos)
      const obj = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude
      }
      setLatlon(obj)
    }
    const error = () => {
      console.log(err)
    }
  
    navigator.geolocation.getCurrentPosition(success, error)
  }, [])

  useEffect(() => {
    if(latlon){
      const apikey = '6274ef9daa75819ae2d42847ea83321f'
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latlon.lat}&lon=${latlon.lon}&appid=${apikey}`
      axios.get(url)
        .then(res => {
          const celsius = (res.data.main.temp - 273.15).toFixed(1)
          const farenheit = (celsius * 9 / 5 + 32).toFixed(1)
          setTemperature({ celsius, farenheit })
          const maxCelsius = (res.data.main.temp_max - 273.15).toFixed(1)
          const maxFarenheit = (maxCelsius * 9 / 5 + 32).toFixed(1)
          setMaxTemperature({ maxCelsius, maxFarenheit })
          const minCelsius = (res.data.main.temp_min - 273.15).toFixed(1)
          const minFarenheit = (minCelsius * 9 / 5 + 32).toFixed(1)
          setMinTemperature({ minCelsius, minFarenheit })
          const backgroundNumber = res.data.weather[0].icon
          setBackground(backgroundNumber)
          setWeather(res.data)
        })
        .catch(err => console.log(err))
    }
  }, [latlon])

  const appStyle = {
    backgroundImage: `url('/backgrounds/${background}.jpg')`
  }
  console.log(background)

  return (
    <div style={appStyle} className="App">
      {
        weather 
          ? <WeatherCard 
              weather={weather} 
              temperature={temperature}
              maxTemperature={maxTemperature}
              minTemperature={minTemperature}
            />
          : <Loading />
      }
      
    </div>
  )
}

export default App
