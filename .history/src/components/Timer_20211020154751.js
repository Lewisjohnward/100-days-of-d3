import { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const Icon = styled.div`
  position: absolute;
  bottom: 2%;
  left: 2%;
  height: 200px;
  width: 200px;
  padding: 0px;
  margin: 0px;

  color: black;
  overflow: hidden;
  background: rgb(229, 229, 229);
  opacity: 1;
  text-shadow: none;
  font-weight: 300;
  font-size: 0.9em;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
`;

const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Timer = styled.div`
  position: relative;
  background: gray;
  height: 65%;
  width: 90%;
  border-radius: 5px 5px 50px 5px;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
`;

const TimerContainer = styled.div`
  position: absolute;
  top: 10%;
  left: 15%;
  height: 80%;
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;

  background: palegreen;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  font-size: 1.8em;
`;

const ButtonContainer = styled.div`
  height: 25%;
  width: 80%;
  display: flex;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Start_StopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: mediumvioletred;
  width: 30px;
  height: 30px;
  border-radius: 100%;
  box-shadow: 1px 1px 10px 1px rgba(0, 0, 0, 0.5);
  font-size: 1.2em;
  font-weight: 800;
  cursor: pointer;

  &:active {
    transition: transform 0.1s box-shadow 0.1s;
    transform: translateY(10%);
  }
`;

const ButtonDiv = styled.div`
  font-weight: 600;

  p {
    transform: translate(50%, -30%) rotate(-20deg);
  }
`;

const DateContainer = styled.div`
  position: absolute;
  top: 58%;
  left: 20%;
  font-size: 0.7em;
  text-decoration: italic;

  .today {
    right: 0%;
  }
`;

export const TimerComponent = ({ grid }) => {
  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const seconds = parseInt(localStorage.getItem("seconds-d3")) || 0;
    const active = localStorage.getItem("state-d3") || false;
    setActive(active);
    setSeconds(seconds);
  }, []);

  useEffect(() => {
    if (active) {
      setTimeout(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
    }
    localStorage.setItem("seconds-d3", seconds);
    localStorage.setItem("state-d3", active);
  }, [active, seconds]);

  function secondsToTime(e) {
    var h = Math.floor(e / 3600)
        .toString()
        .padStart(2, "0"),
      m = Math.floor((e % 3600) / 60)
        .toString()
        .padStart(2, "0"),
      s = Math.floor(e % 60)
        .toString()
        .padStart(2, "0");

    return h + ":" + m + ":" + s;
    //return `${h}:${m}:${s}`;
  }

  return (
    <Icon className={`icon`}>
      <Container>
        <Timer>
          <TimerContainer>{secondsToTime(seconds)}</TimerContainer>
        </Timer>
        <DateContainer>20/10/2021</DateContainer>

        <ButtonContainer>
          <ButtonDiv>
            <Start_StopContainer
              onClick={() => {
                if (!active) {
                  setActive(true);
                }
              }}
            />
            <p>Go</p>
          </ButtonDiv>
          {active ? (
            <ButtonDiv>
              <Start_StopContainer onClick={() => setActive(false)} />
              <p>Stop</p>
            </ButtonDiv>
          ) : (
            <ButtonDiv>
              <Start_StopContainer onClick={() => setSeconds(0)} />
              <p>Reset</p>
            </ButtonDiv>
          )}
        </ButtonContainer>
      </Container>
    </Icon>
  );
};
