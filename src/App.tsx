import "./App.css";
import React from "react";
import MainBody from "./components/MainBody/MainBody";
export default class App extends React.Component {
  constructor(props: any) {
    super(props);
  }
  componentDidMount() {}
  render() {
    return (
      <div className="App">
        <MainBody />
      </div>
    );
  }
}
