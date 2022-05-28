import React from 'react';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import './Map.css';
import { showDataOnMap } from '../../util';

function Map({ countries, casesType, center, zoom, vaccines }) {
  function ChangeView({ center, zoom }) {
    const map = useMap();
    map.setView(center, zoom);
    return null;
  }

  return (
    <MapContainer
      casesType={casesType}
      className='map'
      center={center}
      zoom={20}
      scrollWheelZoom={true}
    >
      <ChangeView center={center} zoom={zoom} />
      <TileLayer
        // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        // url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png'
        // zoom={20}
      />
      {/* loop through countries and draw circles on the screen */}
      {showDataOnMap(countries, casesType, vaccines)}
    </MapContainer>
  );
}

export default Map;
