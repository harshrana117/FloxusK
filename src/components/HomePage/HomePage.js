import React from 'react';
import styled from '@emotion/styled';
import ProjectImage from '../../assets/images/projects.png';
import ChallengeImage from '../../assets/images/challenges.png';
import LiveImage from '../../assets/images/live.png';
import { Link } from 'react-router-dom';

const HomeWrapper = styled.div`
  margin-left: 100px;
  width: calc(100vw - margin-left);
  padding: 20px;
  @media (max-width: 496px) {
    padding: 0;
    margin-left: 0;
    width: 100%;
    height: auto;
  }
`;

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100vw-100px);

  @media (max-width: 496px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    margin-bottom: 30%;
  }
`;

const FeatureCard = styled.div`
  display: flex;
  width: 400px;
  height: 500px;
  background: #ffffff;
  margin-left: 40px;
  border-radius: 10px;
  border-color: #ffffff;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    width: 90%;
    margin-left: 0;
    margin-top: 20px;s
  }
`;

const FeatureCardContainer = styled.div`
  display: flex;
  width: 80%;
  height: 90%;
  flex-direction: column;

  .title {
    font-size: 23px;
    font-weight: 600;
  }

  .description {
    color: #757575;
    font-size: 13px;
    margin-top: 10px;
  }
`;

const FeatureCardImage = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  justify-content: center;
  align-items: center;

  img {
    width: 80%;
  }
`;

const PrimaryButton = styled.button`
  display: flex;
  width: 140px;
  height: 35px;
  justify-content: center;
  align-items: center;
  background: #3a2dce;
  border: none;
  color: #ffffff;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none;
`;

const DisabledButton = styled.button`
  display: flex;
  width: 140px;
  height: 35px;
  justify-content: center;
  align-items: center;
  background: #c7d3fc;
  border: 1px solid #3a2dce;
  color: #3a2dce;
  font-size: 15px;
  font-weight: 600;
  margin-top: 20px;
  border-radius: 5px;
  text-decoration: none;
`;

const HomePage = () => {
  return (
    <>
      <HomeWrapper>
        <HomeContainer>
          <FeatureCard>
            <FeatureCardContainer>
              <FeatureCardImage>
                <img src={ProjectImage} alt="project" />
              </FeatureCardImage>
              <p className="title">Practical Projects</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <PrimaryButton as={Link} to="projects">
                Explore &rarr;
              </PrimaryButton>
            </FeatureCardContainer>
          </FeatureCard>

          <FeatureCard>
            <FeatureCardContainer>
              <FeatureCardImage>
                <img src={ChallengeImage} alt="project" />
              </FeatureCardImage>
              <p className="title">Intuitive Dev Challenges</p>
              <p className="description">
                Lorem ipsum sit , consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut
              </p>
              <PrimaryButton as={Link} to="challenges">
                Explore &rarr;
              </PrimaryButton>
            </FeatureCardContainer>
          </FeatureCard>

          <FeatureCard>
            <FeatureCardContainer>
              <FeatureCardImage>
                <img src={LiveImage} alt="project" />
              </FeatureCardImage>
              <p className="title">Live Rated Contest</p>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </p>
              <DisabledButton>Coming Soon</DisabledButton>
            </FeatureCardContainer>
          </FeatureCard>
        </HomeContainer>
      </HomeWrapper>
    </>
  );
};

export default HomePage;
