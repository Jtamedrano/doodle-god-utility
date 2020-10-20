import React, { Component } from "react";

export default class Element extends Component {
  render() {
    return <span>{this.props.name}</span>;
  }
}
