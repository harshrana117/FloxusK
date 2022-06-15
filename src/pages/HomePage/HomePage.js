import styled from '@emotion/styled';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FullWidthCard from '../../components/NewHomePage/FullWidthCard';
import MiniCard from '../../components/NewHomePage/MiniCard';
import addProfile from '../../assets/images/completeProfile.png';
import joinCommunity from '../../assets/images/joinCommunity.svg';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as CgIcons from 'react-icons/cg';

const HomePage = () => {
  var user = useSelector((state) => state.user);
  let userID;
  if (user && user.currentUser) {
    userID = user.currentUser.userID;
  }

  return (
    <Container>
      <Section>
        <FullWidthCard
          heading="GET YOUR PROFILE VERIFIED"
          subheading="A verified profile attracts our special attention to you for all your needs."
          background="linear-gradient(89.86deg, #4776E6 -8.11%, #4A00E0 133.95%)"
          link={`/profile/${userID}`}
          linkText="Complete your profile"
          linkBack="info"
          image={addProfile}
          textColor="white"
          userID={userID}
          type="profile"
        />
      </Section>
      <Section>
        <h1>UNBOUND YOURSELF</h1>
        <h3>
          Skillup yourself with practical projects, Intuitive challenges and
          many more
        </h3>
        <MiniCardContainer>
          <MiniCard
            heading="PRACTICAL PROJECTS"
            subheading="Industry relevant projects all on a planned path to bring out the brilliant developer in you."
            link="/projects"
            linkText="EXPLORE PROJECTS"
            background="linear-gradient(90.28deg, #4D20AD -16.47%, #B8CBFB 153.83%)"
            icon={
              <FaIcons.FaProjectDiagram
                style={{
                  fontSize: '30px',
                  marginRight: '7px',
                  color: '#CDADFF',
                }}
              />
            }
          />
          <MiniCard
            heading="INTUITIVE CHALLENGES"
            subheading="Challenges and hurdles that will not only test you, but would also immensely grow your intuition and problem solving skills."
            link="/challenges"
            linkText="EXPLORE CHALLENGES"
            background="linear-gradient(90.28deg, #F3BF3A -16.47%, #FD7D00 153.83%)"
            icon={
              <GiIcons.GiPlatform
                style={{
                  fontSize: '30px',
                  marginRight: '7px',
                  color: '#FFE259',
                }}
              />
            }
          />
          <MiniCard
            heading="LIVE CHALLENGES"
            subheading="Specific challenges that would be live and timed to help you learn to perform your best under pressure."
            link=""
            linkText="COMMING SOON"
            background="linear-gradient(90.28deg, #4776E6 -16.47%, #712CFF 153.83%)"
            icon={
              <CgIcons.CgGoogleTasks
                style={{
                  fontSize: '30px',
                  marginRight: '7px',
                  color: '#A56BFF',
                }}
              />
            }
          />
        </MiniCardContainer>
      </Section>
      <Section>
        <FullWidthCard
          heading="JOIN OUR DISCORD COMMUNITY"
          subheading="Join our discord community to enjoy all after hour perks like live doubt clearing, peer reviews and loads of rewards."
          background="#fff"
          textColor="black"
          link="/"
          linkText="Join our community"
          linkBack="primary"
          image={joinCommunity}
          externalLink="https://discord.gg/AfqTzBdhRe"
        />
      </Section>
    </Container>
  );
};

export default HomePage;

const Container = styled.div`
  margin-left: 100px;
  padding: 0 150px;

  @media screen and (max-width: 1200px) {
    padding: 0px 50px;
  }

  @media screen and (max-width: 900px) {
    padding: 0px 20px;
  }

  @media screen and (max-width: 800px) {
    margin-left: 70px;
  }

  @media screen and (max-width: 600px) {
    margin-left: 0px;
  }
`;

const Section = styled.div`
  margin-bottom: 100px;
  h1 {
    font-size: 36px;
    text-transform: uppercase;
  }
  h3 {
    font-weight: normal;
    font-size: 14px;
    padding-bottom: 30px;
  }
`;

const MiniCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 100%;
  column-gap: 30px;

  @media screen and (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 30px;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;
