import axios from 'axios';

const getWeather = async city => {
  try {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f369635965b00ad16ced5da4da4b9f3b&units=metric`);
    return resp.data;
  }
  catch (ex) {
    throw ex;
  }
}

export {
  getWeather
}