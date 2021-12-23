import React from "react";
import "./index.css";
import { WiCloudy } from "react-icons/wi";
import constants from "../../constants/constants";
import moment from "moment";

import "../../assets/fonts/Violenta_Solid_Unicase.ttf";
const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
type WeatherBodyProps = {
  data: any;
};
type WeatherBodyState = {};

export default class WeatherBody extends React.Component<WeatherBodyProps, WeatherBodyState> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }
  render() {
    const { data } = this.props;
    let toDisplay = [];
    for (var i = 0; i < 4; i++) {
      toDisplay.push(
        <div key={i} className={"bottomDiv"} style={i === 3 ? { border: "initial" } : {}}>
          <p className={"day"}>
            {moment()
              .add(i + 1, "days")
              .format("ddd")}
          </p>
          {data ? (
            <img
              className="imgSmall"
              src={`http://openweathermap.org/img/wn/${data?.daily[i]?.weather[0]?.icon}@2x.png`}
              style={{ width: 60, height: 60 }}
            />
          ) : (
            <WiCloudy color={constants.colors.BLUE} size={constants.sizes.iconSizeSmall} />
          )}

          <p className={"temp"}>{data ? data?.daily[i]?.temp?.day.toFixed(0) : "--"}°</p>
        </div>
      );
    }
    return (
      <>
        <link
          href="//db.onlinewebfonts.com/c/f1aa3217abd6b955c627329bf7cc2801?family=ViolentaSolidUnicaseW01-Rg"
          rel="stylesheet"
          type="text/css"
        />
        <div id={"weatherBodyContainer"}>
          <div id={"halfDiv"}>
            <p id={"today_title"}>Today</p>
            <div id={"topDisplayCont"}>
              {data ? (
                <img
                  className="imgSmall"
                  src={`http://openweathermap.org/img/wn/${data?.current?.weather[0]?.icon}@2x.png`}
                  style={{ width: 120, height: 120 }}
                />
              ) : (
                <WiCloudy color={constants.colors.BLUE} size={constants.sizes.iconSizeBig} />
              )}
              <div id={"topDisplayNumber"}>
                <p id={"bigtempText"}>{data ? data?.current?.temp?.toFixed(0) : "--"}°</p>
                <p id={"weatherDescription"}>{data?.current?.weather[0]?.main}</p>
              </div>
            </div>
          </div>
          <div id={"bottomDivContainer"}>
            <div className={"bottomDiv"} id={"bottomDiv_"}>
              <p className={"day"}>Today</p>
              {data ? (
                <img
                  className="imgSmall"
                  src={`http://openweathermap.org/img/wn/${data?.current?.weather[0]?.icon}@2x.png`}
                  style={{ width: 60, height: 60 }}
                />
              ) : (
                <WiCloudy color={constants.colors.BLUE} size={constants.sizes.iconSizeSmall} />
              )}
              <p className={"temp"}>{data ? data?.current?.temp?.toFixed(0) : "--"}°</p>
            </div>
            {toDisplay}
          </div>
        </div>
      </>
    );
  }
}
