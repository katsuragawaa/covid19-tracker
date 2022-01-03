import React from 'react';

import { fetchData } from './api';

import { Cards, Chart, CountryPicker } from './components';
import styles from './App.module.css';

class App extends React.Component {
  // class based component for easily fetch data on mount
  async componentDidMount() {
    const data = await fetchData();
    console.log(data)
  }

  render() {
    return (
      <div className={styles.container}>
        <Cards />
        <CountryPicker />
        <Chart />
      </div>
    );
  }
}

export default App;
