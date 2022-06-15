import React from "react";
import { ActiveButton, InactiveButton } from "./Buttons/buttons";
import { ButtonChangeTypes } from "./buttonChange.types";

export const ButtonGroupLower = ({state, setINITIAL_STATE_}) => {

  const HandleChange = (action) => {
    switch (action) {
      case ButtonChangeTypes.SWITCH_TO_IN_PROGRESS:
         return setINITIAL_STATE_({...state, 
          Enrolled: false,
          InProgress: true,
          Completed: false})

      case ButtonChangeTypes.SWITCH_TO_COMPLETED:
         return setINITIAL_STATE_({...state, 
          Enrolled: false,
          InProgress: false,
          Completed: true})
      
      default:
         return state
    }
  }

  return (
    <>
      {(state.InProgress) ? (
        <ActiveButton text='In Progress' />
      ) : (
        <InactiveButton onClick={() => HandleChange(ButtonChangeTypes.SWITCH_TO_IN_PROGRESS)} text='In Progress' />
      )}
      {(state.Completed) ? (
        <ActiveButton text='Completed' />
      ) : (
        <InactiveButton onClick={() => HandleChange(ButtonChangeTypes.SWITCH_TO_COMPLETED)} text='Completed' />
      )}
    </>
  );
};
