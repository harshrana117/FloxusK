import React, { useEffect, useState } from 'react';
import Input from '@mui/material/TextField';
import { MdDelete } from 'react-icons/md';
import { firestore } from '../../firebase/firebase';
import profileSectionEmpty from '../../assets/svg/profileSectionEmpty.svg';
import styled from '@emotion/styled';
import { useSelector } from 'react-redux';
import { BiEdit } from 'react-icons/bi';
import Snackbar from '../Snackbar/Snackbar';

const ProjectsForm = () => {
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
    Title: '',
    Description: '',
    ProjectLink: '',
    TechStack: '',
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
              if (doc.data().projectDetails) {
                setData(doc.data().projectDetails);
              }
            } else {
              setSnackMessage('Nothing to show');
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
  const handleTitle = (e) => {
    setFormDetails({
      ...formDetails,
      Title: e.target.value,
    });
  };

  const handleDescription = (e) => {
    setFormDetails({
      ...formDetails,
      Description: e.target.value,
    });
  };
  const handleProjectLink = (e) => {
    setFormDetails({
      ...formDetails,
      ProjectLink: e.target.value,
    });
  };
  const handleTechStack = (e) => {
    setFormDetails({
      ...formDetails,
      TechStack: e.target.value,
    });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    if (
      formDetails.Title &&
      formDetails.Description &&
      formDetails.ProjectLink &&
      formDetails.TechStack
    ) {
      const tempData = [formDetails, ...data];
      setData(tempData);
      firestore
        .collection('users')
        .doc(user.id)
        .update({
          projectDetails: tempData,
        })
        .then(() => {
          setFormDetails({
            Title: '',
            Description: '',
            ProjectLink: '',
            TechStack: '',
          });
          setSnackOpen(true);
          setSnackMessage('Saved Changes');
          setShowForm(!showForm);
        })
        .catch('some error occured');
    } else {
      setSnackOpen(true);
      setSnackMessage('Some fields are empty.');
    }
  };

  const handleDelete = (id) => {
    const tempData = data.filter((item) => data.indexOf(item) !== id);
    firestore
      .collection('users')
      .doc(user.id)
      .update({
        projectDetails: tempData,
      })
      .then(() => {
        setFormDetails({
          Title: '',
          Description: '',
          ProjectLink: '',
          TechStack: '',
        });
        setSnackMessage('Deleted!');
        setSnackOpen(true);
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
      <h1>Projects</h1>
      {showForm ? (
        <Form>
          <Input
            type='text'
            fullWidth
            size='small'
            margin='dense'
            placeholder='Title'
            value={formDetails.Title}
            onChange={handleTitle}
            error={submitting && !formDetails.Title}
          />
          <Input
            type='text'
            fullWidth
            size='small'
            margin='dense'
            placeholder='Description'
            multiline={true}
            maxRows='5'
            value={formDetails.Description}
            onChange={handleDescription}
            error={submitting && !formDetails.Description}
          />
          <Input
            type='text'
            fullWidth
            margin='dense'
            size='small'
            placeholder='Project Link / Github repo'
            value={formDetails.ProjectLink}
            onChange={handleProjectLink}
            error={submitting && !formDetails.ProjectLink}
          />
          <Input
            type='text'
            fullWidth
            size='small'
            margin='dense'
            placeholder='Tech stack used(space separated)'
            value={formDetails.TechStack}
            onChange={handleTechStack}
            error={submitting && !formDetails.TechStack}
          />
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
                <h3>{content.Title}</h3>
                <p>{content.Description}</p>
                <p>{content.TechStack}</p>
                <a href={content.ProjectLink}>Project Link</a>
              </Databox>
            );
          })}
        </>
      )}
    </Container>
  );
};

export default ProjectsForm;

const Container = styled.div`
  padding: 20px;
  h1 {
    color: darkblue;
  }
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
    padding-bottom: 20px;
    text-transform: uppercase;
  }

  p {
    color: rgba(0, 0, 0, 0.7);
    padding-bottom: 10px;
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
