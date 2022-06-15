import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import SubmitProjectForm from "../../components/SubmitForm/SubmitProjectForm";
import styled from "@emotion/styled";
import Loader from "../../components/Loader/Loader";

const SubmitProjectPage = () => {
    const { id } = useParams()
    const [isCompleted, setIsCompleted] = useState(null)
    const [isEnrolled, setIsEnrolled] = useState(null);
    const [loading, setLoading] = useState(true)
    const user = useSelector(state => state.user.currentUser)
    const projectStatus = useSelector((state) => state.dashboard.project.allId[id]);
    const [DashboardData, setDashboardData] = useState([]);

    React.useLayoutEffect(() => {
      if(projectStatus === true){
          setIsCompleted(true)
          setIsEnrolled(true)
          setLoading(false)
      }

      if(!projectStatus === true){
          setIsCompleted(false)
          setIsEnrolled(true)
          setLoading(false)
      }
}, [projectStatus]);

  return (
    <Container>
    {loading ? (
      <Loader />
    ) : (projectStatus === undefined) ? (
      <h1>You have not enrolled in this project</h1>
    ) : (
      <SubmitProjectForm
        isCompleted={isCompleted}
        isEnrolled={isEnrolled}
        user={user}
        title="Hello World"
        data={DashboardData}
      />
    )}
  </Container>
  );
};

export default SubmitProjectPage;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
