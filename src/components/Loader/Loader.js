/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from '@emotion/styled';
import spinner from '../../assets/svg/loader.gif';

const Loader = () => {
  return (
    <Container>
      <img src={spinner} />
    </Container>
  );
};

export default Loader;

const Container = styled.div`
  background-color: #f2f2f2;
  margin-left: 100px;
  width: calc(100vw-100px);
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
