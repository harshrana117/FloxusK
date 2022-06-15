import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Paper from '@mui/material/Paper';
import { makeStyles } from '@mui/styles';
import { FiExternalLink } from 'react-icons/fi';
import { useSelector } from 'react-redux';
import userIcon from '../../assets/svg/userIcon.svg';

const useStyles = makeStyles({
  paperStyle: {
    display: 'flex',
    width: '100%',
    height: '300px',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0 0 20px 0',
  },
});

const ProfileCard = () => {
  const classes = useStyles();
  const user = useSelector((state) => state.user.currentUser);
  const [userName, setUserName] = useState('');
  const [userImage, setUserImage] = useState(userIcon);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    let mounted = true;
    if (user) {
      setUserImage(user.photoURL);
      setUserName(user.displayName);
      setUserEmail(user.email);
    }
    return function cleanup() {
      mounted = false;
    };
  }, [user]);
  return (
    <Paper className={classes.paperStyle}>
      <BasicDetails>
        <ImageContainer>
          <Image src={userImage} />
        </ImageContainer>
        <Name>{userName}</Name>
        <Status>
          <span>{userEmail}</span>
        </Status>
      </BasicDetails>
    </Paper>
  );
};

export default ProfileCard;

const BasicDetails = styled.div`
  max-width: 320px;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  width: auto;
  height: 150px;
  width: 150px;
  object-fit: cover;
  border-radius: 50%;
`;

const Name = styled.h2`
  text-align: center;
  text-transform: uppercase;
  color: rgba(0, 0, 0, 0.8);
  padding-top: 10px;
`;

const Status = styled.p`
  text-align: center;
  color: rgba(0, 0, 0, 0.5);
  span {
    color: darkblue;
  }
`;

const PreviewProfileButton = styled.div`
  position: absolute;
  top: 20px;
  right: 50px;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: underline;

  p {
    color: rgba(0, 0, 0, 0.6);
  }

  span {
    margin-left: 5px;
    font-size: 18px;
    color: darkblue;
  }
`;
