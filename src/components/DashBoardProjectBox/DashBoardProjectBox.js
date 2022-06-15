import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { firestore } from '../../firebase/firebase';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DashBoardProjectBox = ({DashboardData, type, DeleteHandler}) => {
  const user = useSelector((state) => state.user.currentUser);
  const history = useHistory();

  return (
    <>
      <ProjectBox>
        <ProjectBoxContent>
          <ProjectBoxContentLeft>
            <ProjectBoxHeading>{DashboardData.projectData.title}</ProjectBoxHeading>
            <p style={{ fontSize: '12px', color: '#827FA5' }}>
              {DashboardData.projectData.description}
            </p>
            <Chip
              style={{
                color: DashboardData.isCompleted ? 'white' : '#ED841F',
                backgroundColor: DashboardData.isCompleted
                  ? 'green'
                  : 'rgba(237, 132, 31, 0.4)',
                fontSize: '10px',
                fontWeight: 700,
              }}
            >
              {DashboardData.isCompleted ? 'Completed' : 'In Progress'}
            </Chip>
          </ProjectBoxContentLeft>
          <ProjectBoxContentRight>
            {DashboardData.isCompleted === false ? (
              <>
                {/* `` */}
                <PrimaryButton
                  to={
                    type === 'project'
                      ? `/projects/${DashboardData.projectData.docId[0]}/submit`
                      : `/challenges/${DashboardData.projectData.docId[0]}/submit`
                  }
                >
                  Submit
                </PrimaryButton>
                <SeconadaryButton onClick={() => DeleteHandler(DashboardData.projectData.docId[0])}>
                {/* <SeconadaryButton> */}
                  Delete
                </SeconadaryButton>
              </>
            ) : (
              <>
                {/* <PrimaryButtonExternal href={data.demoLink}> */}
                <PrimaryButtonExternal>
                  Demo
                </PrimaryButtonExternal>
                {/* <SeconadaryButtonExternal href={data.githubLink}> */}
                <SeconadaryButtonExternal>
                  Github Repo
                </SeconadaryButtonExternal>
              </>
            )}
          </ProjectBoxContentRight>
        </ProjectBoxContent>
      </ProjectBox>
    </>
  );
};



export default DashBoardProjectBox;

const ProjectBox = styled.div`
  display: flex;
  width: 100%;
  height: 174px;
  background-color: white;
  border: 1px solid #cecce3;
  border-radius: 10px;
  margin-top: 20px;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const ProjectBoxContent = styled.div`
  display: flex;
  width: 90%;
  height: 90%;
  @media (max-width: 496px) {
    flex-direction: column;
    margin-top: 17px;
    margin-bottom: 17px;
  }
`;

const ProjectBoxContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-basis: 70%;
  height: 100%;
`;

const ProjectBoxContentRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 30%;
  height: 100%;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const ProjectBoxHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #000000;
`;

const Chip = styled.div`
  display: flex;
  width: 80px;
  height: 25px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    margin-top: 15px;
    margin-bottom: 15px;
  }
`;

const PrimaryButton = styled(Link)`
  display: flex;
  height: 35px;
  width: 60%;
  border: none;
  background-color: ${(props) => (props.disabled ? 'grey' : '#3a2dce')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;

  @media (max-width: 496px) {
    margin-bottom: 0;
    width: 45%;
  }
`;

const SeconadaryButton = styled(Link)`
  display: flex;
  height: 35px;
  width: 60%;
  text-decoration: none;
  border: none;
  background-color: #ffffff;
  background-color: ${(props) => (props.disabled ? '#eeeeee' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 5px;
  color: #827fa5;
  font-weight: 700;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecce3;
  margin-top: 10px;
  @media (max-width: 496px) {
    margin-top: 0;
    width: 45%;
  }
`;

const PrimaryButtonExternal = styled.a`
  display: flex;
  height: 35px;
  width: 60%;
  border: none;
  background-color: ${(props) => (props.disabled ? 'grey' : '#3a2dce')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 5px;
  color: white;
  font-weight: 700;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  text-decoration: none;

  @media (max-width: 496px) {
    margin-bottom: 0;
    width: 45%;
  }
`;

const SeconadaryButtonExternal = styled.a`
  display: flex;
  height: 35px;
  width: 60%;
  text-decoration: none;
  border: none;
  background-color: #ffffff;
  background-color: ${(props) => (props.disabled ? '#eeeeee' : '#ffffff')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  border-radius: 5px;
  color: #827fa5;
  font-weight: 700;
  font-size: 17px;
  justify-content: center;
  align-items: center;
  border: 1px solid #cecce3;
  margin-top: 10px;
  @media (max-width: 496px) {
    margin-top: 0;
    width: 45%;
  }
`;
