import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import styled from '@emotion/styled';
import { NavbarLeft, NavbarRight } from './components/navbar/Navbar';
import Dashboard from './components/Dashboard/Dashboard';
import { ProjectPage } from './pages/projectPage/projectPage';
import { ChallengePage } from './pages/challengePage/challengePage';
import { SignIn } from './pages/signInPage/signIn';
import { auth, createUserSchema } from './firebase/firebase';
import ProjectDetailsPage from './pages/ProjectDetailsPage/ProjectDetailsPage';
import ChallengeDetailsPage from './pages/ChallengeDetailsPage/ChallengeDetailsPage';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentUser } from './reducers/user/user.actions';
import { firestore } from './firebase/firebase';
import SubmitProjectPage from './pages/submitProjectPage/SubmitProjectPage';
import SubmitChallengePage from './pages/submitChallengePage/SubmitChallengePage';
import { useLocation, useHistory } from 'react-router';
import Loader from 'react-loader-spinner';
import DetailedNavbar from './components/navbar/DetailedNavbar/DetailedNavbar';
import SignInLoader from './components/Loader/signInLoader';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import {
  DashboardCall,
  UserProfileDetails,
} from './firebase/firebaseFunctionCalls';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import HomePage from './pages/HomePage/HomePage';
import { ThemeProvider } from '@mui/material/styles';
import theme from './Global/muiTheme';

const App = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const dashboadData = useSelector((state) => state.dashboard);
  // console.log(dashboadData)
  const [userPresent, setUserPresent] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // console.log("App.js print");

    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // console.log(userAuth);
        setUserPresent(userAuth);
        setIsLoading(false);
        createUserSchema(userAuth);
        const { displayName, email, photoURL } = userAuth;
        const userID = email.split('@')[0];
        dispatch(
          setCurrentUser({
            id: userAuth.uid,
            displayName,
            userID,
            email,
            photoURL,
            login: true,
          })
        );
        UserProfileDetails(userAuth.uid, dispatch);
        DashboardCall(userAuth.uid, dispatch)
      }
      setIsLoading(false);
    });
    // if (user.currentUser != null) {
       
    //   UserProfileDetails(user.currentUser.id, dispatch).then(() => DashboardCall(user, dispatch))
      

    //    setIsLoading(false);
    // }
  }, []);

  // DashboardCall(user, dispatch)

  // useEffect(() => {
  //   if(user)
  //       DashboardCall(user, dispatch);
  // }, [user])

  // const projectsData = firestore.collection(`projects`).get();
  // console.log(projectsData);
  // console.log(user);

  const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        if (isLoading === true)
          return (
            <Loader
              type='TailSpin'
              color='#3a2dce'
              height={150}
              width={150}
              timeout={3000}
            />
          );
        else if (userPresent !== null) return <Component {...props} />;
        else return <Redirect to='/' />;
      }}
    />
    //OLD CODE
    // <Route {...rest} render={(props) => (
    //   (isLoading===true)?<Loader
    //   type="TailSpin"
    //   color="#3a2dce"
    //   height={150}
    //   width={150}
    // />:
    //   (userPresent!==null) ?
    //     <Component {...props} />
    //      : <Redirect to='/signIn'/>
    // )}/>
  );

  const SignPrivateRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) => {
        if (isLoading === true) return <SignInLoader />;
        else if (userPresent === null) return <Component {...props} />;
        else return <Redirect to='/' />;
      }}
    />
    //OLD CODE
    // <Route {...rest} render={(props) => (
    //   userPresent===null ?
    //     <Component {...props} />
    //      : <Redirect to="/"/>
    // )}/>
  );

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path='/' exact>
            <NavbarLeft />
            <NavbarRight />
            <HomePage />
          </Route>

          <Route path='/projects' exact>
            <NavbarLeft />
            <NavbarRight />
            <ProjectPage />
          </Route>

          <Route path='/projects/:id' exact>
            <DetailedNavbar />
            <ProjectDetailsPage />
          </Route>

          <Route path='/projects/:id/submit' exact>
            <DetailedNavbar />
            <SubmitProjectPage />
          </Route>

          <Route path='/challenges' exact>
            <NavbarLeft />
            <NavbarRight />
            <ChallengePage />
          </Route>

          <Route path='/challenges/:id' exact>
            <DetailedNavbar />
            <ChallengeDetailsPage />
          </Route>

          <Route path='/challenges/:id/submit' exact>
            <DetailedNavbar />
            <SubmitChallengePage />
          </Route>

          <PrivateRoute path='/dashboard' exact>
            <DetailedNavbar />
            {/* <Dashboard /> */}
            <DashboardPage />
          </PrivateRoute>

          <PrivateRoute path='/profile/:userID' exact>
            <NavbarLeft />
            <NavbarRight />
            <ProfilePage />
          </PrivateRoute>

          {/* <Route path="/acceptChallenge" exact>
            <NavbarRight />
            <AcceptChallengePage />
          </Route> */}

          <Route path='/path' exact>
            <ProjectDetailsPage />
          </Route>

          <SignPrivateRoute path='/signIn' exact component={SignIn} />
          {/* <Route path="*" render={() => <Redirect to="/" />} /> */}
        </Switch>
      </Router>
    </ThemeProvider>
  );
};

export const signout = async () => {
  await auth.signOut();
};

export default App;

////TO-DOS and IDEAS
//A value in Global state in Redux from which we can call firestore fetchig request
//ROute paths using contants
//Provate route Optimization