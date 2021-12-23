import axios from "axios";
const API_KEY = "9b6671840e4d5a2e14674ad158802b0b";
interface location {
  lat: number;
  lon: number;
}
const useLocationWeather = (cityLocation: location) => {
  return new Promise((resolve, reject) => {
    axios({
      method: "GET",
      url: `https://api.openweathermap.org/data/2.5/onecall?lat=${cityLocation.lat}&lon=${cityLocation.lon}&units=metric&exclude=hourly,minutely&appid=${API_KEY}`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((result) => {
        resolve(result.data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default useLocationWeather;
