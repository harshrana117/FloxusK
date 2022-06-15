import React from 'react';
import styled from '@emotion/styled';
import {auth, signInWithGithub} from '../../firebase/firebase';
import {LoginContainer} from '../../components/OnboardingContainer/LoginContainer';
import { Link } from 'react-router-dom';

export const SignIn = () => {
  return (
    <>
    {/*
      <Button onClick={signInWithGithub}>Click Me</Button>
    <Button onClick={auth.signOut()}>Sign Out</Button> 
    */}  
    <LoginContainer /> 
    </>
  )
}


const Button = styled.button`
width: 270px;
height: 50px;

margin-top: 15px;
margin-left: 38px;

background: linear-gradient(90deg, #4032D8 15.43%, #3A2DCE 50%);
border-radius: 5px;
outline: none;

font-family: Poppins;
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 27px;
letter-spacing: 0.02em;

border-color: #FFFFFF;

color: #FFFFFF;
`