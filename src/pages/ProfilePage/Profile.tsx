import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { Typography, Box, TextField, Button, Avatar, Container, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { SessionContext, SessionContextType } from "../../contexts/SessionContext";
import PersonIcon from '@mui/icons-material/Person';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#2E2E2E',
  color: '#FFF',
  minHeight: '100vh',
  padding: '20px',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#6A1B9A',
  width: 100,
  height: 100,
  marginBottom: '20px',
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: '20px',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '15px',
  '& label.Mui-focused': {
    color: '#6A1B9A',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#6A1B9A',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#6A1B9A',
    },
    '&:hover fieldset': {
      borderColor: '#8E24AA',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#6A1B9A',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  backgroundColor: '#6A1B9A',
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#8E24AA',
  },
}));

const ProfilePage: React.FC = () => {
  const { user, updateUser } = useContext(SessionContext) as SessionContextType;
  const [newUserInfo, setNewUserInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    age: user?.age || '',
    address: user?.address || '',
    phone: user?.phone || '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateUser(newUserInfo);
  };

  return (
    <StyledContainer component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, width: '100%', textAlign: 'center', backgroundColor: '#333', color: '#fff' }}>
        <StyledAvatar>
          <PersonIcon fontSize="large" />
        </StyledAvatar>
        <Typography component="h1" variant="h4">
          Profile Information
        </Typography>
        <StyledForm onSubmit={handleSubmit}>
          <StyledTextField
            name="name"
            label="Name"
            value={newUserInfo.name}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <StyledTextField
            name="email"
            label="Email"
            value={newUserInfo.email}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <StyledTextField
            name="age"
            label="Age"
            value={newUserInfo.age}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <StyledTextField
            name="address"
            label="Address"
            value={newUserInfo.address}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <StyledTextField
            name="phone"
            label="Phone"
            value={newUserInfo.phone}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          
        </StyledForm>
      </Paper>
    </StyledContainer>
  );
};

export default ProfilePage;

