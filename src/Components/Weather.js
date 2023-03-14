import React, { useState } from 'react'
import './Weather.css'

const Weather = () => {
    const [city , setCity] = useState("")
    const [result , setResult] = useState("")
    const handleChange = (e) => {
        setCity(e.target.value)
    }

    const handleSubmission = () => {
       fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d885aa1d783fd13a55050afeef620fcb`)
       .then((response) => response.json())
       .then(data => {
         const kelvin = data.main.temp;
         const celsius = Math.round(kelvin - 273.15)
         setResult("Temparature at " + " " + city + "\n" + celsius + "°C")
         setCity("")
       })
       .catch(error => {
        setCity("")
        alert("check the city name once again")
       })
    }

    const handleReset = () => {
        setCity("")
        setResult("")
    }
  return (
    <div className='mainContainer'>
        <h1 style={{color : "white"}}>Weather Information</h1>
        <div className='resultContainer'>
          <input className='inputStyle' value={city} type="text" onChange={handleChange} /> <br/><br/>
          <button className='btn btn-success m-3' onClick={handleSubmission}>Get Temparature</button>
          <button className='btn btn-danger' onClick={handleReset}>Reset</button>

          <div>
          <h3 style={{color : "white"}}>{result}</h3>
          </div>
        </div>
        
    </div>
  )
}

export default Weather