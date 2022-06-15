import styled from '@emotion/styled';
import React from 'react';
import { Link as UnstyledLink } from 'react-router-dom';
import vector from '../../assets/svg/c-vector.png';
import { AiOutlineArrowRight } from 'react-icons/ai';

const MiniCard = ({
  background,
  heading,
  subheading,
  link,
  linkText,
  icon,
}) => {
  return (
    <Container background={background}>
      <div>{icon}</div>
      <h1>{heading}</h1>
      <p>{subheading}</p>
      <Link to={link}>
        {linkText} <AiOutlineArrowRight />
      </Link>
    </Container>
  );
};

export default MiniCard;

const Container = styled.div`
  background: ${({ background }) => background};
  padding: 32px;
  color: white;
  border-radius: 10px;

  h1 {
    font-size: 20px;
    padding: 15px 0px;
  }
  p {
    font-size: 12px;
    padding-bottom: 30px;
  }
`;

const Link = styled(UnstyledLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  color: white;
  text-transform: uppercase;
`;
