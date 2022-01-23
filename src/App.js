import React from "react";
import NFTComponents from "./Components/NFTComponents";
import styled from "styled-components";

const StyledDiv = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <StyledDiv>
      <NFTComponents></NFTComponents>
      <NFTComponents></NFTComponents>
    </StyledDiv>
  );
}

export default App;
