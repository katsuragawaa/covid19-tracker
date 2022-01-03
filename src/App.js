import React from 'react';

import { fetchData } from './api';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';
import coronaImage from './images/logo.png';

class App extends React.Component {
  // class based component for easily fetch data on mount
  state = {
    data: {},
    country: '',
  };

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country });
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.container}>
        <img src={coronaImage} className={styles.logo} alt='covid-19' />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    );
  }
}

export default App;
