import React from "react";
import CityOptions from "../CityOptions/CityOptions";
import WeatherBody from "../WeatherBody/WeatherBody";
import "./index.css";
import useLocationWeather from "../../functions/useLocationWeather";

interface location {
  lat: number;
  lon: number;
}
type MainBodyProps = {};
type MainBodyState = {
  cities: Array<string>;
  cityCoordinates: Array<location>;
  selected: number;
  data: any;
  loading: boolean;
};
export default class MainBody extends React.Component<MainBodyProps, MainBodyState> {
  constructor(props: any) {
    super(props);
    this.state = {
      cities: ["CALGARY", "MOSCOW", "LAGOS"],
      cityCoordinates: [
        {
          //CALGARY COORDINATES
          lat: 51.049999,
          lon: -114.066666,
        },
        {
          //MOSCOW COORDINATES
          lat: 55.751244,
          lon: 37.618423,
        },
        {
          //LAGOS COORDINATES
          lat: 6.465422,
          lon: 3.406448,
        },
      ],
      selected: 0,
      data: null,
      loading: false,
    };
  }
  componentDidMount() {
    const { selected, cityCoordinates } = this.state;
    this.setState({ loading: true, data: null }, () => {
      useLocationWeather(cityCoordinates[selected])
        .then((result) => {
          this.setState({ data: result });
        })
        .catch((error) => {
          console.log(error.message);
        })
        .finally(() => {
          this.setState({ loading: false });
        });
    });
  }
  render() {
    const { cities, selected, data, loading, cityCoordinates } = this.state;
    return (
      <div id={"mainBodyContainer"}>
        <CityOptions
          cities={cities}
          selected={selected}
          setSelected={(value: number) => {
            this.setState({ selected: value });
            this.setState({ loading: true, data: null }, () => {
              useLocationWeather(cityCoordinates[value])
                .then((result) => {
                  this.setState({ data: result });
                })
                .catch((error) => {
                  console.log(error.message);
                })
                .finally(() => {
                  this.setState({ loading: false });
                });
            });
          }}
        />
        <WeatherBody data={data} />
      </div>
    );
  }
}
