import React, { useEffect, useState } from 'react';
import { SelectDifficulty } from '../../components/selectDifficulty/selectDifficulty';
import styled from '@emotion/styled';
import { firestore } from '../../firebase/firebase';
import Loader from '../../components/Loader/Loader';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { useDispatch, useSelector } from 'react-redux';
import { listProjects } from '../../reducers/project/project.actions';


export const ProjectPage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);


  useEffect(async () => {
    let mounted = true;
    // const snapshot = firestore.collection(`projects`).get({ source: 'cache' });

    // if (!snapshot.exists) {
      firestore
        .collection(`projects`)
        .get({ source: 'server' })
        .then((querySnapshot) => {
          if (mounted) {
            const data = querySnapshot;
            // console.log(data.docs);
            dispatch(
              listProjects({
                data: data.docs,
              })
            )
            setLoading(false);
          }
        });
    // }

    // firestore
    //   .collection(`projects`)
    //   .get({ source: 'cache' })
    //   .then((querySnapshot) => {
    //     if (mounted) {
    //       const data = querySnapshot;
    //       dispatch(
    //         listProjects({
    //           data: data.docs,
    //         })
    //       )
    //       setLoading(false);
    //     }
    //   });


    // firestore
    //   .collection(`projects`)
    //   .get({ source: 'cache' })
    //   .then((querySnapshot) => {
    //     if (mounted) {
    //       const data = querySnapshot;
    //       setProjects(data.docs);
    //       setLoading(false);
    //     }
    //   });

    return function cleanup() {
      mounted = false;
    };
  }, []);

  const projectsReducer = useSelector((state) => state.project.fetchedProjectsList)

  return (
    <>
      <MainContainer>
        <SelectDifficulty heading="All Projects" />
        <ProjectContainer>
          {loading && <Loader />}
          {!loading && projectsReducer.data.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  data={project.data()}
                  id={project.id}
                />
              );
            })}
          {/* {loading ? (
            <Loader />
          ) : (
            projectsReducer.data.map((project) => {
              return (
                <ProjectCard
                  key={project.id}
                  data={project.data()}
                  id={project.id}
                />
              );
            })
          )} */}
        </ProjectContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  margin-left: 100px;
  width: calc(100vw - margin-left);
  padding: 20px;
  @media (max-width: 600px) {
    margin-left: 0;
  }
`;

const ProjectContainer = styled.div`
  display: flex;
  justify-content: center;
  width: calc(100vw-100px);
  flex-wrap: wrap;

  @media (max-width: 496px) {
    margin-bottom: 30%;
  }
`;

//CODE FOR FETCHING FROM REDUCER

{
  /* const dispatch = useDispatch()
  const project = useSelector(state => state.project)
  const loading = project.loading;
  const data = project.projects;
  const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(true);
  useEffect(() => {
    dispatch(listProjects())
  }, [dispatch]);
 */
}
