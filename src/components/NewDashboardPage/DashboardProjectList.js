import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

const DashboardProjectList = ({ data, baseLink }) => {
  console.log(data);
  return (
    <Container>
      <ContentWrapper>
        <h2>
          In Progress(<span>{data.inProgress.length}</span>)
        </h2>
        {data.inProgress &&
          data.inProgress.map((item, index) => (
            <DataCard
              key={index}
              to={`/${baseLink}/${item.projectData.docId[0]}`}
            >
              <div>
                <p>{item.projectData.title}</p>
              </div>
            </DataCard>
          ))}
      </ContentWrapper>
      <ContentWrapper>
        <h2>
          Completed(<span>{data.completed.length}</span>)
        </h2>
        {data.completed &&
          data.completed.map((item) => (
            <DataCard to={`/${baseLink}/${item.projectData.docId[0]}`}>
              <div>
                <p>{item.projectData.title}</p>
              </div>
            </DataCard>
          ))}
      </ContentWrapper>
    </Container>
  );
};

export default DashboardProjectList;

const Container = styled.div`
  margin: 50px;
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  margin: 30px;
  width: 400px;
  h2 {
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 30px;
    span {
      color: #3a2dce;
    }
  }
`;

const DataCard = styled(Link)`
  text-decoration: none;
  color: black;
  div {
    margin: 5px 0px;
    background-color: #f2f5f8;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    padding: 5px 10px;
    cursor: pointer;

    &:hover {
      border-bottom: 1.5px solid rgba(0, 0, 0, 0.4);
    }
  }
`;
