import styled from '@emotion/styled';
import React from 'react';
import { MdOutlineGolfCourse } from 'react-icons/md';
import { AiFillCheckCircle } from 'react-icons/ai';

const CompletionDisplay = ({ type, completed, enrolled }) => {
  return (
    <Container>
      <div>
        <MdOutlineGolfCourse className='icon' />
        <span className='number'>{enrolled}</span>
        <span className='text'>
          {type === 'challenge' ? 'Challenges' : 'Projects'} Enrolled
        </span>
      </div>
      <div>
        <AiFillCheckCircle className='icon' />
        <span className='number'>{completed}</span>
        <span className='text'>
          {type === 'challenge' ? 'Challenges' : 'Projects'} Completed
        </span>
      </div>
    </Container>
  );
};

export default CompletionDisplay;

const Container = styled.div`
  background-color: white;
  margin: 50px;
  height: 200px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    padding: 0px 50px;
    display: flex;
    align-items: center;

    .icon {
      font-size: 48px;
      margin-right: 25px;
    }
    .number {
      font-size: 76px;
      font-weight: bold;
      color: #3a2dce;
    }

    .text {
      font-size: 32px;
      padding-left: 10px;
    }
  }
`;
