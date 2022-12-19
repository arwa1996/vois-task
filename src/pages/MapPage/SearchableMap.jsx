import { StaticMap, MapContext } from 'react-map-gl';
import DeckGL, { GeoJsonLayer } from 'deck.gl';
import { config } from '../../util/config';

const SearchableMap = (countries) => {
  const viewport = {
    latitude: 25,
    longitude: 17,
    zoom: 1,
    bearing: 0,
    pitch: 10,
  };
  const layers = [
    new GeoJsonLayer({
      id: 'geojson',
      data: countries.countries,
      filled: true,
      pointRadiusMinPixels: 2,
      pointRadiusScale: 2000,
      getPointRadius: (f) => 11 - f.properties.scalerank,
      getFillColor: [200, 0, 80, 180],
      pickable: true,
      autoHighlight: true,
    }),
  ];

  return (
    <>
      <DeckGL
        initialViewState={viewport}
        controller={true}
        layers={layers}
        ContextProvider={MapContext.Provider}
        width='95%'
        height={'80%'}
        style={{ top: 'initial', left: 'initial' }}
        willReadFrequently={true}
      >
        <StaticMap mapboxApiAccessToken={config.mapBoxToken} />
      </DeckGL>
    </>
  );
};

export default SearchableMap;
