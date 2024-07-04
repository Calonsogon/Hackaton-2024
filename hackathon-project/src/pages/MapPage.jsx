import React from "react";
import { useLocation } from "react-router-dom";
import Map from "../components/map/Map";

const MapPage = () => {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const selectedRegion = params.get("region");

  return (
    <div>
      <Map selectedRegion={selectedRegion} />
    </div>
  );
};

export default MapPage;
