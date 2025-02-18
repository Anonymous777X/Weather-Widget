  import React, { useState, useEffect } from 'react';
  
  

 function FetchData(){
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.weatherapi.com/v1/current.json?key=2b663759245f4982bfb105815251802&q=London&aqi=no');
        const parsed = await response.json();
        setWeatherData(parsed);
      } catch (err) {
        setError('Error fetching weather data');
        console.log(err);
      }
    };

    fetchWeatherData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }
  else{
    return weatherData;
  }
 }
  export default FetchData;
