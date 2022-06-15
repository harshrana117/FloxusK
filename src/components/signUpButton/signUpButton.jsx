import React from 'react';
import styled from '@emotion/styled';
import * as AiIcons from 'react-icons/ai';

export const SignUpButton = () => {
  return (
    <div>
      <Button>
        {' '}
        <AiIcons.AiFillGithub
          style={{ marginRight: '10px', fontSize: '15px' }}
        />{' '}
        <p>Login with Github</p>
      </Button>
    </div>
  );
};

const Button = styled.button`
  display: flex;
  width: 200px;
  height: 35px;
  align-items: center;
  justify-content: center;

  margin-top: 15px;

  border-radius: 5px;
  outline: none;

  font-weight: 500;
  font-size: 15px;
  ${'' /* line-height: 27px; */}
  letter-spacing: 0.02em;
  text-decoration: none;
  cursor: pointer;

  border-color: #ffffff;

  color: black;

  p {
    text-decoration: none;
  }
`;
