import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const VerifyProfileCard = ({
  heading,
  subheading,
  link,
  linkText,
  image,
  background,
  linkBack,
  textColor,
  type,
  userID,
  externalLink,
}) => {
  return (
    <Container background={background} textColor={textColor}>
      <ContentWrapper>
        <h1>{heading}</h1>
        <p>{subheading}</p>
        {externalLink ? (
          <a
            href={externalLink}
            style={{ textDecoration: 'none' }}
            target="_blank"
          >
            <Button
              variant="contained"
              height="54px"
              width="250px"
              borderRadius="3px"
              color={linkBack}
            >
              {linkText}
            </Button>
          </a>
        ) : type !== 'profile' ? (
          <Link to={link} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              height="54px"
              width="250px"
              borderRadius="3px"
              color={linkBack}
            >
              {linkText}
            </Button>
          </Link>
        ) : userID ? (
          <Link to={link} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              height="54px"
              width="250px"
              borderRadius="3px"
              color={linkBack}
            >
              {linkText}
            </Button>
          </Link>
        ) : (
          <Link to="/signIn" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              height="54px"
              width="250px"
              borderRadius="3px"
              color={linkBack}
            >
              Login with Github
            </Button>
          </Link>
        )}
        {/* {type !== 'profile' ? (
          <Link to={link} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              height="54px"
              width="250px"
              borderRadius="3px"
              color={linkBack}
            >
              {linkText}
            </Button>
          </Link>
        ) : userID ? (
          <Link to={link} style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              height="54px"
              width="250px"
              borderRadius="3px"
              color={linkBack}
            >
              {linkText}
            </Button>
          </Link>
        ) : (
          <Link to="/signIn" style={{ textDecoration: 'none' }}>
            <Button
              variant="contained"
              height="54px"
              width="250px"
              borderRadius="3px"
              color={linkBack}
            >
              Login with Github
            </Button>
          </Link>
        )} */}
      </ContentWrapper>
      <ImageWrapper>
        <img src={image} alt="card-description-img" />
      </ImageWrapper>
    </Container>
  );
};

export default VerifyProfileCard;

const Container = styled.div`
  background: ${({ background }) => background};
  width: 100%;
  height: 300px;
  border-radius: 15px;
  color: ${({ textColor }) => textColor};
  padding: 60px;
  display: flex;
  justify-content: space-between;
  border: 2px solid #e5e1e1;

  @media screen and (max-width: 800px) {
    height: 100%;
    padding: 30px;
  }
`;

const ContentWrapper = styled.div`
  h1 {
    font-size: 25px;
    font-weight: 700;
    padding-bottom: 12px;
  }
  p {
    font-size: 14px;
    padding-bottom: 20px;
  }
`;

const ImageWrapper = styled.div`
  width: 450px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 350px;

    @media screen and (max-width: 760px) {
      width: 300px;
    }
  }

  @media screen and (max-width: 720px) {
    display: none;
  }
`;
