"use client";
import Map, {
  Marker,
  NavigationControl,
  FullscreenControl,
  GeolocateControl,
  // ScaleControl,
} from "react-map-gl";
import React from "react";
// import "mapbox-gl/dist/mapbox-gl.css";
import "mapbox-gl/dist/mapbox-gl.css";

type Props = {
  latitude: number;
  longitude: number;
};

const MapBoxMap = ({ latitude, longitude }: Props) => {
  const mapStyle = "mapbox://styles/suansen88/clbbsvmoq000515pede1l9ym5";
  const [viewState, setViewState] = React.useState({
    latitude: latitude,
    longitude: longitude,
    zoom: 18,
    bearing: 0,
    pitch: 0,
  });

  return (
    <div>
      <Map
        {...viewState}
        onMove={(evt: any) => setViewState(evt.viewState)}
        mapStyle={mapStyle}
        style={{ width: "500px", height: "500px" }}
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        attributionControl={false}
      >
        <GeolocateControl position="top-left" />
        <FullscreenControl position="top-left" />
        <NavigationControl position="top-left" />
        {/* <ScaleControl /> */}
        <Marker
          longitude={longitude}
          latitude={latitude}
          color="#A99080"
          anchor="bottom"
          // style={position:"absolute"}
        />
      </Map>
    </div>
  );
};

export default MapBoxMap;
