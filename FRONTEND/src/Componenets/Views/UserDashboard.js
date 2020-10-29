import React, { Component } from "react";

import CurrentLevel from "./UserDashboard/CurrentLevel";
import Stats from "./UserDashboard/Stats";

import "./UserDashboard.css";
import ListElements from "./UserDashboard/ListElements";
import AddLevel from "../crudGame/create/AddLevel";

export default class UserDashboard extends Component {
  state = {
    levels: this.props.data.levels.map((e) => {
      return { _id: e._id, name: e.name };
    }),
    currentLevel: this.props.data.levels[0]._id,
    groups: this.updateGroup(this.props.data.levels[0]._id),
  };
  updateGroup(id) {
    let arr = [];
    this.props.data.levels
      .filter((el) => el._id === id)
      .forEach((e) => {
        return e.items.forEach((item) => {
          arr.push({ groupId: item.groupId, groupName: item.groupName });
        });
      });
    return arr;
  }

  chooseLevel(e) {
    this.setState({
      currentLevel: e,
      groups: this.updateGroup(e),
    });
  }
  render() {
    console.log(this.props.data.levels);
    console.log(this.state);
    console.log(this.state.levels);
    return (
      <>
        <p>This is the User Dashbard</p>
        <div className="DashBody">
          <Stats />
          <div className="DashBody-Main">
            {this.state.levels[0] !== null ? (
              <>
                <CurrentLevel
                  levels={this.state.levels}
                  chooseLevel={(e) => this.chooseLevel(e)}
                />
                <ListElements
                  className="DashBody-ElementList"
                  groups={this.state.groups}
                />
              </>
            ) : (
              <>
                <p>No Level found. Start a new level to begin tracking.</p>
                <AddLevel />
              </>
            )}
          </div>
        </div>
      </>
    );
  }
}
