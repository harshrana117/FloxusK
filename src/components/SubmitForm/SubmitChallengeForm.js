import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { firestore } from '../../firebase/firebase';
import { useHistory } from 'react-router';
import { useParams} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { submitChallenge } from '../../reducers/dashboard/dashboard.actions';

const SubmitChallengeForm = ({isCompleted,isEnrolled, user}) => {
  const dispatch = useDispatch();
  const { id } = useParams()
  const history = useHistory();
  const completedData = useSelector(
    (state) => state.dashboard.challenge.completed
  );
  const inProgressData = useSelector(
    (state) => state.dashboard.challenge.inProgress
  );

  const status = useSelector((state) => state.dashboard.challenge.allId)
  const [loading, setLoading] = useState(false);
  const [githubLink, setGithubLink] = useState(null);
  const [demoLink, setDemoLink] = useState(null);
  const [description, setDescription] = useState(null);
  const [boxTitle, setBoxTitle] = useState(null);

  let filtered = []
  let restData = []

  useEffect(() => {
    inProgressData.map((item) => {
      if(item.projectData.docId[0]===id){
        setBoxTitle(item.projectData.title)
      }
    })
  },[])
  console.log(inProgressData);

  const demoLinkHandler = (e) => {
    setDemoLink(e.target.value);
  };
  const githubLinkHandler = (e) => {
    setGithubLink(e.target.value);
  };

  const descriptionLinkHandler = (e) => {
    setDescription(e.target.value);
  };


  const submitHandler = async (e) => {
    if (githubLink == null || demoLink == null) {
      alert('some fields are empty');
    } else {
      e.preventDefault();
      filtered = inProgressData.filter(
        (element) => element.projectData.docId[0] === id
      );
        restData = inProgressData.filter((element) => element.projectData.docId[0] !== id)
        let tempInProgress = []
        let tempCompleted = []
        let tempAllId = {}
        setLoading(true); 

        tempInProgress = [...restData]
        tempCompleted = [...filtered, ...completedData]
        tempAllId = {...status, [id]: true}
  
        dispatch(submitChallenge({tempCompleted, tempInProgress, tempAllId}))
  
  
        const SubmissionDetails = {
          githubLink: [githubLink],
          demoLink: [demoLink]
        }
        try{
          await firestore.collection(`enroll/${user.id}/challenges`).doc(`${id}`).update({
            SubmissionDetails,
            isCompleted: true
          }).then(() => {
            alert("Updated Data")
          })      
        } catch(error){
          console.log(error);
        }
  
        history.push('/dashboard');

    }
  };
  return (
    <SubmissionWrapper>
      <SubmissionContainer>
        <SubmissionLeft>
          <Container>
            <Title>🎉 Submit Your Solution</Title>
            {(isCompleted && isEnrolled) ? (
              <CompletedText>
                You have already completed this track with flying colors..
              </CompletedText>
            ) : (
              <>
                <FormContainer>
                    <Form>
                      <Input
                        // placeholder="demo link"
                        onChange={demoLinkHandler}
                        value={boxTitle}
                        required
                      />
                      <Input
                        placeholder="demo link"
                        onChange={demoLinkHandler}
                        required
                      />
                      <Input
                        placeholder="github link"
                        onChange={githubLinkHandler}
                        required
                      />

                      <Textarea
                        placeholder="Describe your approach"
                        onChange={descriptionLinkHandler}
                        required
                      />
                      <Button onClick={submitHandler}>
                        Submit Solution &rarr;
                      </Button>
                    </Form>
                </FormContainer>
              </>
            )}
          </Container>
        </SubmissionLeft>
        <SubmissionRight>
          <SubmissionRightContent>
            <InstructionsBox>
              <ContentWrapper>
                <TopicHeading>🙌 Guidelines</TopicHeading>
                <Description>
                  ✅Set up your environment
                </Description>
                <Description>
                  ✅Create a public Github Repository
                </Description>
                <Description>
                  ✅Write your project code
                </Description>
                <Description>
                  ✅Get a demo link
                </Description>
                <Description>
                  ✅Submit your solution
                </Description>
              </ContentWrapper>
            </InstructionsBox>
            <InstructionsYellow>
              <ContentWrapper>
                <TopicHeading>🙌 Tips & Tricks</TopicHeading>
                <Description>
                  ✅Make sure you fulfill all the user stories
                </Description>
                <Description>
                  ✅Make sure you fulfill all the user stories
                </Description>
                <Description>
                  ✅Make sure you fulfill all the user stories
                </Description>
              </ContentWrapper>
            </InstructionsYellow>
          </SubmissionRightContent>
        </SubmissionRight>
      </SubmissionContainer>
    </SubmissionWrapper>
  );
};

export default SubmitChallengeForm;

const SubmissionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: white;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const SubmissionContainer = styled.div`
  display: flex;
  width: 80%;
  height: 100vh;

  @media (max-width: 496px) {
    height: auto;
    flex-direction: column;
  }
`;

const SubmissionLeft = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100vh;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const SubmissionRight = styled.div`
  display: flex;
  flex-basis: 50%;
  height: 100vh;
  justify-content: center;
  align-items: center;

  @media (max-width: 496px) {
    height: auto;
  }
`;

const SubmissionRightContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 90%;
  ${'' /* justify-content: space-between; */}

  @media(max-width:496px) {
    width: 100%;
    margin-bottom: 4%;
    margin-top: 3%;
  }
`;

const InstructionsBox = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #f4f3f9;
  border: 2px solid #dad1fb;
  justify-content: center;
  align-items: center;
`;

const InstructionsYellow = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #f9fbe7;
  border: 2px solid #ffda4d;
  margin-top: 25px;
  justify-content: center;
  align-items: center;
`;

const ContentWrapper = styled.div`
  display: flex;
  height: 85%;
  width: 90%;
  flex-direction: column;
`;

const TopicHeading = styled.div`
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 20px;
`;

const Description = styled.div`
  font-weight: 400;
  font-size: 15px;
  margin-bottom: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  ${'' /* align-items: center; */}
  flex-direction: column;
  ${'' /* padding: 20px; */}
  width: 100%;
  ${'' /* background-color: black; */}
`;

const Title = styled.h1`
  text-transform: uppercase;
  color: black;
  ${'' /* text-align: center; */}
  font-size: 22px;
  padding-bottom: 50px;

  @media (max-width: 496px) {
    font-size: 20px;
    padding-bottom: 30px;
  }
`;

const CompletedText = styled.h3`
  font-weight: normal;
  color: rgba(0, 0, 0, 0.7);
  font-size: 24px;
  text-align: justify;
`;

const FormContainer = styled.div`
  display: flex;
  ${'' /* justify-content: center; */}
  align-items: center;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  ${'' /* justify-content: center; */}
  ${'' /* align-items: center; */}
  flex-direction: column;
  width: 100%;
  ${'' /* background-color: black; */}
`;

const Input = styled.input`
  margin-top: 25px;
  padding: 10px;
  font-size: 17px;
  width: 340px;
  ${'' /* border: none; */}
  background-color: #f4f3f9;
  outline: none;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: lighter;
  height: 40px;
  border: 1px solid #cdcdcd;

  @media (max-width: 496px) {
    width: 100%;
  }
`;

const Textarea = styled.textarea`
  margin-top: 25px;
  padding: 10px;
  font-size: 17px;
  width: 340px;
  ${'' /* border: none; */}
  background-color: #f4f3f9;
  outline: none;
  border-radius: 2px;
  color: rgba(0, 0, 0, 0.7);
  font-weight: lighter;
  ${'' /* height: 40px; */}
  border: 1px solid #cdcdcd;

  @media (max-width: 496px) {
    width: 100%;
  }
`;

const Button = styled.button`
  display: flex;
  width: 200px;
  height: 40px;
  border: none;
  background: linear-gradient(90deg, #3a2dce 15.43%, #3a2dce 50%);
  color: white;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
  margin-top: 10%;
  text-decoration: none;
  cursor: pointer;
  font-size: 17px;
`;
