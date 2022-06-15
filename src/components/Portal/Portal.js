import React, { useState } from 'react';
import circleIcon from '../../assets/svg/circleIcon.svg';
import Modal from '../TellYourFriends/Modal';
import styled from '@emotion/styled';



const NavButtonRight = styled.div`
  text-align: left;
  text-decoration: none;
  color: #3f3f3f;
  font-size: 18px;
  align-self: center;
  font-weight: bold;
  &:hover {
    color: #3a2dce;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    padding-left: 20px;
  }
`;

const IconRight = styled.img`
  width: 28px;
  @media screen and (max-width: 600px) {
    justify-self: center;
    align-self: center;
  }
  @media screen and (max-width: 500px) {
    justify-self: right;
  }
`;


function Portal() {
const[display , setDisplay] =  useState(false)

    return (
        <>

        <IconRight src={circleIcon} />
         <NavButtonRight onClick={() => setDisplay(true)}>Spread the word</NavButtonRight>   
         <Modal open={display} onClose={() => setDisplay(false)}/>
        
        </>
    )
}

export default Portal
