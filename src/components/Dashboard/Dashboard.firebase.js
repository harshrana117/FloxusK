//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE
//IGNORE THIS FILE  => tEMP FILE


// import { firestore } from "../../firebase/firebase";
// import { useDispatch, useSelector } from "react-redux";
// import { 
//   listDashboardChallenges, 
//   listDashboardProjects, 
//   removeDashboardData 
// } from "../../reducers/dashboard/dashboard.actions";

// export const DashboardFirebaseDetailsFetch = async (challengeIdArray, dispatch) => {
//   try{
//   var challengeDetailsFetch = [];


//   await challengeIdArray.map(async (arrayElement) => {
//     await firestore.collection("challenges").doc(arrayElement).get().then( (querySnapshot) => {
//       challengeDetailsFetch = [...challengeDetailsFetch, {Data: querySnapshot.data()}]
//       // console.log(challengeDetailsFetch);
//     })
//   })  
    
  

//     await dispatch(
//       listDashboardChallenges(
//         challengeDetailsFetch
//       )
//       )
// } catch(error){
//   console.log(error);
// }

//   // try{
// //     try{
// //       challengeArray.forEach((documentDetail) => {
// //     console.log(documentDetail);
// //     const data = firestore.collection("challenges").doc(`${documentDetail}`).get().then(querySnapshot);
// //     challengeDetailsFetch = [...challengeDetailsFetch, {dataS: data}]
// //   })

// //   console.log(challengeDetailsFetch);
// // } catch(err) {
// //   console.log(err);
// // }
// }