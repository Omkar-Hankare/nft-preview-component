import React from "react";
import styled from "styled-components";

import nft from "../images/image-equilibrium.jpg";
import eth from "../images/icon-ethereum.svg";
import usericon from "../images/image-avatar.png";

const StyledDiv = styled.div`
  width: 350px;
  background-color: aliceblue;
`;

const NFTimg = styled.img`
  width: 200px;
  height: 200px;
`;

const Userimg = styled.img`
  width: 40px;
  height: 40px;
`;

const InfoSubComponent = () => {
  return (
    <>
      <StyledDiv>
        <NFTimg alt="NFT" src={nft}></NFTimg>
        <h3>Equilibrium #3429</h3>
        <p>Our Equilibrium collection promotes balance and calm.</p>
        <p>
          <span>
            <img src={eth} alt="Price"></img>
          </span>
          0.041 ETH
        </p>

        <p>
          <span>
            <Userimg src={usericon} alt="usericon"></Userimg>
          </span>{" "}
          Creation of Jules Wyvern
        </p>
      </StyledDiv>
    </>
  );
};
export default InfoSubComponent;
