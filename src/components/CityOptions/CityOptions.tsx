import React from "react";
import constants from "../../constants/constants";
import "./index.css";

type CityOptionsProps = {
  cities: Array<string>;
  selected: number;
  setSelected: Function;
};
type CityOptionsState = {};
export default class CityOptions extends React.Component<CityOptionsProps, CityOptionsState> {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {}
  render() {
    const { cities, selected, setSelected } = this.props;
    return (
      <div id={"cityOptionsContainer"}>
        {cities.map((value: string, index: number) => {
          return (
            <p
              key={index}
              className={"title"}
              style={{
                fontWeight: selected === index ? "600" : "100",
                color: selected === index ? constants.colors.BLUE : constants.colors.BLACK,
              }}
              onClick={() => {
                setSelected(index);
              }}
            >
              {value}
            </p>
          );
        })}
      </div>
    );
  }
}
