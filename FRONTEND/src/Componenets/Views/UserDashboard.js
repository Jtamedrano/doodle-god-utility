import React, { Component } from "react";

import CurrentLevel from "./UserDashboard/CurrentLevel";
import Stats from "./UserDashboard/Stats";

import "./UserDashboard.css";
import ListElements from "./UserDashboard/ListElements";
import AddLevel from "../crudGame/create/AddLevel";
import ListPossibilities from "./UserDashboard/ListPossibilities";
import { Col, Container, Row } from "react-bootstrap";

export default class UserDashboard extends Component {
  id = this.props.data.levels[0]._id;

  state = {
    levels: this.props.data.levels.map((e) => {
      return { _id: e._id, name: e.name };
    }),
    currentLevel: this.id,
    groups: this.updateGroup(this.id),
    items: this.updateItems(this.id),
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

  updateItems(id) {
    let arr = [];
    this.props.data.levels
      .filter((el) => el._id === id)
      .forEach((e) => {
        return e.items.forEach((item) => {
          arr.push({ name: item.name, id: item._id, groupId: item.groupId });
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

  handlePossBtnClick(event) {
    console.log(event.target.value);
    this.props.outcomeClick({ event: event, levelId: this.state.currentLevel });
  }

  render() {
    console.log(this.props.data.levels);
    console.log(this.state);
    console.log(this.state.levels);
    console.log(this.state.items);
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
                <Container>
                  <Row>
                    <Col>
                      <ListElements
                        className="DashBody-ElementList"
                        groups={this.state.groups}
                        items={this.state.items}
                      />
                    </Col>
                    <Col>
                      <ListPossibilities
                        items={this.state.items}
                        btnClick={(e) => this.handlePossBtnClick(e)}
                      />
                    </Col>
                  </Row>
                </Container>
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
