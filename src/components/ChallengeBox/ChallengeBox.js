/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import styled from '@emotion/styled';
import Img1 from '../../assets/images/Rectangle 38.png';
import { Link } from 'react-router-dom';

const ChallengeWrapper = styled.div`
  display: flex;
  width: 330px;
  height: 500px;
  justify-content: center;
  align-items: center;
  background: white;
  border: 1px solid #cdcdcd;

  margin-right: 30px;

  @media (max-width: 496px) {
    margin-right: 0;
    margin-top: 20px;
  }
`;

const ChallengeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 87%;
  height: 90%;

  .title {
    font-size: 20px;
    font-weight: 500;
    margin-top: 30px;
  }

  .description {
    font-size: 15px;
    font-weight: 400;
    margin-top: 10px;
    color: #757575;
    overflow: hidden;
    -webkit-line-clamp: 3;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50%;
  object-fit: cover;

  img {
    width: 100%;
    margin-top: 5%;
  }
`;

const ChipContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 5px;

  .blue {
    color: #14c2c8;
    font-size: 15px;
    font-weight: 700;
    margin-right: 10px;
  }

  .purple {
    color: yellow;
    font-size: 15px;
    font-weight: 700;
    margin-right: 10px;
  }

  .pink {
    color: #eb5252;
    font-size: 15px;
    font-weight: 700;
    margin-right: 5px;
  }
`;

const Chip = styled.div`
  display: flex;
  width: 150px;
  border: 0.5px solid #424242;
  height: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  p {
    color: #424242;
    font-weight: 600;
    font-size: 16px;
    margin-bottom: 2px;
  }
`;

const Footer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;

  .link {
    font-size: 16px;
    cursor: pointer;
  }

  .textLink {
    text-decoration: none;
    color: #424242;
  }
`;

const ChallengeBox = ({ data, id }) => {
  return (
    <>
      <ChallengeWrapper>
        <ChallengeContainer>
          <ImageContainer>
            <img src={Img1} />
          </ImageContainer>
          <p className="title"> {data.title} </p>
          {/* <ChipContainer>
            <p className="blue">HTML</p> <p className="purple">CSS</p>{' '}
            <p className="pink">JAVASCRIPT</p>
          </ChipContainer> */}
          <p className="description">{data.description}...</p>
          <Footer>
            <Chip>
              {' '}
              <p> {data.difficulty} </p>{' '}
            </Chip>
            <p>
              <Link
                to={
                  `/challenges/${id}`
                  // (user!==null) ? ( `/projects/${id}`) : (`/signIn`)
                }
                className="textLink"
              >
                View Details &rarr;
              </Link>
            </p>
          </Footer>
        </ChallengeContainer>
      </ChallengeWrapper>
    </>
  );
};

export default ChallengeBox;
