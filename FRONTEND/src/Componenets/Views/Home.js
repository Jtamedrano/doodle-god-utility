import React, { Component, useContext, useState } from "react";
import UserDashboard from "./UserDashboard";
import UserContext from "../../context/userContext";
import { Button, Modal } from "react-bootstrap";
import AddItem from "../crudGame/create/AddItem";

function NoAuthPage() {
  return (
    <>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPrRzUbUmfjVWVbUze119yFY-URdUXPVkEWw&usqp=CAU"
        alt="Doodle God Logo's"
      />
      <h2>Welcome to DGU</h2>
      <p>
        The Doodle God Mobile App Series is a puzzle game where users start with
        the 4 original elements known to man and create other elements by
        combining those elements together.
      </p>
      <p>
        Trying to remember what combinations make what is one part of the game
        but the other part is remembering what didn't work so you can save time
        making new creations. Doodle God Utility helps track all possible
        combinations that haven't been made yet and helps the user keep track of
        past combinations.
      </p>
      <p>
        An account is used to keep track of these changes to each user. The user
        can store what game they are playing, what level one is on, and track
        groups and elements unlocked, all while the app calculates all the
        possible combinations.
      </p>
      <h4>
        Download the Game for free on iOS or Android and Register Now to save
        your progress
      </h4>
    </>
  );
}

export default function Home() {
  const { userData } = useContext(UserContext);
  console.log(userData.user);

  const [showModal, setShowModal] = useState(false);
  const [outcomeSelected, setOutcomeSelected] = useState("");
  const [currentLevel, setCurrentLevel] = useState("");

  const outcomeClick = (props) => {
    setCurrentLevel(props.levelId);
    setOutcomeSelected(props.event.target.value);
    setShowModal(true);
  };

  const outcomeClose = () => setShowModal(false);

  console.log("The outcome selected is ", outcomeSelected);

  return (
    <>
      <Modal show={showModal} onHide={outcomeClose}>
        <Modal.Header closeButton>
          <Modal.Title>Outcome</Modal.Title>
        </Modal.Header>
        <Modal.Body></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={outcomeClose}>
            Close
          </Button>
          <Button variant="primary" onClick={outcomeClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      {userData.user ? (
        <>
          <UserDashboard
            data={userData.user.gameData}
            outcomeClick={(e) => outcomeClick(e)}
          />
        </>
      ) : (
        <NoAuthPage />
      )}
    </>
  );
}
