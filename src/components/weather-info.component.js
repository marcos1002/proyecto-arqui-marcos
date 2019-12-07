import React from 'react';

const Weather = props => (
  <div className="weather-info center">
    <div className="city-name">{`${props.cityName}, ${props.country}`}
      <img className="flag" src={`http://openweathermap.org/images/flags/${props.country.toLowerCase()}.png`} alt="flag" /></div>
    <div className="description">{props.description}</div>
    <div className="icon"><img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="icon" /></div>
    <div className="temp">{props.temp}°</div>
    <div className="text">Humedad: {props.humidity}%</div>
    <div className="text">Viento: {props.windSpeed} m/s</div>
  </div>
)

export default Weather;