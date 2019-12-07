import React from 'react';
import Navbar from './navbar.component';
import Footer from './footer.component';
import Form from './form.component';
import Loader from './loader.component';
import * as dataService from '../services/data.service';
import Weather from './weather-info.component';

class Home extends React.Component {
  state = {
    cityName: '',
    loading: false,
    weather: null,
    error: null
  };

  async search(cityName) {
    this.setState({
      loading: true,
      error: null,
      cityName,
      weather: null
    });
    try {
      const searchResult = await dataService.getWeather(cityName);
      this.setState({
        weather: searchResult
      })
    }
    catch (ex) {
      let error;
      switch (ex.response.status) {
        case 404:
          error = 'Ciudad no encontrada.'
          break;
        default:
          break;
      }
      this.setState({
        error
      });
    }
    this.setState({
      loading: false
    });
  }

  render() {
    const weather = this.state.weather;
    return <React.Fragment>
      <Navbar name="App Clima" />
      <Form search={cityName => this.search(cityName)} />
      {this.state.loading && <Loader />}
      {this.state.error && <div className="error center">{this.state.error}</div>}
      {this.state.weather && <Weather
        cityName={this.state.cityName}
        country={weather.sys.country}
        icon={weather.weather[0].icon}
        temp={weather.main.temp}
        description={weather.weather[0].description}
        humidity={weather.main.humidity}
        windSpeed={weather.wind.speed}
      />}
      <Footer author="Marcos Saucedo" year={new Date().getFullYear()} />
    </React.Fragment>
  }
}

export default Home;