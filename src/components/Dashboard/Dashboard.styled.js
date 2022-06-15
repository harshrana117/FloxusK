import styled from "@emotion/styled";
 
export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: auto;
`;

const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-top: 2%;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 50%50%;
  border: 5px solid #e6e6e6;
  box-shadow: 0px 0px 5px -2px rgba(0, 0, 0, 0.75);
`;

const ItemsFilterWrapper = styled.div`
  display: flex;
  margin: 10px auto;
  width: 60%;
  /* flex-direction: column; */

  @media (max-width: 496px) {
    width: 90%;
  }
`;

const EmptyProjectNotice = styled.h2`
  padding-top: 20px;
  color: #4c4a6e;
  font-weight: normal;
`;

const DashboardMetaDataWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 40vh;
  background-color: white;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.25);
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const DashboardMetaData = styled.div`
  display: flex;
  flex-direction: column;
  width: 66%;
  height: 35vh;

  @media (max-width: 600px) {
    width: 90%;
  }
`;

const DashboardMetaDataTop = styled.div`
  display: flex;
  flex-basis: 40%;
  ${'' /* align-items: center; */}
  width: 100%;
  justify-content: space-between;
  @media (max-width: 600px) {
    display: block;
  }
`;

const DashboardMetaDataTopLogo = styled.img`
  padding: 20px 50px;
  @media (max-width: 600px) {
    display: none;
  }
`;
const DashboardMetaDataTopNav = styled(NavbarRight)`
  width: 100%;
`;

const DashboardMetaDataUser = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  justify-content: center;
  width: 100%;
`;

const Heading = styled.p`
  font-size: 25px;
  font-weight: 700;
  color: #4c4a6e;
`;

const DashboardMetaDataOption = styled.div`
  display: flex;
  flex-basis: 20%;
  align-items: center;
  width: 100%;
`;

const ActiveOption = styled.button`
  display: flex;
  flex-basis: 15%;
  align-items: center;
  justify-content: center;
  border: none;
  border-bottom: 2px solid blue;
  height: 30px;
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  cursor: pointer;
  padding: 5px;
  margin-right: 5px;
  border-radius: 15px;
  background: #3a2dce;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);

  &:focus {
    outline: none;
  }

  @media (max-width: 496px) {
    flex-basis: 50%;
  }
`;

const InactiveOption = styled.button`
  display: flex;
  margin-right: 5px;
  border-radius: 15px;
  flex-basis: 15%;
  padding: 5px;
  justify-content: center;
  align-items: center;
  border: none;
  height: 30px;
  font-size: 18px;
  font-weight: 400;
  color: #323232;
  cursor: pointer;
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  font-size: 15px;
  font-weight: 600;

  &:focus {
    outline: none;
  }

  @media (max-width: 496px) {
    flex-basis: 50%;
    margin-left: 0;
  }
`;

const DashboardBottom = styled.div`
  display: flex;
  width: 100%;
  min-height: 65vh;
  justify-content: center;
  align-items: center;
`;

const DashboardBottomContent = styled.div`
  display: flex;
  width: 60%;
  min-height: 65vh;
  flex-direction: column;
  padding: 10px 0px 100px 0px;

  @media (max-width: 496px) {
    width: 90%;
  }
`;