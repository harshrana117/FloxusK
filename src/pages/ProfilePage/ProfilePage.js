import React from 'react';
import styled from '@emotion/styled';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import EditProfileForm from '../../components/EditProfileForm/EditProfileForm';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
  const eduData = useSelector((state) => state.profile);
  console.log(eduData);
  return (
    <Container>
      <ProfileContainer>
        <ProfileCard />
        <EditProfileForm />
      </ProfileContainer>
    </Container>
  );
};

export default ProfilePage;

const Container = styled.div`
  margin-left: 100px;
  margin-bottom: 100px;
  width: calc(100vw - margin-left);
  padding: 20px;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
