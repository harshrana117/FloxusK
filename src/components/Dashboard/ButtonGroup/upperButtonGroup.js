import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";
import { ActiveButton, InactiveButton } from "./Buttons/buttons";
import { ButtonChangeTypes } from "./buttonChange.types";


export const ButtonGroupUpper = ({state, setINITIAL_STATE_}) => {

  const HandleChange = (action) => {
    switch(action) {
      case ButtonChangeTypes.SWITCH_TO_CHALLENGE:
        return setINITIAL_STATE_({...state,
          Projects: !state.Projects,
          Challenges: !state.Challenges
        }) 

      default: 
        return state
      }
  }

  return (
    <>
      <DashboardMetaDataOption>

        {state.Projects ? (
          <>
            <ActiveButton text="Projects">Projects</ActiveButton>
            <InactiveButton onClick={() => HandleChange(ButtonChangeTypes.SWITCH_TO_CHALLENGE)} text="Challenges" />
          </>
        ) : (
          <>
            <InactiveButton onClick={() => HandleChange(ButtonChangeTypes.SWITCH_TO_CHALLENGE)} text="Projects" />
            <ActiveButton text="Challenges" />
          </>
        )}

      </DashboardMetaDataOption>
    </>
  );
};

const DashboardMetaDataOption = styled.div`
  display: flex;
  flex-basis: 20%;
  align-items: center;
  width: 100%;
`;
