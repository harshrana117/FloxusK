import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

export const ActiveButton = ({text, onClick}) => {
  return(
    <>
    <ActiveOption onClick={onClick}>{text}</ActiveOption>
    </>
  )
}

export const InactiveButton = ({text, onClick}) => {
  return (
    <>
    <InactiveOption onClick={onClick}>{text}</InactiveOption>
    </>
  )
}

const ActiveOption = styled.button`
  display: flex;
  flex-basis: 15%;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: 2px solid blue;
  height: 30px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  padding: 5px;
  margin-right: 5px;
  border-radius: 15px;
  background: #3a2dce;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }

  @media (max-width: 496px) {
    flex-basis: 50%;
  }
`;

  const InactiveOption = styled.button`
  display: flex;
  margin-right: 5px;
  border-radius: 15px;
  flex-basis: 15%;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border: none;
  height: 30px;
  font-size: 18px;
  font-weight: 400;
  color: #323232;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  font-size: 15px;
  font-weight: 600;

  &:focus {
    outline: none;
  }

  @media (max-width: 496px) {
    flex-basis: 50%;
    margin-left: 0;
  }
`;