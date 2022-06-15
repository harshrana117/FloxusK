/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router";
import styled from "@emotion/styled";
import logo from "../../assets/svg/logo.svg";
import userIcon from "../../assets/svg/userIcon.svg";
import { BiUserCircle } from "react-icons/bi";
import { NavbarRight } from "../navbar/Navbar";
import DashBoardProjectBox from "../DashBoardProjectBox/DashBoardProjectBox";
import firebase from "firebase";
// import { useSelector } from "react-redux";
import { firestore } from "../../firebase/firebase";
import Loader from "../Loader/Loader";
import { ButtonGroupUpper } from "./ButtonGroup/upperButtonGroup";
import { ButtonGroupLower } from "./ButtonGroup/lowerButtonGroup";

import { useDispatch, useSelector } from "react-redux";
import { 
  listDashboardChallenges, listDashboardChallengesCompleted, listDashboardChallengesInProgress,
  listDashboardProjects, listDashboardProjectsCompleted, listDashboardProjectsInProgress,
  removeDashboardData 
} from "../../reducers/dashboard/dashboard.actions";
import { DashboardFirebaseDetailsFetch } from "./Dashboard.firebase";

//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE

const Dashboard = () => {

  const dispatch = useDispatch();
  // const reducerProjectData = useSelector((state) => state.dashboard);
  // console.log(reducerProjectData);
  // const location = useLocation();
  // const history = useHistory();

  // state for nav buttons
  // const [upperButtonHandler, setUpperButtonHandler] = useState({
  //   upperButtonGroup: {
  //     challengeButton: false,
  //     projectButton: true,
  //   }})
  // const [lowerButtonHandler, setLowerButtonHandler] = useState({
  //   lowerButtonGroup: {
  //     allEnrolled: true,
  //     inProgress: false,
  //     completed: false
  //   }
  // })
  // console.log(upperButtonHandler);
  // setUpperButtonHandler({...upperButtonHandler,
  //      challengeButton: true
  //    })
  // console.log(upperButtonHandler);
  // const [testing, setTesting] = useState({state:false});
  


  const [challengeTab, setChallengeTab] = useState(false);
  const [projectTab, setProjectTab] = useState(true);
  const [allItemsTab, setAllitemsTab] = useState(true);
  const [enrolledItemsTab, setEnrolledItemsTab] = useState(false);
  const [completedItemsTab, setCompletedItemsTab] = useState(false);

  // dashboard content for projects/challenges
  const [projects, setProjects] = useState(null);
  const [enrolledProjects, setEnrolledProjects] = useState(null);
  const [completedProjects, setCompletedProjects] = useState(null);
  const [challenges, setChallenges]  =useState(null);
  const [enrolledChallenges, setEnrolledChallenges] = useState(null);
  const [completedChallenges, setCompletedChallenges] = useState(null);


  // loading on/off
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.user.currentUser);

  let dashboardData = useSelector((state) => state.dashboard);
 console.log(dashboardData);

  const [INITIAL_STATE_, setINITIAL_STATE_] = useState({
    Projects: true,
    Challenges: false,
    Enrolled: true,
    InProgress: false,
    Completed: false
  });
  // console.log(dashboardData.length != 0);
  
  // console.log(dashboardData.completedChallenges.completedChallengesData.docs)
  // setCompletedChallenges(dashboardData.completedChallenges.completedChallengesData);
  // setCompletedProjects(dashboardData.completedProjects.completedProjectsData);
  // setEnrolledProjects(dashboardData.enrolledProjects.inProgressProjectsData);
  // setEnrolledChallenges(dashboardData.enrolledChallenges.inProgressChallengesData);
  // console.log(enrolledChallenges)
  // console.log(dashboardData);



  const handleChallengeTab = () => {
    setChallengeTab(!challengeTab);
    setProjectTab(!projectTab);
    setAllitemsTab(true);
    setEnrolledItemsTab(false);
    setCompletedItemsTab(false);
  };

  const handleProjectTab = () => {
    setProjectTab(!projectTab);
    setChallengeTab(!challengeTab);
    setAllitemsTab(true);
    setEnrolledItemsTab(false);
    setCompletedItemsTab(false);
  };

  // const handleAllItemsTab = () => {
  //   setAllitemsTab(true);
  //   setEnrolledItemsTab(false);
  //   setCompletedItemsTab(false);
  // };

  // const handleEnrolledItemsTab = () => {
  //   setAllitemsTab(false);
  //   setEnrolledItemsTab(true);
  //   setCompletedItemsTab(false);
  // };

  // const handleCompletedItemsTab = () => {
  //   setAllitemsTab(false);
  //   setEnrolledItemsTab(false);
  //   setCompletedItemsTab(true);
  // };

  const [userName, setUserName] = useState("");
  const [userImg, setUserImg] = useState({ userIcon });

  // DashboardFirebaseDetailsFetch(DashboardData);

  useEffect(async () => {
    let mounted = true;
    if (user) {
      setUserImg(user.photoURL);
      // User is signed in.
      if (mounted) {
        if (projectTab) {
          setProjects([]);
          
          //Fetching challenges and project Data from challenges and projects using id
          //  await DashboardFirebaseDetailsFetch(DashboardData, dispatch);

          //const challengesSnapshot = await firestore.collection(`enroll/${user.id}/challenges`).get();
          // console.log(projectsSnapshot);
          // console.log(challengesSnapshot);
          // console.log(user.id);

          //Firestore Old Code

          // let snapshot = await firestore
          //   .collection("enroll")
          //   .where("userId", "==", user.id)
          //   .where("type", "==", "project")
          //   .get({ source: "cache" });
          // console.log("snapshot:", snapshot);

          // if (!snapshot.exists) {
          //   firestore
          //     .collection("enroll")
          //     .where("userId", "==", user.id)
          //     .where("type", "==", "project")
          //     .get({ source: "server" })
          //     .then((querySnapshot) => {
          //       let res = [];
          //       let completedRes = [];
          //       let enrolledRes = [];
          //       querySnapshot.forEach((doc) => {
          //         res = [...res, doc.data()];
          //         if (doc.data().isCompleted === true) {
          //           completedRes = [...completedRes, doc.data()];
          //         } else {
          //           enrolledRes = [...enrolledRes, doc.data()];
          //         }
          //       });
          //       setProjects(res);
          //       setCompletedProjects(completedRes);
          //       setEnrolledProjects(enrolledRes);
          //     });
          // }
        //   firestore
        //     .collection("enroll")
        //     .where("userId", "==", user.id)
        //     .where("type", "==", "project")
        //     .get({ source: "cache" })
        //     .then((querySnapshot) => {
        //       let res = [];
        //       let completedRes = [];
        //       let enrolledRes = [];
        //       querySnapshot.forEach((doc) => {
        //         res = [...res, doc.data()];
        //         if (doc.data().isCompleted === true) {
        //           completedRes = [...completedRes, doc.data()];
        //         } else {
        //           enrolledRes = [...enrolledRes, doc.data()];
        //         }
        //       });
        //       setProjects(res);
        //       setCompletedProjects(completedRes);
        //       setEnrolledProjects(enrolledRes);
        //     })
        //     .catch((error) => {
        //       console.log("Error getting documents: ", error);
        //     });
        // } else if (challengeTab) {
        //   setProjects([]);

          // let snapshot = await firestore
          //   .collection("enroll")
          //   .where("userId", "==", user.id)
          //   .where("type", "==", "challenge")
          //   .get({ source: "cache" });
          // console.log("snapshot:", snapshot);

          // if (!snapshot.exists) {
          //   firestore
          //     .collection("enroll")
          //     .where("userId", "==", user.id)
          //     .where("type", "==", "challenge")
          //     .get({ source: "server" })
          //     .then((querySnapshot) => {
          //       let res = [];
          //       let completedRes = [];
          //       let enrolledRes = [];
          //       querySnapshot.forEach((doc) => {
          //         res = [...res, doc.data()];
          //         if (doc.data().isCompleted === true) {
          //           completedRes = [...completedRes, doc.data()];
          //         } else {
          //           enrolledRes = [...enrolledRes, doc.data()];
          //         }
          //       });
          //       setProjects(res);
          //       setCompletedProjects(completedRes);
          //       setEnrolledProjects(enrolledRes);
          //     });
          // }
          // firestore
          //   .collection("enroll")
          //   .where("userId", "==", user.id)
          //   .where("type", "==", "challenge")
          //   .get({ source: "cache" })
          //   .then((querySnapshot) => {
          //     let res = [];
          //     let completedRes = [];
          //     let enrolledRes = [];
          //     querySnapshot.forEach((doc) => {
          //       res = [...res, doc.data()];
          //       if (doc.data().isCompleted === true) {
          //         completedRes = [...completedRes, doc.data()];
          //       } else {
          //         enrolledRes = [...enrolledRes, doc.data()];
          //       }
          //     });
          //     setProjects(res);
          //     setCompletedProjects(completedRes);
          //     setEnrolledProjects(enrolledRes);
          //   })
          //   .catch((error) => {
          //     console.log("Error getting documents: ", error);
          //   });
        }
        setUserName(user.displayName);
        setLoading(false);
      }
    } else {
      // No user is signed in.
      setUserName("please sign in to your account");
    }

    return function cleanup() {
      mounted = false;
    };
  }, []);



  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <DashboardMetaDataWrapper>
            <DashboardMetaData>
              <DashboardMetaDataTop>
                <UserContainer>
                  <Image src={userImg} />
                </UserContainer>
                {/* <DashboardMetaDataTopNav /> */}
              </DashboardMetaDataTop>

              <DashboardMetaDataUser>
                <Heading>{userName}</Heading>
              </DashboardMetaDataUser>

              <DashboardMetaDataOption>
                <ButtonGroupUpper state= {INITIAL_STATE_}  setINITIAL_STATE_ = {setINITIAL_STATE_}/>
              </DashboardMetaDataOption>

              <DashboardMetaDataOption>
                {projectTab ? (
                  <ActiveOption>Projects</ActiveOption>
                ) : (
                  <InactiveOption onClick={handleProjectTab}>
                    Projects
                  </InactiveOption>
                )}
                {challengeTab ? (
                  <ActiveOption>Challenges</ActiveOption>
                ) : (
                  <InactiveOption onClick={handleChallengeTab}>
                    Challenges
                  </InactiveOption>
                )}
              </DashboardMetaDataOption>
            </DashboardMetaData>
          </DashboardMetaDataWrapper>

          {/* <ItemsFilterWrapper>
            {allItemsTab ? (
              <ActiveOption>All Enrolled</ActiveOption>
            ) : (
              <InactiveOption onClick={handleAllItemsTab}>
                All Enrolled
              </InactiveOption>
            )}
            {enrolledItemsTab ? (
              <ActiveOption>In Progress</ActiveOption>
            ) : (
              <InactiveOption onClick={handleEnrolledItemsTab}>
                In Progress
              </InactiveOption>
            )}
            {completedItemsTab ? (
              <ActiveOption>Completed</ActiveOption>
            ) : (
              <InactiveOption onClick={handleCompletedItemsTab}>
                Completed
              </InactiveOption>
            )}
          </ItemsFilterWrapper> */}

          <ItemsFilterWrapper>
            <ButtonGroupLower state= {INITIAL_STATE_}  setINITIAL_STATE_ = {setINITIAL_STATE_}/>
          </ItemsFilterWrapper>

          <DashboardBottom>
            <DashboardBottomContent>
              {/* <DashBoardProjectBox /> */}

              {
                (dashboardData.length === 0) ? (
                  dashboardData.forEach((documentId, index) => {
                    <DashBoardProjectBox key={index} id={documentId} />
                })
                ) : (
                  <EmptyProjectNotice >Nothing Here</EmptyProjectNotice>
                )
              }
              <EmptyProjectNotice>Nothing Here</EmptyProjectNotice>


              
             {/* OLD CODE
              {projects.length === 0 ? (
                <EmptyProjectNotice>Nothing here!</EmptyProjectNotice>
              ) : allItemsTab ? (
                projects.map((project, index) => {
                  return (
                    <DashBoardProjectBox
                      data={project}
                      user={user.id}
                      key={index}
                    />
                  );
                })
              ) : enrolledItemsTab ? (
                enrolledProjects.map((project, index) => {
                  return (
                    <DashBoardProjectBox
                      data={project}
                      user={user.id}
                      key={index}
                    />
                  );
                })
              ) : (
                completedProjects.map((project, index) => {
                  return (
                    <DashBoardProjectBox
                      data={project}
                      user={user.id}
                      key={index}
                    />
                  );
                })
              )} */}
            </DashboardBottomContent>
          </DashboardBottom>

          <DashboardBottomContent state= {INITIAL_STATE_}  setINITIAL_STATE_ = {setINITIAL_STATE_}/>
        </div>
      )}
    </>
  );
};


//PROJECT DETAILS PAGE OLD CODE

// const startChallengeHandler = () => {
//   if (!enrolled) {
//     setLoading(true);
//     firestore
//       .collection('enroll')
//       .add({
//         challengeId: id,
//         type: 'challenge',
//         userId: user.id,
//         isCompleted: false,
//       })
//       .then(() => {
//         setEnrolled(true);
//         setButtonText('Submit Challenge');
//         setLoading(false);
//       })
//       .catch((error) => {
//         alert('error occured');
//       });
//   }
// };

      //OLD CODE
      // firestore
      //   .collection(`projects`)
      //   .doc(id)
      //   .get()
      //   .then((querySnapshot) => {
      //     if (mounted) {
      //       firestore
      //         .collection('enroll')
      //         .where('projectId', '==', id)
      //         .where('userId', '==', user.id)
      //         .get()
      //         .then((querySnapshot) => {
      //           querySnapshot.forEach((doc) => {
      //             if (doc.data()) {
      //               setEnrolled(true);
      //               setIsCompleted(doc.data().isCompleted);
      //               if (doc.data().isCompleted === false) {
      //                 setButtonText('Submit Project');
      //               } else {
      //                 setButtonText('Completed');
      //               }
      //             }
      //           });
      //         })
      //         .catch((error) => {
      //           console.log('Error getting documents: ', error);
      //         });
      //       const data = querySnapshot.data();
      //       setProjectDetail(data);
      //       setLoading(false);
      //     }
      //   });
    // } else {
    //   firestore
    //     .collection(`projects`)
    //     .doc(id)
    //     .get()
    //     .then((querySnapshot) => {
    //       const data = querySnapshot.data();
    //       setProjectDetail(data);
    //       setLoading(false);
    //     });
    // }

//OLD
  // const startProjectHandler = () => {
  //   if (!enrolled) {
  //     setLoading(true);
  //     firestore
  //       .collection('enroll')
  //       .add({
  //         projectId: id,
  //         type: 'project',
  //         userId: user.id,
  //         isCompleted: false,
  //       })
  //       .then(() => {
  //         setEnrolled(true);
  //         setButtonText('Submit Project');
  //         setLoading(false);
  //       })
  //       .catch((error) => {
  //         alert('error occured');
  //       });
  //   }
  // };



//DASHBOARD PROJECT BOX OLD CODE

  // const DashboardData = useSelector((state) => state.dashboard)

  // const [projectDetail, setProjectDetail] = useState({});
  // useEffect(() => {

  //   // let mounted = true;
  //   // firestore.collection(`projects`).doc(id).get().then(
  //   //   (querySnapshot) => {
  //   //     if(mounted) {
  //   //       setProjectDetail(querySnapshot.data())
  //   //     }
  //   //   })
    

  //   //OLD CODE
  //   // let mounted = true;
  //   // if (data.type === 'project') {
  //   //   firestore
  //   //     .collection(`projects`)
  //   //     .doc(data.projectId)
  //   //     .get()
  //   //     .then((querySnapshot) => {
  //   //       if (mounted) {
  //   //         setProjectDetail(querySnapshot.data());
  //   //       }
  //   //     });

  //   //   return function cleanup() {
  //   //     mounted = false;
  //   //   };
  //   // }
  //   //  else if (data.type === 'challenge') {
  //   //   firestore
  //   //     .collection(`challenges`)
  //   //     .doc(data.challengeId)
  //   //     .get()
  //   //     .then((querySnapshot) => {
  //   //       if (mounted) {
  //   //         setProjectDetail(querySnapshot.data());
  //   //       }
  //   //     });

  //   //   return function cleanup() {
  //   //     mounted = false;
  //   //   };
  //   // }
  // }, []);

  // const deleteHandler = () => {
  //   if (data.type === 'project') {
  //     firestore
  //       .collection(`enroll`)
  //       .where('projectId', '==', data.projectId)
  //       .where('userId', '==', user)
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           doc.ref.delete().then(() => {
  //             history.go(0);
  //           });
  //         });
  //       });
  //   } else if (data.type === 'challenge') {
  //     firestore
  //       .collection(`enroll`)
  //       .where('challengeId', '==', data.challengeId)
  //       .where('userId', '==', user)
  //       .get()
  //       .then((querySnapshot) => {
  //         querySnapshot.forEach((doc) => {
  //           doc.ref.delete().then(() => {
  //             history.go(0);
  //           });
  //         });
  //       });
  //   }
  // };

  // const DashBoardProjectBox = ({id, data,}) => {
//   const user = useSelector((state) => state.user.currentUser);
//   const history = useHistory();
//   console.log(id);

//   // const DashboardData = useSelector((state) => state.dashboard)

//   const [projectDetail, setProjectDetail] = useState({});
//   useEffect(() => {

//     let mounted = true;
//     firestore.collection(`projects`).doc(id).get().then(
//       (querySnapshot) => {
//         if(mounted) {
//           setProjectDetail(querySnapshot.data())
//         }
//       })
    

//     //OLD CODE
//     // let mounted = true;
//     // if (data.type === 'project') {
//     //   firestore
//     //     .collection(`projects`)
//     //     .doc(data.projectId)
//     //     .get()
//     //     .then((querySnapshot) => {
//     //       if (mounted) {
//     //         setProjectDetail(querySnapshot.data());
//     //       }
//     //     });

//     //   return function cleanup() {
//     //     mounted = false;
//     //   };
//     // }
//     //  else if (data.type === 'challenge') {
//     //   firestore
//     //     .collection(`challenges`)
//     //     .doc(data.challengeId)
//     //     .get()
//     //     .then((querySnapshot) => {
//     //       if (mounted) {
//     //         setProjectDetail(querySnapshot.data());
//     //       }
//     //     });

//     //   return function cleanup() {
//     //     mounted = false;
//     //   };
//     // }
//   }, []);

//   const deleteHandler = () => {
//     if (data.type === 'project') {
//       firestore
//         .collection(`enroll`)
//         .where('projectId', '==', data.projectId)
//         .where('userId', '==', user)
//         .get()
//         .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             doc.ref.delete().then(() => {
//               history.go(0);
//             });
//           });
//         });
//     } else if (data.type === 'challenge') {
//       firestore
//         .collection(`enroll`)
//         .where('challengeId', '==', data.challengeId)
//         .where('userId', '==', user)
//         .get()
//         .then((querySnapshot) => {
//           querySnapshot.forEach((doc) => {
//             doc.ref.delete().then(() => {
//               history.go(0);
//             });
//           });
//         });
//     }
//   };

//   return (
//     <>
//       <ProjectBox>
//         <ProjectBoxContent>
//           <ProjectBoxContentLeft>
//             <ProjectBoxHeading>{projectDetail.title}</ProjectBoxHeading>
//             <p style={{ fontSize: '12px', color: '#827FA5' }}>
//               {projectDetail.description}
//             </p>
//             <Chip
//               style={{
//                 color: data.isCompleted ? 'white' : '#ED841F',
//                 backgroundColor: data.isCompleted
//                   ? 'green'
//                   : 'rgba(237, 132, 31, 0.4)',
//                 fontSize: '10px',
//                 fontWeight: 700,
//               }}
//             >
//               {data.isCompleted ? 'Completed' : 'In Progress'}
//             </Chip>
//           </ProjectBoxContentLeft>
//           <ProjectBoxContentRight>
//             {data.isCompleted === false ? (
//               <>
//                 {/* `` */}
//                 <PrimaryButton
//                   to={
//                     data.type === 'project'
//                       ? `/projects/${data.projectId}/submit`
//                       : `/challenges/${data.challengeId}/submit`
//                   }
//                 >
//                   Submit
//                 </PrimaryButton>
//                 <SeconadaryButton onClick={deleteHandler}>
//                   Delete
//                 </SeconadaryButton>
//               </>
//             ) : (
//               <>
//                 <PrimaryButtonExternal href={data.demoLink}>
//                   Demo
//                 </PrimaryButtonExternal>
//                 <SeconadaryButtonExternal href={data.githubLink}>
//                   Github Repo
//                 </SeconadaryButtonExternal>
//               </>
//             )}
//           </ProjectBoxContentRight>
//         </ProjectBoxContent>
//       </ProjectBox>
//     </>
//   );
// };


const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 2%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%50%;
  border: 5px solid #e6e6e6;
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
`;

const ItemsFilterWrapper = styled.div`
  display: flex;
  margin: 10px auto;
  width: 60%;
  /* flex-direction: column; */

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const EmptyProjectNotice = styled.h2`
  padding-top: 20px;
  color: #4c4a6e;
  font-weight: normal;
`;

const DashboardMetaDataWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  background-color: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const DashboardMetaData = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  height: 35vh;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const DashboardMetaDataTop = styled.div`
  display: flex;
  flex-basis: 40%;
  ${"" /* align-items: center; */}
  width: 100%;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: block;
  }
`;

const DashboardMetaDataTopLogo = styled.img`
  padding: 20px 50px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const DashboardMetaDataTopNav = styled(NavbarRight)`
  width: 100%;
`;

const DashboardMetaDataUser = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  justify-content: center;
  width: 100%;
`;

const Heading = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #4c4a6e;
`;

const DashboardMetaDataOption = styled.div`
  display: flex;
  flex-basis: 20%;
  align-items: center;
  width: 100%;
`;

const ActiveOption = styled.button`
  display: flex;
  flex-basis: 15%;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: 2px solid blue;
  height: 30px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  padding: 5px;
  margin-right: 5px;
  border-radius: 15px;
  background: #3a2dce;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }

  @media (max-width: 496px) {
    flex-basis: 50%;
  }
`;

const InactiveOption = styled.button`
  display: flex;
  margin-right: 5px;
  border-radius: 15px;
  flex-basis: 15%;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border: none;
  height: 30px;
  font-size: 18px;
  font-weight: 400;
  color: #323232;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  font-size: 15px;
  font-weight: 600;

  &:focus {
    outline: none;
  }

  @media (max-width: 496px) {
    flex-basis: 50%;
    margin-left: 0;
  }
`;

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

export default Dashboard;
