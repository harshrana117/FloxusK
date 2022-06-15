import React, { useEffect, useState } from 'react';
import Input from '@mui/material/TextField';
import { MdDelete } from 'react-icons/md';
import { firestore } from '../../firebase/firebase';
import profileSectionEmpty from '../../assets/svg/profileSectionEmpty.svg';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Snackbar from '../Snackbar/Snackbar';

const ExperienceForm = () => {
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
    Organisation: '',
    Location: '',
    JobTitle: '',
    Type: '',
    EndDate: '',
    StartDate: '',
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
              if (doc.data().experienceDetails) {
                setData(doc.data().experienceDetails);
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
  const handleOrganisation = (e) => {
    setFormDetails({
      ...formDetails,
      Organisation: e.target.value,
    });
  };
  const handleLocation = (e) => {
    setFormDetails({
      ...formDetails,
      Location: e.target.value,
    });
  };
  const handleJobTitle = (e) => {
    setFormDetails({
      ...formDetails,
      JobTitle: e.target.value,
    });
  };
  const handleType = (e) => {
    setFormDetails({
      ...formDetails,
      Type: e.target.value,
    });
  };
  const handleEndDate = (e) => {
    setFormDetails({
      ...formDetails,
      EndDate: e.target.value,
    });
  };
  const handleStartDate = (e) => {
    setFormDetails({
      ...formDetails,
      StartDate: e.target.value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (
      formDetails.Organisation &&
      formDetails.Location &&
      formDetails.JobTitle &&
      formDetails.Type &&
      formDetails.StartDate &&
      formDetails.EndDate
    ) {
      const tempData = [formDetails, ...data];
      setData(tempData);
      firestore
        .collection('users')
        .doc(user.id)
        .update({
          experienceDetails: tempData,
        })
        .then(() => {
          setSnackMessage('saved changes');
          setSnackOpen(true);
          setFormDetails({
            Organisation: '',
            Location: '',
            JobTitle: '',
            Type: '',
            EndDate: '',
            StartDate: '',
          });
          setShowForm(!showForm);
        })
        .catch('some error occured');
    } else {
      setSnackMessage('some fields are empty!');
      setSnackOpen(true);
    }
  };

  const handleDelete = (id) => {
    const tempData = data.filter((item) => data.indexOf(item) !== id);
    firestore
      .collection('users')
      .doc(user.id)
      .update({
        experienceDetails: tempData,
      })
      .then(() => {
        setSnackMessage('Deleted');
        setSnackOpen(true);
        setFormDetails({
          Organisation: '',
          Location: '',
          JobTitle: '',
          Type: '',
          EndDate: '',
          StartDate: '',
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
      <h1>Experience</h1>
      {showForm ? (
        <Form>
          <Input
            type='text'
            fullWidth
            size='small'
            margin='dense'
            placeholder='Organisation'
            value={formDetails.Organisation}
            onChange={handleOrganisation}
            error={submitting && !formDetails.Organisation}
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
            placeholder='Job Title'
            value={formDetails.JobTitle}
            onChange={handleJobTitle}
            error={submitting && !formDetails.JobTitle}
          />
          <FormControl fullWidth size='small' margin='dense'>
            <Select
              value={formDetails.type}
              onChange={handleType}
              displayEmpty
              error={submitting && !formDetails.Type}
            >
              <MenuItem value={'Intern'}>Intern</MenuItem>
              <MenuItem value={'Full Time'}>Full-time</MenuItem>
              <MenuItem value={'Part TIme'}>Part-time</MenuItem>
              <MenuItem value={'Freelance'}>Freelance</MenuItem>
            </Select>
            <FormHelperText>Select Job Type</FormHelperText>
          </FormControl>
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
              helperText='End Date'
              value={formDetails.EndDate}
              onChange={handleEndDate}
              error={submitting && !formDetails.EndDate}
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
                  {content.Organisation}, <span>{content.Location}</span>
                </h3>
                <p>
                  {content.JobTitle}, {content.Type}
                </p>
                <p>
                  Duration: {content.StartDate} - {content.EndDate}
                </p>
              </Databox>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default ExperienceForm;

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
