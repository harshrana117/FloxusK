import React, { useEffect, useState } from 'react';
import Input from '@mui/material/TextField';
import { MdDelete } from 'react-icons/md';
import { firestore } from '../../firebase/firebase';
import profileSectionEmpty from '../../assets/svg/profileSectionEmpty.svg';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import Snackbar from '../Snackbar/Snackbar';

const EducationalDetailsForm = () => {
  const [snackOpen, setSnackOpen] = React.useState(false);
  const [snackMessage, setSnackMessage] = React.useState('saved changes');
  const handleSnackClose = () => {
    setSnackOpen(false);
  };
  // get user from redux
  const user = useSelector((state) => state.user.currentUser);

  // show/unshow form
  const [showForm, setShowForm] = useState(false);

  //form details
  const [formDetails, setFormDetails] = useState({
    School: '',
    Location: '',
    Degree: '',
    Course: '',
    Graduation: '',
    StartDate: '',
    CGPA: '',
  });

  const [submitting, setSubmitting] = React.useState(false);

  //data (should populate from firebase)
  const [data, setData] = useState([]);

  useEffect(() => {
    let mounted = true;
    if (user) {
      firestore
        .collection('users')
        .doc(user.id)
        .get()
        .then((doc) => {
          if (mounted) {
            if (doc.exists) {
              if (doc.data().educationDetails) {
                setData(doc.data().educationDetails);
              }
            } else {
              setSnackMessage('Nothing to show!');
              setSnackOpen(true);
            }
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
    return function cleanup() {
      mounted = false;
    };
  }, [user]);

  // form field handlers
  const handleSchool = (e) => {
    setFormDetails({
      ...formDetails,
      School: e.target.value,
    });
  };
  const handleLocation = (e) => {
    setFormDetails({
      ...formDetails,
      Location: e.target.value,
    });
  };
  const handleDegree = (e) => {
    setFormDetails({
      ...formDetails,
      Degree: e.target.value,
    });
  };
  const handleCourse = (e) => {
    setFormDetails({
      ...formDetails,
      Course: e.target.value,
    });
  };
  const handleGraduation = (e) => {
    setFormDetails({
      ...formDetails,
      Graduation: e.target.value,
    });
  };
  const handleStartDate = (e) => {
    setFormDetails({
      ...formDetails,
      StartDate: e.target.value,
    });
  };
  const handleCGPA = (e) => {
    setFormDetails({
      ...formDetails,
      CGPA: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (
      formDetails.School &&
      formDetails.Location &&
      formDetails.Degree &&
      formDetails.Course &&
      formDetails.CGPA &&
      formDetails.StartDate &&
      formDetails.Graduation
    ) {
      const tempData = [formDetails, ...data];
      setData(tempData);
      firestore
        .collection('users')
        .doc(user.id)
        .update({
          educationDetails: tempData,
        })
        .then(() => {
          setSnackMessage('Saved');
          setSnackOpen(true);
          setFormDetails({
            School: '',
            Location: '',
            Degree: '',
            Course: '',
            Graduation: '',
            StartDate: '',
            CGPA: '',
          });
          setShowForm(!showForm);
        })
        .catch('some error occured');
    } else {
      setSnackMessage('Some fields are empty');
      setSnackOpen(true);
    }
  };

  const handleDelete = (id) => {
    const tempData = data.filter((item) => data.indexOf(item) !== id);
    firestore
      .collection('users')
      .doc(user.id)
      .update({
        educationDetails: tempData,
      })
      .then(() => {
        setSnackMessage('deleted');
        setSnackOpen(true);
        setFormDetails({
          School: '',
          Location: '',
          Degree: '',
          Course: '',
          Graduation: '',
          StartDate: '',
          CGPA: '',
        });
        setData(tempData);
      })
      .catch('some error occured');
  };

  const handleEdit = (id) => {
    const tempData = data.filter((item) => data.indexOf(item) === id)[0];
    const updatedList = data.filter((item) => data.indexOf(item) !== id);
    setData(updatedList);
    setFormDetails(tempData);
    setShowForm(true);
  };

  return (
    <Container>
      <Snackbar
        open={snackOpen}
        handleClose={handleSnackClose}
        message={snackMessage}
      />
      <h1>Education</h1>
      {showForm ? (
        <Form>
          <Input
            type='text'
            fullWidth
            size='small'
            margin='dense'
            placeholder='School/College'
            value={formDetails.School}
            onChange={handleSchool}
            error={submitting && !formDetails.School}
          />
          <Input
            type='text'
            fullWidth
            size='small'
            margin='dense'
            placeholder='Location'
            value={formDetails.Location}
            onChange={handleLocation}
            error={submitting && !formDetails.Location}
          />
          <Input
            type='text'
            fullWidth
            size='small'
            margin='dense'
            placeholder='Degree'
            value={formDetails.Degree}
            onChange={handleDegree}
            error={submitting && !formDetails.Degree}
          />
          <Input
            type='text'
            fullWidth
            size='small'
            margin='dense'
            placeholder='Course'
            value={formDetails.Course}
            onChange={handleCourse}
            error={submitting && !formDetails.Course}
          />
          <Input
            type='text'
            fullWidth
            size='small'
            margin='dense'
            placeholder='CGPA/percentage'
            value={formDetails.CGPA}
            onChange={handleCGPA}
            error={submitting && !formDetails.CGPA}
          />
          <DateContainer>
            <Input
              type='date'
              size='small'
              margin='dense'
              helperText='Start Date'
              value={formDetails.StartDate}
              onChange={handleStartDate}
              error={submitting && !formDetails.StartDate}
            />
            <Input
              type='date'
              size='small'
              margin='dense'
              helperText='Graduation Date'
              value={formDetails.Graduation}
              onChange={handleGraduation}
              error={submitting && !formDetails.Graduation}
            />
          </DateContainer>
          <Button onClick={handleFormSubmit}>Submit</Button>
          <h3
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            Cancel
          </h3>
        </Form>
      ) : data.length === 0 ? (
        <NoDataMessage>
          <div>
            <img src={profileSectionEmpty} alt='profile' />
          </div>
          <h3>
            No Data Available.{' '}
            <span
              onClick={() => {
                setShowForm(!showForm);
              }}
            >
              Update now
            </span>
          </h3>
        </NoDataMessage>
      ) : (
        <>
          <AddFieldButton
            onClick={() => {
              setShowForm(!showForm);
            }}
          >
            + Add new field
          </AddFieldButton>
          {data.map((content, id) => {
            return (
              <Databox key={id}>
                <div>
                  <MdDelete
                    onClick={() => {
                      handleDelete(id);
                    }}
                  />
                  <BiEdit
                    onClick={() => {
                      handleEdit(id);
                    }}
                  />
                </div>

                <h3>
                  {content.School}, <span>{content.Location}</span>
                </h3>
                <p>
                  {content.Degree}, {content.Course}
                </p>
                <p>CGPA: {content.CGPA}</p>
                <p>Graduation: {content.Graduation}</p>
              </Databox>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default EducationalDetailsForm;

const Container = styled.div`
  padding: 20px;
  ${
    '' /* box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%); */
  }
  h1 {
    color: darkblue;
  }
`;

const DateContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const NoDataMessage = styled.div`
  text-align: center;
  display: flex;
  height: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    img {
      width: 420px;
    }
  }
  h3 {
    font-size: 18px;
    text-transform: uppercase;

    span {
      color: darkblue;
    }
  }
`;

const Form = styled.form`
  width: 400px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

// const Input = styled.input`
//   width: 360px;
//   font-size: 18px;
//   padding: 5px;
//   margin: 5px;
//   border: 1.5px solid darkblue;
//   border-radius: 3px;
// `;
const Button = styled.button`
  font-size: 18px;
  width: 100%;
  background-color: darkblue;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  min-width: 200px;
  padding: 5px 20px;
  outline: none;
  border: none;
  border-radius: 3px;
  margin: 10px 0px 5px 0px;
`;

const Databox = styled.div`
  background-color: whitesmoke;
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  position: relative;
  box-shadow: 0px 2px 1px -1px rgb(0 0 0 / 20%),
    0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%);

  &:hover {
    div {
      display: block;
    }
  }
  div {
    position: absolute;
    top: 10px;
    right: 20px;
    padding: 10px;
    color: darkblue;
    cursor: pointer;
    display: none;
  }
  h3 {
    color: darkblue;
    text-transform: uppercase;
    padding-bottom: 10px;
  }
  p {
    color: rgba(0, 0, 0, 0.7);
  }
`;

const AddFieldButton = styled.button`
  margin-bottom: 30px;
  font-size: 18px;
  background-color: darkorange;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  min-width: 200px;
  padding: 5px 20px;
  cursor: pointer;
  outline: none;
  border: none;
  border-radius: 3px;
`;
