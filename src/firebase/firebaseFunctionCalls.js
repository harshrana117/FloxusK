import {
  listDashboardChallengesCompleted,
  listDashboardChallengesInProgress,
  listDashboardProjectsCompleted,
  listDashboardProjectsInProgress,
  listAllChallengeId,
  listAllProjectId,
} from '../reducers/dashboard/dashboard.actions';

import { firestore } from './firebase';
import { batch } from 'react-redux';
import {
  setUserProfileEducation,
  setUserProfileExperience,
  setUserProfileProject,
} from '../reducers/profile/profile.actions';

export const UserProfileDetails = async (uid, dispatch) => {
  console.log('userProfile call')
  await firestore
    .doc(`users/${uid}`)
    .get()
    .then((querySnapshot) => {
      const { educationDetails, experienceDetails, projectDetails } =
        querySnapshot.data();
      batch(() => {
        dispatch(setUserProfileEducation(educationDetails));
        dispatch(setUserProfileExperience(experienceDetails));
        dispatch(setUserProfileProject(projectDetails));
      });
    });
};

export const DashboardCall = async (uid, dispatch) => {
  console.log('Dashboard Call')
  try {
    let docIdP  = {}
    let docIdC = {}
    await firestore.collection(`enroll/${uid}/projects`).where("isCompleted", "==", true).get().then(
      (querySnapshot) => {
        let projectData = [];
        querySnapshot.forEach((doc) => {
          docIdP = {...docIdP, [doc.id]: true};
          projectData = [...projectData, doc.data()]
        })
        
        batch(() => {dispatch(listDashboardProjectsCompleted({projectData, docIdP}))
        //  dispatch(listAllProjectId(docId))
        })
      });


      await firestore.collection(`enroll/${uid}/projects`).where("isCompleted", "==", false).get().then(
        (querySnapshot) => {
          let projectData = [];
          querySnapshot.forEach((doc) => {
            docIdP = {...docIdP, [doc.id]: false};
            projectData = [...projectData, doc.data()];
        })
        batch(() => {dispatch(listDashboardProjectsInProgress({projectData, docIdP}))
        //  dispatch(listAllProjectId(docId))
      })
      });

      await firestore.collection(`enroll/${uid}/challenges`).where("isCompleted", "==" , true).get().then(
        (querySnapshot) => {
          let challengeData =[];
          querySnapshot.forEach((doc)=>{
            docIdC = {...docIdC, [doc.id]: true};
            challengeData = [...challengeData, doc.data()];
            
          })
          batch(() => {
            dispatch(listDashboardChallengesCompleted({challengeData, docIdC}))
            // dispatch(listAllChallengeId(docId))
          })
        });

        await 
        firestore.collection(`enroll/${uid}/challenges`).where("isCompleted", "==", false).get().then(
          (querySnapshot) => {
            let challengeData =[];
            querySnapshot.forEach((doc)=>{
              docIdC = {...docIdC, [doc.id]: false};
              challengeData = [...challengeData, doc.data()];
              
            })
            
            batch(() => {
              dispatch(listDashboardChallengesInProgress({challengeData, docIdC})          )
              // dispatch(listAllChallengeId(docId))
            })
          });
  } catch (err) {
    console.log(err);
  }
};

//IMPROVEMENT IDEAS
// Can put all dispatch under one BATCH function from redux, for this will
//have to use constants with scope on whole funtions
