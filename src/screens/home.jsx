import React, { Component, useState } from "react";
import { Button } from "react-bootstrap";
import {
  ContentContainer,
  ContentHeader,
  ContentImage,
  DemoButtonContainer,
  DemoContainer,
  DemoOutputContainer,
  HomeScreenBody,
  HomeScreenContainer,
  HomeScreenHeader,
  TheEndButton,
} from "./../components/homeScreenElements.jsx";
import { FaBullseye } from "react-icons/fa";
import Rocket from "./../assets/Rocket.gif";
import Hooks from "./hooks_useState.jsx";
import HooksuseState from "./hooks_useState.jsx";
import HooksuseEffect from "./hooks-useEffect.jsx";
import HookuseCallback from "./hooks_useCallback.jsx";
import HooksuseReducer from "./hooks_useReducer.jsx";
import Useatom from "./jotai_stateManagement.jsx";

export default class Home extends Component {
  constructor(props) {
    console.log("constructor called");
    super(props);
    this.state = {
      count: 0,
      clicked: false,
    };
  }

  updateCount() {
    let random = Math.floor(Math.random() * 100);
    this.setState({ count: random });
    this.setState({ clicked: true });
  }

  componentDidMount() {
    //generate random number
    console.log("App mounted");
    this.setState({ count: 0 });
    this.setState({ clicked: false });

    document.getElementById("statechange").innerHTML = "App mounted";
  }

  componentDidUpdate(prevState) {
    if (this.state.clicked) {
      document.getElementById("statechange").innerHTML =
        "Count updated changed";
    }
  }

  componentWillUnmount() {
    document.getElementById("statechange").innerHTML = "App unmounted";
    this.setState({ count: null });
    this.setState({ clicked: false });
  }

  render() {
    console.log("Call Render");
    return (
      <>
        <HomeScreenContainer>
          <HomeScreenHeader>
            <FaBullseye />{" "}
          </HomeScreenHeader>
          <HomeScreenBody>
            <ContentContainer>
              <ContentHeader>
                <span style={{ color: "#fff" }}> Hi all ,</span>
                <span> Let's go through the demo </span>
                <span>Yes, React Lifecycle is not a </span>{" "}
                <span style={{ color: "#64e688" }}>Rocket Science.</span>
              </ContentHeader>
              <ContentImage>
                <img src={Rocket} alt="Rocket" />
              </ContentImage>
            </ContentContainer>
            <DemoContainer>
              <DemoButtonContainer>
                <Button
                  variant="outline-secondary"
                  size="lg"
                  style={{
                    width: "200px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    this.componentDidMount();
                  }}
                >
                  Mounting
                </Button>{" "}
                <Button
                  variant="outline-success"
                  size="lg"
                  style={{
                    width: "200px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    this.updateCount();
                  }}
                >
                  Updating
                </Button>{" "}
                <Button
                  variant="outline-danger"
                  size="lg"
                  style={{
                    width: "200px",
                    fontSize: "25px",
                    fontWeight: "bold",
                  }}
                  onClick={() => {
                    this.componentWillUnmount();
                  }}
                >
                  Unmounting
                </Button>{" "}
              </DemoButtonContainer>
              <DemoOutputContainer>
                <div
                  style={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "25px",
                  }}
                >
                  State was changed{" "}
                  <span style={{ color: "#64e688" }}>{this.state.count}</span>{" "}
                  <p id="statechange"></p>
                </div>
              </DemoOutputContainer>
            </DemoContainer>
            <DemoContainer>
              <HooksuseState />
              <HooksuseEffect />
              <HookuseCallback />
              <HooksuseReducer />
            </DemoContainer>

            <TheEndButton> To be Continued </TheEndButton>
            <DemoContainer>
              <Useatom />
            </DemoContainer>
          </HomeScreenBody>
        </HomeScreenContainer>
      </>
    );
  }
}
