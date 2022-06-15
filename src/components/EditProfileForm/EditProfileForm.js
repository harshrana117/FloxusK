import React from 'react';
import EducationalDetailsForm from '../ProfileForms/EducationalDetailsForm';
import ProjectsForm from '../ProfileForms/ProjectsForm';
import ExperienceForm from '../ProfileForms/ExperienceForm';
import styled from '@emotion/styled';
import { Tab, Tabs } from '@mui/material';

const EditProfileForm = () => {
  const [currentTabValue, setcurrentTabValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setcurrentTabValue(newValue);
  };

  return (
    <Container>
      <TabsContainer>
        <Tabs value={currentTabValue} onChange={handleTabChange} centered>
          <Tab label='Educational Details' />
          <Tab label='Projects' />
          <Tab label='Experience' />
        </Tabs>
      </TabsContainer>
      <ProfileFormContainer>
        {currentTabValue === 0 ? <EducationalDetailsForm /> : ''}
        {currentTabValue === 1 ? <ProjectsForm /> : ''}
        {currentTabValue === 2 ? <ExperienceForm /> : ''}
      </ProfileFormContainer>
    </Container>
  );
};

export default EditProfileForm;

const Container = styled.div`
  width: 100%;
`;

const ProfileFormContainer = styled.div`
  /* margin-left: 20px; */
  width: 100%;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);
`;

const TabsContainer = styled.div`
  padding-bottom: 50px;
`;
