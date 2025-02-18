import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faLocationDot,faTemperatureThreeQuarters,faWind, faSun, faCloud,faCloudRain, faSnowman } from '@fortawesome/free-solid-svg-icons'

const WeatherCardDetailed = ({ weatherData }) => {

  const getWeatherIcon = () => {
    switch (weatherData.current.condition.code) {
      case '1000':
        return faSun;
      case '1003':
        return faCloud;
      case '1009':
        return faCloud;
      case '1063':
        return faCloudRain;
      case '1069':
        return faCloudRain;
      case '1072':
        return faCloudRain;
      case '1087':
        return faSnowman;
      case '1114':
        return faSnowman;
      case '1117':
        return faSnowman;
      default:
        return faCloud;
    }
  };

  return (
    <div className="weather-card detailedCard">
        <h2 className="city-name">{weatherData.location.name || "london"}</h2>
       <div className="weather-info detailedInfo">
        <p className="weather-description"><FontAwesomeIcon icon={faLocationDot}/> {weatherData.location.region}</p>
        </div>
      <div className="weather-info detailedInfo">
        <p className="temperature"><FontAwesomeIcon icon={faTemperatureThreeQuarters} /> {weatherData.current.temp_c}°C</p>
        <p className="wind-speed"><FontAwesomeIcon icon={faWind} /> {weatherData.current.wind_kph} m/s</p></div>
        <div className="weather-info detailedInfo">
        <p className="feels-like">Feels like: {weatherData.current.feelslike_c}°C</p>
        <p className="humidity">Humidity: {weatherData.current.humidity}%</p>
        <p className="uv-index">UV Index: {weatherData.current.uv}</p>
        <p className="visibility">Visibility: {weatherData.current.vis_km} km</p>
      </div>
      <div className="weather-icon">
        <p className="condition">{weatherData.current.condition.text}</p>
        <FontAwesomeIcon icon={getWeatherIcon()} size="3x" />
      </div>
    </div>
  );
};

export default WeatherCardDetailed;