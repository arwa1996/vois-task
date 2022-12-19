import { useEffect, useState } from 'react';
import SearchableMap from './SearchableMap';
import { Select } from '../../components/Select/Select';
import { useDispatch } from 'react-redux';
import { useAppSelector } from '../../store/hooks';
import { getPolygons } from '../../store/polygons/polygonsAction';
import { Polygon, selectedPolygon } from '../../types/Polygon';

const Map = () => {
  const dispatch = useDispatch();
  const [countries] = useAppSelector((state) => [state.polygon.polygons]);
  const [country, setCountry] = useState([]);
  const selectOptiones: selectedPolygon[] = [];

  useEffect(() => {
    dispatch(getPolygons());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onChange = (_: any, value: any) => {
    setCountry(value.country);
  };

  countries?.features.forEach((country: Polygon) => {
    selectOptiones.push({
      label: country.properties.ADMIN,
      value: country.properties.ADMIN,
      country: country,
    });
  });

  return (
    <>
      <Select
        placeholder='Choose country polygon'
        options={selectOptiones}
        onChange={onChange}
      />

      <SearchableMap countries={country} />
    </>
  );
};

export default Map;
