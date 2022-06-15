import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const ProjectComponent = ({ data }, id) => {
  return (
    <Box>
      <LanguageDivContainer>
        {data.categories.map((category) => {
          return (
            <LanguageDiv>
              <LanguageText>{category}</LanguageText>
            </LanguageDiv>
          );
        })}
      </LanguageDivContainer>
      <ProjectInfo>
        <ProjectHeading>
          <bold>{data.title}</bold>
        </ProjectHeading>
        <ProjectDescription>
          <bold>{data.description}</bold>
        </ProjectDescription>
      </ProjectInfo>
      <FooterContainer>
        <FooterLeft>
          <bold>{data.difficulty}</bold>
        </FooterLeft>
        <FooterProjectLink to={`/projects/`}>
          <bold>
            View Project
            <svg
              width='21'
              height='12'
              viewBox='0 0 21 15'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M13.6249 0.208336L12.1562 1.67709L16.927 6.45834H0.083252V8.54167H16.927L12.1458 13.3229L13.6249 14.7917L20.9166 7.5L13.6249 0.208336Z'
                fill='#FF5400'
              />
            </svg>
          </bold>
        </FooterProjectLink>
      </FooterContainer>
    </Box>
  );
};

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 370px;
  min-height: 263px;

  margin: 15px 15px 15px 15px;

  background: #ffffff;
  border: 1px solid #cecce3;
  box-sizing: border-box;
  border-radius: 15px;

  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0px 0px 22px -14px rgba(0, 0, 0, 0.75);
    transition: box-shadow 0.2s;
  }

  @media screen and (max-width: 600px) {
    margin: 15px 0px 15px 0px;
    width: 95%;
  }
`;

const LanguageDivContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
`;

const LanguageDiv = styled.div`
  display: flex;
  width: 97px;
  min-height: 29px;

  margin-left: 10px;
  margin-top: 15px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    margin-left: 15px;
  }

  background: rgba(237, 132, 31, 0.4);
  border-radius: 20px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
  /* identical to box height */

  color: #ed841f;

  display: flex;
  align-items: center;
`;
const LanguageText = styled.h4`
  ${"" /* margin-left: 25px; */}
  @media screen and (max-width: 600px) {
    ${"" /* margin-left: 15px; */}
  }
`;

const ProjectInfo = styled.div`
  width: 330px;
  min-height: 110px;

  margin-left: 23px;
  margin-top: 9px;
  overflow: hidden;
  @media screen and (max-width: 600px) {
    margin-left: 15px;
    width: 100%;
  }
`;
const ProjectHeading = styled.h1`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 23px;
  line-height: 37px;
  /* identical to box height */

  color: #4c4a6e;
`;

const ProjectDescription = styled.p`
  margin-top: 9px;

  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-weight: 500;
  font-size: 13px;
  line-height: 19px;
  padding-right: 10px;

  color: #827fa5;
`;
const FooterContainer = styled.div`
  margin-top: 20px;
  margin-left: 23px;

  min-height: 50px;
  width: 315px;

  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    margin-left: 15px;
    width: 90%;
  }
`;
const FooterLeft = styled.span`
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  color: #068d65;
`;

const FooterProjectLink = styled(Link)`
  text-decoration: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: bold;
  font-size: 17px;
  line-height: 25px;
  /* identical to box height */
  color: #ff5400;
`;
