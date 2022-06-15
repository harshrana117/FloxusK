import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, Link } from "react-router-dom";
import styled from "@emotion/styled";
import { firestore } from "../../firebase/firebase";
import Loader from "../../components/Loader/Loader";
import { startChallenge } from "../../reducers/dashboard/dashboard.actions";
import Button from "@mui/material/Button";
import {LoadingButton} from "@mui/lab";
import DoneOutlineTwoToneIcon from "@mui/icons-material/DoneOutlineTwoTone";
// import Button from '../../components/Button/Button.component';

const ChallengeDetailsPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const inProgressData = useSelector(
    (state) => state.dashboard.challenge.inProgress
  );

  const [challengeDetail, setChallengeDetail] = useState([]);
  const [enrolled, setEnrolled] = useState(false);
  const [loading, setLoading] = useState(true);
  const [loading1, setLoading1] = React.useState(false);
  const user = useSelector((state) => state.user.currentUser);
  const challengeAllId = useSelector((state) => state.dashboard.challenge.allId);


  const [dataInProgress, setDataInProgress] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (inProgressData !== null) {
      setDataInProgress([...inProgressData]);
    }
    try {
      firestore
        .collection(`challenges`)
        .doc(id)
        .get()
        .then((querySnapshot) => {
          const data = querySnapshot.data();
          setChallengeDetail(data);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }

    return function cleanup() {
      mounted = false;
    };
  }, [user, inProgressData]);

  const StartChallenge = async () => {
    setLoading1(true);
    challengeAllId[id] = false;
    try {
      const enrolledAt = new Date();
      const isCompleted = false;
      const projectData = {
        title: challengeDetail.title,
        difficulty: challengeDetail.difficulty,
        techUse: challengeDetail.categories,
        docId: [id],
      };
      const tempData = [
        { enrolledAt, isCompleted, projectData },
        ...inProgressData,
      ];
      let tempId = { ...challengeAllId, [id]: false };
      if (
        Object.keys(challengeAllId).length === 0 &&
        challengeAllId.constructor === Object
      ) {
        tempId = { [id]: false };
      }

      dispatch(startChallenge({ tempData, tempId }));

      const enrollRef = firestore.doc(`enroll/${user.id}/challenges/${id}`);
      const snapshot = await enrollRef.get();

      if (!snapshot.exists) {
        try {
          await enrollRef
            .set({
              enrolledAt,
              isCompleted,
              projectData,
            })
            .then(() => {
              alert("Enrolled Successfully");
            });

          setEnrolled(true);
          setLoading1(false);
        } catch (error) {
          console.log(error);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Wrapper>
      {loading ? (
        <Loader />
      ) : (
        <>
          <ProjectDetailsWrapper>
            <ProjectDetailsContainer>
              <ProjectLeftContainer>
                <TitleContainer>
                  <TitleContainerContent>
                    <Heading>{challengeDetail.title}</Heading>
                    <p className="description">
                      {challengeDetail.description}
                    </p>
                    <CategoriesContainer>
                      {challengeDetail.categories.map((category, index) => {
                        return (
                          <ChipCategory key={index+1}>
                            <p>{category}</p>
                          </ChipCategory>
                        );
                      })}
                    </CategoriesContainer>
                  </TitleContainerContent>
                </TitleContainer>
                <SubTitle>Introduction</SubTitle>
                <p
                  style={{
                    marginTop: "10px",
                    fontSize: "15px",
                    color: "#444444",
                  }}
                >
                  {challengeDetail.description}
                </p>

                <iframe
                  // style="border: 1px solid rgba(0, 0, 0, 0.1);"
                  style={{
                    border: "none",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                  width="800"
                  height="450"
                  src={challengeDetail.figma}
                ></iframe>
                <SubTitle>Suggested Implementation</SubTitle>
                <ul>
                  {challengeDetail.implementation.map((item, index) => {
                    return <li key={index+1}>{item}</li>;
                  })}
                </ul>

                <SubTitle>Submission Guidelines</SubTitle>
                <ul>
                  {challengeDetail.submission.map((item, index) => {
                    return <li key={index+1}>{item}</li>;
                  })}
                </ul>

                <SubTitle>Requirements</SubTitle>
                <ul>
                  {challengeDetail.requirements.map((item, index) => {
                    return <li key={index+1}>{item}</li>;
                  })}
                </ul>

                <SubTitle>References</SubTitle>
                <ul>
                  {challengeDetail.refrences.map((item,index) => {
                    return (
                      <li key={index+1}>
                        {item.title}{" "}
                        <a href={item.link} target="_blank">
                          Click Here
                        </a>{" "}
                      </li>
                    );
                  })}
                </ul>
              </ProjectLeftContainer>
              {user === null ? null : ( // </StartButton></ProjectRightContainer> //   Login to Continue // <StartButton onClick = {() =>  <Redirect to="/signIn" />}> // <ProjectRightContainer>
                <ProjectRightContainer>
                  <RSVPContainer>
                    <InstructionBox>
                      <DoneOutlineTwoToneIcon />
                      <p>Start Project</p>{" "}
                    </InstructionBox>

                    <InstructionBox>
                      <DoneOutlineTwoToneIcon />
                      <p>Follow Instructions</p>{" "}
                    </InstructionBox>

                    <InstructionBox>
                      <DoneOutlineTwoToneIcon />
                      <p>Submit Project</p>{" "}
                    </InstructionBox>
                    {challengeAllId[id] === undefined ? (
                      <LoadingButton
                        variant="contained"
                        onClick={StartChallenge}
                        loading={loading1}
                        size="large"
                        style={{
                          backgroundColor: "#881BBB",
                          width: "80%",
                          marginTop: "10px",
                        }}
                        disableElevation
                      >
                        Start Challenge
                      </LoadingButton>
                    ) : challengeAllId[id] ? (
                      <Button
                        variant="contained"
                        size="large"
                        style={{
                          width: "80%",
                          marginTop: "10px",
                        }}
                        disabled={true}
                      >
                        Completed
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        size="large"
                        style={{
                          backgroundColor: "#881BBB",
                          width: "80%",
                          marginTop: "10px",
                        }}
                      >
                        <Link className="link" to={`/challenges/${id}/submit`}>
                          Submit Challenge
                        </Link>
                      </Button>
                    )}
                  </RSVPContainer>
                </ProjectRightContainer>
              )}
            </ProjectDetailsContainer>
          </ProjectDetailsWrapper>
        </>
      )}
    </Wrapper>
  );
};

const ProjectDetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  justify-content: center;
  align-items: center;
  background-color: white;
`;

const ProjectDetailsContainer = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  margin-bottom: 10%;

  @media (max-width: 496px) {
    width: 85%;
    flex-direction: column;
  }
`;

const ProjectLeftContainer = styled.div`
  display: flex;
  flex-basis: 60%;
  flex-direction: column;

  ul {
    margin-left: 30px;

    li {
      margin-top: 7px;
      color: #444444;
      font-size: 15px;
    }
  }
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  border-radius: 5px;
  background: linear-gradient(
    98.33deg,
    rgb(164, 37, 223) 0%,
    rgb(255, 205, 130) 100.53%
  );
  justify-content: center;
  align-items: center;
  margin: 20px 0 20px 0;
`;

const TitleContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: 90%;
  margin: 3% 0 3% 0;

  .description {
    color: #ffffff;
  }
`;

const PerksSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  border: 2px solid #0d1b93;
  background-color: #c7d3fc;
  border-radius: 5px;
`;

const PerkContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  height: auto;
  margin-bottom: 10px;

  .heading {
    font-size: 25px;
    font-weight: 700;
    color: black;
    margin-bottom: 10px;
    margin-top: 10px;
  }
`;

const ChipCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #cecece;
  background-color: #ffffff;
  width: 120px;
  height: 30px;
  border-radius: 15px;
  margin-top: 20px;
  margin-right: 10px;

  p {
    padding: 7px;
    font-size: 13px;
  }
`;

const Heading = styled.p`
  font-size: 2.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-top: 2%;
  margin-bottom: 2%;
`;

const SubTitle = styled.div`
  font-size: 1 em;
  font-weight: 700;
  color: black;
  margin-top: 30px;
  margin-bottom: 10px;
`;

const ProjectRightContainer = styled.div`
  display: flex;
  flex-basis: 40%;
  height: auto;
  flex-direction: column;
  align-items: center;
`;

const RSVPContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 230px;
  justify-content: center;
  align-items: center;
  ${"" /* border: 1px solid #cecece; */}
  margin-top: 20px;
  ${"" /* background: linear-gradient(44deg, #1b0068 40%, #6d3cea 105%); */}
  ${"" /* background: black; */}

  p {
    margin-left: 10px;
    font-weight: 500;
  }

  .link {
    color: white;
    text-decoration: none;
  }
`;

const InstructionBox = styled.div`
  display: flex;
  width: 80%;
  height: 50px;
  align-items: center;
`;

const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    padding: 0px;
  }
`;
const CategoriesContainer = styled.div`
  display: flex;
`;

export default ChallengeDetailsPage;
