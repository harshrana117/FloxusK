import React from 'react';
import styled from '@emotion/styled';
import logo from '../../assets/svg/logo.svg';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import Loader from 'react-loader-spinner';

import {auth, signInWithGithub} from '../../firebase/firebase';

const MainContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const OnboardCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 300px;
  background-color: white;
  border: 1px solid #cdcdcd;
  border-radius: 5px;
  justify-content: center;
  align-items: center;

  .link {
    margin-top: 10px;
    font-size: 15px;
    cursor: pointer;
    text-decoration: none;
    color: black;
  }
`;

const PointBox = styled.button`
  display: flex;
  width: 80%;
  height: 40px;
  background-color: #323232;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  color: white;
  margin-top: 40px;
  cursor: pointer;

  p {
    margin-left: 15px;
    font-weight: 600;
  }
`;

export const LoginContainer = () => {
  return (
    <>
      <MainContainer>
        <OnboardCard>
          <img src={logo} />
          <PointBox  onClick={async() => {await signInWithGithub();}}>
            <AiIcons.AiOutlineGithub
              style={{ color: 'white', fontSize: '25px' }}
            />
            <p>Login with Github</p>
          </PointBox>
          <Link to="/signup" className="link">
            New User? Create an Account
          </Link>
        </OnboardCard>
      </MainContainer>
    </>
  );
};

export default LoginContainer;
