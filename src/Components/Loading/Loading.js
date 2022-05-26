import React from "react";
import styled from "styled-components";
const Loading = () => {
  return (
    <Outer id="outer">
      <div id="middle">
        <div id="inner"></div>
      </div>
    </Outer>
  );
};

export default Loading;

// $main: ;
// $sec:;
// $little-cursor: white;

const Outer = styled.div`
  height: 100vh;
  position: relative;
  background: linear-gradient(
    110deg,
    rgba(92, 91, 237, 1) 0%,
    rgba(219, 83, 238, 1) 80%
  );
  display: grid;
  place-items: center;
  #middle {
    height: 60px;
    width: 60px;

    border-radius: 50%;
    background-image: linear-gradient(150deg, transparent 50%, #ffffff 50%),
      linear-gradient(90deg, #ffffff 50%, #ac56ee 50%);
    transform: rotate(0);
    animation: rotation 0.9s infinite linear;
  }
  #inner {
    background: black;
    height: 48px;
    width: 48px;
    margin: auto;
    position: relative;
    top: 6px;
    border-radius: 50%;
  }
  @keyframes rotation {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
