import { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/Card';
import SearchBox from './components/Searchbox';
import WeatherCardDetailed from './components/DetailedCard';
import { BrowserRouter, Route, Routes } from "react-router";
import NavLinks from './components/Toggle';



function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('Kangra');

  const handleSearch = (Term) => {
    setSearchTerm(Term);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=2b663759245f4982bfb105815251802&q=${searchTerm || "kangra"}&aqi=no`);
        const parsed = await response.json();
        setWeatherData(parsed);
      } catch (err) {
        setError('Error fetching weather data');
        console.log(err);
      }
    };

    fetchWeatherData();
  }, [searchTerm]);

  console.log(weatherData);

  if (error) {
    return <div>{error}</div>;
  }
 

  
  return (
    <>
      <SearchBox onSearch={handleSearch} />
      {weatherData ? (
        <>
         <BrowserRouter>
         <Routes>
          <Route path="/" element={<WeatherCard weatherData={weatherData} />} />
          <Route path="/detailed" element={<WeatherCardDetailed weatherData={weatherData} />} />
         </Routes>
      {/* <WeatherCard weatherData={weatherData} />
        <WeatherCardDetailed weatherData={weatherData}/> */}
        <NavLinks/>
        </BrowserRouter>
        </>
      ) : (
        <p>Loading weather data...</p>
      )}
      
    </>
  );
}

export default App;

