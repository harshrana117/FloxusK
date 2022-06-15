import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import logo from '../../assets/svg/logo.svg';
import { Link, NavLink } from 'react-router-dom';
import { BiCaptions, BiUserCircle } from 'react-icons/bi';
import { IoMdCloseCircle } from 'react-icons/io';
import boyIcon from '../../assets/svg/boyIcon.svg';
import doorIcon from '../../assets/svg/doorIcon.svg';
import userIcon from '../../assets/svg/userIcon.svg';
import logoutIcon from '../../assets/svg/logoutIcon.svg';
import Portal from '../../components/Portal/Portal';
import { FaRegHeart } from 'react-icons/fa';
import '../../index.css';
import { BsArrowRight } from 'react-icons/bs';
import { SignUpButton } from '../signUpButton/signUpButton';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../App';
import {
  setCurrentUser,
  removeCurrentUser,
} from '../../reducers/user/user.actions';
import * as GiIcons from 'react-icons/gi';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as SiIcons from 'react-icons/si';
import * as RiIcons from 'react-icons/ri';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';
import Unboundlogo from '../../assets/images/unboundicon2.png';

// NavbarLeft
export const NavbarLeft = () => {
  return (
    <NavLeft>
      <NavLinkLeft to="/" className="logo-left-nav">
        {/* <Beta>BETA</Beta> */}
        <img src={Unboundlogo} alt="floxus kata" />
      </NavLinkLeft>

      <NavLinkLeft to="/">
        <AiIcons.AiFillHome style={{ fontSize: '25px' }} />
        <LinkDescription>Home</LinkDescription>
      </NavLinkLeft>

      <NavLinkLeft to="/projects" activeStyle={{ color: '#0D273A' }}>
        <FaIcons.FaProjectDiagram style={{ fontSize: '25px' }} />
        <LinkDescription>Projects</LinkDescription>
      </NavLinkLeft>
      <NavLinkLeft to="/challenges" activeStyle={{ color: '#0D273A' }}>
        <GiIcons.GiPlatform style={{ fontSize: '25px' }} />
        <LinkDescription>Challenges</LinkDescription>
      </NavLinkLeft>
      {/* <NavLinkLeft to='/tracks' activeStyle={{ color: '#0D273A' }}>
        <FaIcons.FaSquarespace style={{ fontSize: '25px' }} />
        <LinkDescription>Tracks</LinkDescription>
      </NavLinkLeft> */}
    </NavLeft>
  );
};

// NavbarRight
export const NavbarRight = () => {
  const dispatch = useDispatch();
  var user = useSelector((state) => state.user);
  const [navToggle, setNavToggle] = useState(false);

  // setToggle function
  const navToggleHandler = () => {
    setNavToggle(!navToggle);
  };

  const [userName, setUserName] = useState('');
  const [userID, setUserID] = useState('');
  const [userImage, setUserImage] = useState(null);
  const [userDetail, setUserDetail] = useState(false);
  const [userLogIn, setUserLogIn] = useState(false);

  const logOut = async () => {
    await signout();

    await dispatch(removeCurrentUser());
    setUserLogIn(false);
    // ReactDOM.render(App);
  };

  useEffect(() => {
    // console.log(user.currentUser);
    if (user.currentUser) {
      // User is signed in.
      setUserName(user.currentUser.displayName);
      setUserImage(user.currentUser.photoURL);
      setUserID(user.currentUser.userID);
      setUserDetail(true);
      setUserLogIn(true);
    } else return;

    // console.log(user.currentUser);
    // console.log("Hello Rana");
  }, [user.currentUser]);

  // console.log(userLogIn);

  return (
    <>
      {userLogIn ? (
        <NavRight>
          <NavTrayTop to="/">
            <NavLogoRight>
              <img src={Unboundlogo} alt="floxus kata" />
            </NavLogoRight>
            <ToggleButton onClick={navToggleHandler} />
          </NavTrayTop>
          {navToggle ? (
            <Backdrop>
              <RightNavbar>
                <NavElementRight>
                  <CloseButtonContainer>
                    <CloseButton onClick={navToggleHandler} />
                  </CloseButtonContainer>
                  <UserContainer>
                    <Image src={userImage} />
                    <Name>{userName}</Name>
                  </UserContainer>
                </NavElementRight>

                <NavElementRight>
                  <NavLinkContainerRight>
                    <BsIcons.BsFillPersonFill
                      style={{ color: '#1563FC', fontSize: '25px' }}
                    />
                    <NavLinkRight
                      to={`/profile/${userID}`}
                      onClick={navToggleHandler}
                    >
                      My Profile
                    </NavLinkRight>
                    {/* <NavArrow /> */}
                  </NavLinkContainerRight>
                  <NavLinkContainerRight>
                    <SiIcons.SiGlassdoor
                      style={{ color: '#F6BF42', fontSize: '25px' }}
                    />
                    <NavLinkRight to="/" onClick={navToggleHandler}>
                      Freelancing Arena
                    </NavLinkRight>
                    {/* <NavArrow /> */}
                  </NavLinkContainerRight>
                  <NavLinkContainerRight>
                    <RiIcons.RiDashboardLine
                      style={{ color: '#FD7E7E', fontSize: '25px' }}
                    />
                    <NavLinkRight to="/dashboard" onClick={navToggleHandler}>
                      My Dashboard
                    </NavLinkRight>
                    {/* <NavArrow /> */}
                  </NavLinkContainerRight>
                  {/* <NavLinkContainerRight>
                    <Portal />

                  </NavLinkContainerRight> */}
                  <NavLinkContainerRight>
                    <BiIcons.BiLogOut
                      style={{ color: '#FF1F70', fontSize: '25px' }}
                    />
                    <NavLinkRight
                      to="/"
                      onClick={() => {
                        navToggleHandler();
                        logOut().then(() => {
                          window.location.reload(false);
                        });
                      }}
                    >
                      Logout
                    </NavLinkRight>
                    {/* <NavArrow /> */}
                  </NavLinkContainerRight>
                </NavElementRight>
                <NavElementRight>
                  <Footer>Made with 💖 by FLOXUS</Footer>
                </NavElementRight>
              </RightNavbar>
            </Backdrop>
          ) : null}
        </NavRight>
      ) : (
        <ButtonContainer>
          <Link to="/signIn">
            <SignUpButton />
          </Link>
        </ButtonContainer>
      )}
    </>
  );
};

// styled componets for navbarLeft
const NavLeft = styled.nav`
  display: flex;
  flex-direction: column;
  width: 100px;
  padding: 20px 10px;
  height: 100%;
  position: fixed;
  background-color: #ffffff;
  box-shadow: 0px 0px 14px -8px rgba(0, 0, 0, 0.25);

  overflow-y: auto;
  @media screen and (max-width: 800px) {
    width: 70px;
    padding: 20px 5px;
  }

  @media screen and (max-width: 600px) {
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-around;
    padding: 3px 10px;
    bottom: 0;
    border-top: 1px solid #cdcdcd;
  }

  @media screen and (max-width: 500px) {
    flex-direction: row;
    padding: 0px 10px;
    justify-content: space-between;
    height: 60px;
  }
`;

const NavLinkLeft = styled(NavLink)`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  color: #9e9e9e;
  padding: 30px 0px;

  &:hover {
    color: #0d273a;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 800px) {
    font-size: 32px;
  }
  @media screen and (max-width: 600px) {
    padding: 3px 10px;
    font-size: 24px;
  }
`;

const Beta = styled.div`
  width: 100%;
  text-align: right;
  font-size: 14px;
  color: #000;
  font-style: italic;
`;

const LinkDescription = styled.div`
  font-size: 12px;
`;

// styled components for navbar right

const NavRight = styled.div`
  z-index: 1000;
`;
const NavTrayTop = styled.div`
  text-align: right;
  padding: 20px 50px;

  @media screen and (max-width: 600px) {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const NavLogoRight = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    img {
      width: 100px;
      border-radius: 10px;
    }
  }
`;

const ToggleButton = styled(BiUserCircle)`
  font-size: 42px;
  &:hover {
    color: #3a2dce;
    cursor: pointer;
  }
`;

const Backdrop = styled.div`
  /* position:fixed;
    background-color:rgba(255, 253, 253,0.8);
    top:0;
    left:0;
    width:100vw;
    min-height:100vh; */
  z-index: 1000;
  position: fixed;
  min-width: 350px;
  position: fixed;
  height: 100vh;
  overflow-y: auto;
  top: 0;
  right: 0;
  box-shadow: 1px 0px 14px -8px rgba(0, 0, 0, 0.75);
  @media screen and (max-width: 600px) {
    min-width: 100%;
  }
`;

const RightNavbar = styled.nav`
  z-index: 1000;
  position: absolute;
  width: 350px;
  ${'' /* padding: 20px 30px; */}
  min-height: 100vh;
  background-color: #ffffff;
  border-left: 0.5px solid #e5e5e5;
  right: 0;
  top: 0;
  @media screen and (max-width: 600px) {
    width: 100%;
  }
`;

const NavElementRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  margin-top: 20px;
`;
const CloseButtonContainer = styled.div`
  width: 100%;
  padding: 10px;
  text-align: left;
`;
const CloseButton = styled(IoMdCloseCircle)`
  font-size: 42px;
  color: #6d6d6d;
  &:hover {
    color: #3a2dce;
    cursor: pointer;
  }
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%50%;
  border: 5px solid #e6e6e6;
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
`;

const Name = styled.h1`
  padding-top: 20px;
  text-transform: uppercase;
  color: #3f3f3f;
`;

const NavLinkContainerRight = styled.div`
  border-top: 1px solid #cdcdcd;
  width: 100%;
  padding: 15px 20px;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 20px;
  @media screen and (max-width: 600px) {
    grid-template-columns: 1fr 3fr 1fr;
    padding: 15px 20px;
  }
`;

const NavLinkRight = styled(Link)`
  text-align: left;
  text-decoration: none;
  color: #3f3f3f;
  font-size: 17px;
  align-self: center;
  font-weight: 500;
  width: auto;
  &:hover {
    color: #3a2dce;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    padding-left: 10px;
  }
`;

const IconRight = styled.img`
  width: 28px;
  @media screen and (max-width: 600px) {
    justify-self: center;
    align-self: center;
  }
  @media screen and (max-width: 500px) {
    justify-self: right;
  }
`;

const Footer = styled.div`
  font-weight: bold;
  color: #3f3f3f;
  font-size: 14px;
  padding-top: 20px;
`;

const Heart = styled(FaRegHeart)`
  color: red;
`;

const NavArrow = styled(BsArrowRight)`
  align-self: center;
  color: #3a2dce;
  font-size: 20px;
  position: fixed;
`;
const ButtonContainer = styled.div`
  padding-right: 155px;
  padding-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  height: 75px;
  z-index: 1000;
  @media screen and (max-width: 600px) {
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
