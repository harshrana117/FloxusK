import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';



const ProjectCard = ({ data, id }) => {
  return (
    <>
      <ProjectCardContainer>
        <ProjectCardWrapper>
          <Chip>
            <p>Medium</p>
          </Chip>
          <ProjectHeading>{data.Title}</ProjectHeading>
          <ProjectDescription >
            {data.Description}
          </ProjectDescription>
          <CategoryContainer>
            {
              data.Categories.map((category, index) => {
                return (
                  <ChipCategory key={index+1}>{' '}
                    <p>{category}</p>{' '}
                  </ChipCategory>
                )
              })
            }

          </CategoryContainer>
          <ProjectCardFooter>
            <Link to={
              `/projects/${id}`
              // (user!==null) ? ( `/projects/${id}`) : (`/signIn`)
            } className="textLink">
              View Details &rarr;
            </Link>
          </ProjectCardFooter>
        </ProjectCardWrapper>
      </ProjectCardContainer>
    </>
  );
};

const ProjectCardContainer = styled.div`
  display: flex;
  width: 350px;
  height: 300px;
  justify-content: center;
  align-items:center;
  background-color: white;
  border: 2px solid #cecce3;
  border-radius: 7px;
  margin: 20px;
`;

const ProjectCardWrapper = styled.div`
  display: flex;
  width: 85%;
  height: 90%;
  flex-direction: column;
`;

const Chip = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e9fdd5;
  width: 70px;
  height: 30px;
  border-radius: 15px;

  p {
    padding: 5px;
    font-size: 13px;
  }
`;

const ProjectHeading = styled.div`
  font-size: 22px;
  color: #333333;
  margin-top: 15px;
  font-weight: 600;
`;

const ProjectDescription = styled.div`
  font-size: 15px;
  margin-top: 13px;
  color: #6f6f6f;
  font-weight: 400;
  height: 80px;
  margin-bottom: 0;
  overflow:scroll;
  
`;

const CategoryContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 15px;
  flex-wrap: wrap;

  > * {
    &:first-child {
      margin-left: 0;
    }
    margin-left: 7px;
  }
`;

const ChipCategory = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f3f6fa;
  width: auto;
  height: 30px;

  p {
    padding: 7px;
    font-size: 13px;
  }
`;

const ProjectCardFooter = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: auto;

  .textLink {
    color: #d87950;
    font-size: 16px;
    margin-left: auto;
    text-decoration: none;
  }
`;

export default ProjectCard;
