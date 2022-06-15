import React, { useEffect } from "react";
import styled from "@emotion/styled";
import { useDispatch, useSelector } from "react-redux";
import DashBoardProjectBox from "../DashBoardProjectBox/DashBoardProjectBox";
import { firestore } from "../../firebase/firebase";
import { deleteChallenge, deleteProject } from "../../reducers/dashboard/dashboard.actions";

const DashboardBottomComponent = ({ buttonState, setINITIAL_STATE_ }) => {
  const dispatch = useDispatch();

  const DashboardData = useSelector((state) => state.dashboard);
  const user = useSelector((state) => state.user.currentUser);

  const DeleteChallengeHandler = async (id) => {
    try {
      // let tempData = []
      const tempData = 
        DashboardData.challenge.inProgress.filter(
          (el) => el.projectData.docId[0] != id
        );
      const tempId = DashboardData.challenge.allId.delete(id)
      dispatch(deleteChallenge({tempData, tempId}))
      await firestore
        .collection(`enroll/${user.id}/challenges`)
        .doc(id)
        .delete().then(() => alert("Deleted"));
      
    } catch (error) {
      console.log(error);
    }
  };

  const DeleteProjectHandler = async (id) => {
    try {
      // let tempData = []
      const tempData = DashboardData.project.inProgress.filter(
        (el) => el.projectData.docId[0] != id
      );
      const tempId = DashboardData.challenge.allId.delete(id)
      dispatch(deleteProject({tempData, tempId}));
      await firestore.collection(`enroll/${user.id}/projects`).doc(id).delete().then(() => alert("Deleted"));
        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <DashboardBottomContent>
        <DashboardBottom>
          {buttonState.Projects &&
          buttonState.InProgress &&
          DashboardData.project.inProgress.length != 0 ? (
            DashboardData.project.inProgress.map((doc, index) => {
              return (
                <DashBoardProjectBox
                  key={index}
                  DashboardData={doc}
                  type="project"
                  DeleteHandler={DeleteProjectHandler}
                />
              );
            })
          ) : buttonState.Projects &&
            buttonState.Completed &&
            DashboardData.project.completed.length != 0 ? (
            DashboardData.project.completed.map((doc, index) => {
              return (
                <DashBoardProjectBox
                  key={index}
                  DashboardData={doc}
                  type="project"
                />
              );
            })
          ) : DashboardData.project.completed.length === 0 &&
            buttonState.Completed &&
            buttonState.Projects ? (
            <h1>No Projects Completed Yet</h1>
          ) : DashboardData.project.inProgress.length === 0 &&
            buttonState.InProgress &&
            buttonState.Projects ? (
            <h1>No Project in Progress</h1>
          ) : null}
          {buttonState.Challenges &&
          buttonState.InProgress &&
          DashboardData.challenge.inProgress.length != 0 ? (
            DashboardData.challenge.inProgress.map((doc, index) => {
              return (
                <DashBoardProjectBox
                  key={index}
                  DashboardData={doc}
                  type="challenge"
                  DeleteHandler={DeleteChallengeHandler}
                />
              );
            })
          ) : buttonState.Challenges &&
            buttonState.Completed &&
            DashboardData.challenge.completed.length != 0 ? (
            DashboardData.challenge.completed.map((doc, index) => {
              return (
                <DashBoardProjectBox
                  key={index}
                  DashboardData={doc}
                  type="challenge"
                />
              );
            })
          ) : DashboardData.challenge.completed.length === 0 &&
            buttonState.Completed &&
            buttonState.Challenges ? (
            <h1>No Challenges Completed Yet</h1>
          ) : DashboardData.challenge.inProgress.length === 0 &&
            buttonState.InProgress &&
            buttonState.Challenges ? (
            <h1>No Challenge in Progress</h1>
          ) : null}
        </DashboardBottom>
      </DashboardBottomContent>
    </>
  );
};

const DashboardBottom = styled.div`
  display: flex;
  width: 100%;
  min-height: 65vh;
  justify-content: center;
  align-items: center;
`;

const DashboardBottomContent = styled.div`
  display: flex;
  width: 60%;
  min-height: 65vh;
  flex-direction: column;
  padding: 10px 0px 100px 0px;

  @media (max-width: 496px) {
    width: 90%;
  }
`;

export default DashboardBottomComponent;
