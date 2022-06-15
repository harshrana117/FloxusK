import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { firestore } from "../../firebase/firebase";
import SubmitChallengeForm from "../../components/SubmitForm/SubmitChallengeForm";
import styled from "@emotion/styled";
import Loader from "../../components/Loader/Loader";

const SubmitChallengePage = () => {
  const { id } = useParams();
  const [isCompleted, setIsCompleted] = useState(null);
  const [isEnrolled, setIsEnrolled] = useState(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.currentUser);
  const challengeStatus = useSelector(
    (state) => state.dashboard.challenge.allId[id]
  );
  const [DashboardData, setDashboardData] = useState([]);

  React.useLayoutEffect(() => {
    if (challengeStatus === true) {
      setIsCompleted(true);
      setIsEnrolled(true);
      setLoading(false);
    }

    if (!challengeStatus === true) {
      setIsCompleted(false);
      setIsEnrolled(true);
      setLoading(false);
    }
  }, [challengeStatus]);

  return (
    <Container>
      {loading ? (
        <Loader />
      ) : challengeStatus === undefined ? (
        <h1>You have not enrolled in this Challenge</h1>
      ) : (
        <SubmitChallengeForm
          isCompleted={isCompleted}
          isEnrolled={isEnrolled}
          user={user}
          title="Hello world"
          data={DashboardData}
        />
      )}
    </Container>
  );
};

export default SubmitChallengePage;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
