import React from 'react';
import styled from '@emotion/styled';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { NavbarRight } from '../Navbar';
import Unboundlogo from '../../../assets/images/unbound.png';

const NavbarWrapper = styled.div`
  z-index: 1000;
  display: flex;
  width: 100%;
  height: 9vh;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    display: none;
  }
`;

const NavbarContainer = styled.div`
  display: flex;
  width: 68%;
  height: 7vh;
`;

const NavLeftContainer = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 7vh;
  align-items: center;
`;

const NavRightContainer = styled.div`
  z-index: 1000;
  display: flex;
  flex-basis: 50%;
  height: 7vh;
  align-items: center;

  .userMenu {
    margin-left: auto;
  }
`;

const NavElement = styled.div`
  display: flex;
  height: 35px;
  width: 130px;
  font-weight: 600;
  font-size: 15px;
  ${'' /* background: red; */}
  justify-content: center;
  align-items: center;
  color: #000000;
  text-decoration: none;
  margin-right: 10px;

  &:hover {
    background: #c7d3fc;
    border: 1px solid #0d1b93;
    border-radius: 10px;
    color: #0d1b93;
  }

  @media (max-width: 496px) {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  display: flex;
  height: 35px;
  width: 130px;
  font-weight: 600;
  font-size: 15px;
  ${'' /* background: red; */}
  justify-content: center;
  align-items: center;
  color: #000000;
  text-decoration: none;
  margin-right: 20px;

  img {
    width: 100%;
    margin-top: 3px;
  }
`;

const DetailedNavbar = () => {
  return (
    <>
      <NavbarWrapper>
        <NavbarContainer>
          <NavLeftContainer>
            <LogoWrapper as={Link} to="/">
              <img src={Unboundlogo} alt="unbound logo" />
            </LogoWrapper>
            <NavElement as={Link} to="/challenges">
              {' '}
              <GiIcons.GiPlatform
                style={{ fontSize: '22px', marginRight: '7px' }}
              />
              Challenges
            </NavElement>
            <NavElement as={Link} to="/projects">
              {' '}
              <FaIcons.FaProjectDiagram
                style={{ fontSize: '22px', marginRight: '7px' }}
              />{' '}
              Projects
            </NavElement>
            {/* <NavElement as={Link}>
              {' '}
              <FaIcons.FaSquarespace
                style={{ fontSize: '22px', marginRight: '7px' }}
              />{' '}
              Tracks
            </NavElement> */}
          </NavLeftContainer>
          <NavRightContainer>
            <div className="userMenu">
              <NavbarRight />
            </div>
          </NavRightContainer>
        </NavbarContainer>
      </NavbarWrapper>
    </>
  );
};

export default DetailedNavbar;
