import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  useEffect(() => {
    const fetchApi = async () => setFetchedCountries(await fetchCountries());
    fetchApi();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect
        defaultValue={''}
        onChange={(e) => handleCountryChange(e.target.value)}
      >
        <option value="global">Global</option>
        {fetchedCountries.map((country, index) => (
          <option value={country} key={index}>
            {country}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
