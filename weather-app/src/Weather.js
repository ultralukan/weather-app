function Weather(props){
    console.log(props.cityData)
     let main = props.cityData.main
     let wind = props.cityData.wind.speed
     let weath = props.cityData.weather[0]

    return(
        <div className='wdata text-center '>
            <p className='pt-4'>Температура: {main.temp}&deg;</p>
            <p>Скорость ветра: {wind} м/с</p>
            <img src={`https://openweathermap.org/img/w/${weath.icon}.png`}/>
        </div>
    )
}
export default Weather;