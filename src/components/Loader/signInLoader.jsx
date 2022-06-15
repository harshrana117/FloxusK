import React from 'react';
import styled from '@emotion/styled';
import Loader from 'react-loader-spinner';

const LoaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 40vh;
`;
const LoadingContainer = styled.div`
  margin: 10px;
  padding: 15px;
`;

const SignInLoader = () => {
    return (
        <LoaderContainer>
        <Loader
          type="TailSpin"
          color="#3a2dce"
          height={150}
          width={150}
        />
        <LoadingContainer>
          <h1>Loading....</h1>
        </LoadingContainer>
      </LoaderContainer>
    )
}

export default SignInLoader;