import React, {useState} from "react";
import Weather from "./Weather.js";

function App() {
  const [city, setCity] = useState('')
  const [cityData, setcityData] = useState({})
  const API_KEY = process.env.REACT_APP_API_KEY
  let [btnClicked, setbtnClicked] = useState(false)
  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {setcityData(data); setbtnClicked(true);})
      .catch(() => alert('Неправильное имя города'))
    }

  return (
    <div className="App">
      <h1 className='text-center pt-5'>Узнать текущий прогноз погоды</h1>
      <div className='mainbord bg-light pt-2'>
      <label className='pl-1 pr-1'>Введите город: </label>
      <input className='mr-2' type='text' onChange={handleChange}/>
      <input type='button' value='Прогноз' onClick={handleSearch}/>
      {btnClicked && <Weather cityData={cityData}/>} 
      </div>
    </div>
  );
}

export default App;
