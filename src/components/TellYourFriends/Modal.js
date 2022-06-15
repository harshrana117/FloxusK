import React, { useState } from 'react';
import ReactDom from 'react-dom';
import styled from '@emotion/styled';
import * as FaIcons from 'react-icons/fa';
import { IoMdCloseCircle } from 'react-icons/io';
import { render } from '@testing-library/react';

const CardWrapper = styled.div`
position:fixed;
top:0;
bottom:0;
left:0;
right:0;
z-index:100;
background-color:rgba(0,0,0,0.3);
`

const Card = styled.div`
  display:flex;
  position: absolute;
  top: 30%;
  left: 32%;
  box-shadow: 0px 0px 10px rgba(0,0,0,0.25);
  border-radius: 5px;
  width: 440px;
  height: 240px;
  background-color: white;
  z-index: 101;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: flex-start;
`;

// const SocialMediaIcons = styled.div`
// display:flex;
// justify-content: center;
// align-items: center;
// margin-top: 30px;

// .icon {
//   color: blue;

// }
// `

const CloseButton = styled(IoMdCloseCircle)`
cursor: pointer;
padding:0;
font-size: 25px;
margin-bottom: 10px;
margin-right: 10px;
margin-top:10px;
color: #6d6d6d;
`


function Modal({ open, onClose }) {

  // const [display, setDisplay] =  useState(false);

  // const open = () => {
  //   setDisplay(true);
  // }

  // const close = () => {
  //   setDisplay(false);
  // }

  if (open) {
    return ReactDom.createPortal(
      <>
        <CardWrapper>
          <Card>
            <CardContent>
              <h1
                style={{
                  color: '#292929',
                  fontSize: '25px',
                  marginLeft: '35px',
                  marginBottom: '20px',
                  marginRight: '50px',
                  marginTop: '30px',

                }}
              >
                Tell your Friends
          </h1>
              <p style={{
                marginTop: '10px',
                fontSize: '17px',
                color: '#000',
                fontWeight: '490',
                marginLeft: '35px',
                marginRight: '70px',


              }}>If you love what we do, please tell your friend and share the love</p>

            </CardContent>
            <CloseButton onClick={onClose}></CloseButton>
          </Card>
        </CardWrapper>
      </>,
      document.getElementById('portal-root')
    );
  };
  return null;
};

export default Modal
