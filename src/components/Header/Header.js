import React from 'react';
import styled from '@emotion/styled';

const HeaderContainer = styled.div`
  display: flex;
  margin-left: 100px;
  width: calc(100vw - margin-left);
  background-color: white;
  height: 70px;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer></HeaderContainer>
    </>
  );
};

export default Header;
