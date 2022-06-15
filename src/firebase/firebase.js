import firebase from "firebase";
import "firebase/firestore";
import "firebase/auth";
import { UserProfileDetails } from "./firebaseFunctionCalls";
import Dashboard from "../components/Dashboard/Dashboard";
import { useDispatch } from "react-redux";

const config = {
  apiKey: "",
  authDomain: "floxuskata.firebaseapp.com",
  projectId: "floxuskata",
  storageBucket: "floxuskata.appspot.com",
  messagingSenderId: "",
  appId: "",
};

export const createUserSchema = async (userAuth, additionalData, dispatch) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const skill = [];
    const challengePoint = 0;
    const totalPoint = 0;
    const userID = email.split("@")[0];

    try {
      await userRef.set({
        displayName,
        email,
        userID,
        createdAt,
        skill,
        challengePoint,
        totalPoint,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }

    try {
      await firestore.collection("mail").add({
        to: [email],
        message: {
          subject: `Welcome to Floxus-Unbound ${displayName}!`,
          html: "This is an <code>HTML</code> email body.",
        },
      });
    } catch (error) {
      console.log("Error creating mail section");
    }
  } 
  // else {
  //   UserProfileDetails(userAuth.uid, dispatch);
  //        Dashboard(userAuth.uid, dispatch);
  // }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();

firebase
  .firestore()
  .enablePersistence()
  .catch((err) => {
    if (err.code == "failed-precondition") {
      // Multiple tabs open, persistence can only be enabled
      // in one tab at a a time.
      // ...
      console.log("Failed Precondition, Multiple tabs open");
    } else if (err.code == "unimplemented") {
      // The current browser does not support all of the
      // features required to enable persistence
      // ...
      console.log("Browser does not support");
    }
  });

export const firestore = firebase.firestore();

// firebase.firestore().disableNetwork();
{
  /* Fetching Demo
const projectRef = firestore.collection(`projects`).get().then((querySnapshot) => {
  const ab = []
  ab.push(querySnapshot)
  console.log(ab)

  const abc = querySnapshot;

  // console.log(abc.docs[0].data())
  //console.log(querySnapshot)
  // querySnapshot.forEach((doc) => {
  //   //console.log(doc.id)
  //   a.push(doc.id)
  //   console.log(a)
  // })

  });

*/
}
const userRef = firestore.collection(`users`).get();
console.log(userRef);

const provider = new firebase.auth.GithubAuthProvider();
// const repo = provider.addScope('repo');
// console.log(repo);
export const signInWithGithub = () => auth.signInWithRedirect(provider);
