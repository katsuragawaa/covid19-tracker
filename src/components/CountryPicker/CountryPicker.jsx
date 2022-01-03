import React, { useState, useEffect } from 'react';
import { NativeSelect, FormControl } from '@material-ui/core';

import { fetchCountries } from '../../api';

import styles from './CountryPicker.module.css';

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([]);

  const handleChange = (event) => {
    let selectedCountry = event.target.value;
    if (selectedCountry === 'global') selectedCountry = undefined;

    handleCountryChange(selectedCountry);
  };

  useEffect(() => {
    const fetchApi = async () => setFetchedCountries(await fetchCountries());

    fetchApi();
  }, [setFetchedCountries]);

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect defaultValue={''} onChange={handleChange}>
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
