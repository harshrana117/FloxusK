/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { SelectDifficulty } from '../../components/selectDifficulty/selectDifficulty';
import ChallengeBox from '../../components/ChallengeBox/ChallengeBox.js';
import { firestore } from '../../firebase/firebase';
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { listChallenges } from '../../reducers/challenge/challenge.actions'

export const ChallengePage = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);


  useEffect(async () => {
    let mounted = true;
    // const snapshot = firestore.collection(`challenges`).get({ source: 'cache' });

    // if (!snapshot.exists) {
      firestore
        .collection(`challenges`)
        .get({ source: 'server' })
        .then((querySnapshot) => {
          if (mounted) {
            const data = querySnapshot;
            dispatch(
              listChallenges({
                data: data.docs,
              })
            )
            setLoading(false);
          }
        });
    // }
    // firestore
    //   .collection(`challenges`)
    //   .get({ source: 'cache' })
    //   .then((querySnapshot) => {
    //     if (mounted) {
    //       const data = querySnapshot;
    //       dispatch(
    //         listChallenges({
    //           data: data.docs,
    //         })
    //       )
    //       setLoading(false);
    //     }
    //   });

    return function cleanup() {
      mounted = false;
    };
  }, []);

  const challengeReducer = useSelector((state) => state.challenge.fetchedChallengesList)

  return (
    <>
      <MainContainer>
        <SelectDifficulty heading="All Challenges" />
        <ChallengeContainer>
          {loading && <Loader />}
          {!loading &&
            challengeReducer.data.map((challenge) => {
              return (
                <ChallengeBox
                  key={challenge.id}
                  data={challenge.data()}
                  id={challenge.id}
                />
              );
            })}
        </ChallengeContainer>
      </MainContainer>
    </>
  );
};

const MainContainer = styled.div`
  margin-left: 100px;
  width: calc(100vw - margin-left);
  padding: 20px 20px 100px 20px;

  @media (max-width: 600px) {
    margin-left: 0;
    padding: 0;
  }
`;

const ChallengeContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 496px) {
    margin-bottom: 30%;
  }
`;
