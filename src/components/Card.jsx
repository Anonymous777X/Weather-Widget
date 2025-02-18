import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLocationDot,faTemperatureThreeQuarters,faWind } from '@fortawesome/free-solid-svg-icons'

const WeatherCard = ({ weatherData }) => {

  return (
    <div className="weather-card">
      <h2 className="city-name">{weatherData.location.name || "london"}</h2>
      <div className="weather-info">
        <p className="weather-description"><FontAwesomeIcon icon={faLocationDot}/> {weatherData.location.region}</p>
        <p className="temperature"><FontAwesomeIcon icon={faTemperatureThreeQuarters} /> {weatherData.current.temp_c}°C</p>
        <p className="wind-speed"><FontAwesomeIcon icon={faWind} /> {10} m/s</p>
      </div>
      <div className="weather-icon">
      <p className="condition">{weatherData.current.condition.text}</p>
        <img className="icon"
          src={weatherData.current.condition.icon}
          alt="Weather Icon"
        />
      </div>
    </div>
  );
};

export default WeatherCard;
