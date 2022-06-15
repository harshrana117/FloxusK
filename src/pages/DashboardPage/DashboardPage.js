import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import styled from '@emotion/styled';
import CompletionDisplay from '../../components/NewDashboardPage/CompletionDisplay';
import DashboardProjectList from '../../components/NewDashboardPage/DashboardProjectList';
import { useSelector } from 'react-redux';

const DashboardPage = () => {
  const [currentTabValue, setcurrentTabValue] = React.useState(0);
  const handleTabChange = (event, newValue) => {
    setcurrentTabValue(newValue);
  };

  const { challenge, project } = useSelector((state) => state.dashboard);

  return (
    <Container>
      <Tabs value={currentTabValue} onChange={handleTabChange} centered>
        <Tab label='Projects' />
        <Tab label='Challenges' />
      </Tabs>
      <ContentWrapper
        style={{
          display: `${currentTabValue === 0 ? 'block' : 'none'}`,
        }}
      >
        <CompletionDisplay
          type='project'
          enrolled={project.completed.length + project.inProgress.length}
          completed={project.completed.length}
        />
        <DashboardProjectList data={project} baseLink='projects' />
      </ContentWrapper>
      <ContentWrapper
        style={{
          display: `${currentTabValue === 1 ? 'block' : 'none'}`,
        }}
      >
        <CompletionDisplay
          type='challenge'
          enrolled={challenge.completed.length + challenge.inProgress.length}
          completed={challenge.completed.length}
        />
        <DashboardProjectList data={challenge} baseLink='challenges' />
      </ContentWrapper>
    </Container>
  );
};

export default DashboardPage;

const Container = styled.div`
  padding-top: 50px;
`;

const ContentWrapper = styled.div``;
