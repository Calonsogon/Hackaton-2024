import React from "react";
import { useLocation } from "react-router-dom";
import Map from "../components/map/Map";
import './MapPage.scss';

const MapPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedRegion = params.get("region");
  const { weatherData } = location.state || {};

  return (
    <div>
      <Map selectedRegion={selectedRegion} />
      {weatherData && (
        <div className="colorbg">
        <div className="weather-popup">
          <h2>Información del tiempo:</h2>
          <p>Índice de calidad del aire: <span className="value">{weatherData.aqi}</span></p>
          <p>Dominante contaminante: <span className="value">{weatherData.dominentpol}</span></p>
        </div>
        </div>
      )}
    </div>
  );
};

export default MapPage;
