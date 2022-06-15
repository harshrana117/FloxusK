import React, { useState } from 'react';
import styled from '@emotion/styled';

export const SelectDifficulty = ({ heading }) => {
  const [activeButton, setActiveButton] = useState(true);
  const [activeButton2, setActiveButton2] = useState(false);
  const [activeButton3, setActiveButton3] = useState(false);

  const handleButtonHighlight = () => {
    setActiveButton(true);
    setActiveButton2(false);
    setActiveButton3(false);
  };

  const handleButtonHighlight2 = () => {
    setActiveButton(false);
    setActiveButton2(true);
    setActiveButton3(false);
  };

  const handleButtonHighlight3 = () => {
    setActiveButton(false);
    setActiveButton2(false);
    setActiveButton3(true);
  };

  return (
    <MainContainer>
      <Heading>
        <h4>{heading}</h4>
      </Heading>
      {/* <ButtonContainer>
        {activeButton ? (
          <Button onClick={handleButtonHighlight}>Easy</Button>
        ) : (
          <InactiveButton onClick={handleButtonHighlight}>Easy</InactiveButton>
        )}
        {activeButton2 ? (
          <Button onClick={handleButtonHighlight2}>Medium</Button>
        ) : (
          <InactiveButton onClick={handleButtonHighlight2}>
            Medium
          </InactiveButton>
        )}
        {activeButton3 ? (
          <Button onClick={handleButtonHighlight3}>Hard</Button>
        ) : (
          <InactiveButton onClick={handleButtonHighlight3}>Hard</InactiveButton>
        )}
      </ButtonContainer> */}
    </MainContainer>
  );
};

const MainContainer = styled.nav`
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 15px;
`;

const Heading = styled.div`
  padding: 0px 20px;
  font-family: Poppins;
  font-weight: bold;
  font-size: 32px;
  letter-spacing: 0.02em;
  color: #000000;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Button = styled.button`
  width: 80px;
  outline: none;
  border: none;
  margin: 10px;
  padding: 5px 10px;
  background: linear-gradient(90deg, #3a2dce 15.43%, #3a2dce 50%);
  border-radius: 50px;
  border-color: #ffffff;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 0.06em;
  cursor: pointer;
  color: #ffffff;
  box-shadow: 1px 0px 14px -8px rgba(0, 0, 0, 0.75);
  border: 1px solid #cdcdcd;
`;
const InactiveButton = styled.button`
  width: 80px;
  outline: none;
  border: none;
  border-radius: 50px;

  border-color: #ffffff;
  margin: 10px;
  padding: 5px 10px;
  font-weight: bold;
  font-size: 14px;
  /* identical to box height */

  letter-spacing: 0.06em;
  background: #ffffff;
  cursor: pointer;
  box-shadow: 1px 0px 14px -8px rgba(0, 0, 0, 0.75);
  border: 1px solid #cdcdcd;
`;
