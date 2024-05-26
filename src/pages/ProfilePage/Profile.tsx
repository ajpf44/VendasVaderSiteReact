import React, { useState, useContext, ChangeEvent, FormEvent, useEffect } from 'react';
import { Typography, Box, TextField, Button, Avatar, Container, Paper, IconButton } from '@mui/material';
import { styled } from '@mui/system';
import { SessionContext, SessionContextType } from "../../contexts/SessionContext";
import PersonIcon from '@mui/icons-material/Person';
import EditIcon from '@mui/icons-material/Edit';

const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#FFF',
  color: '#000',
  minHeight: '100vh',
  padding: '20px',
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  backgroundColor: '#FF69B4',
  width: 100,
  height: 100,
  marginBottom: '20px',
  cursor: 'pointer',
  position: 'relative',
}));

const EditAvatarButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  backgroundColor: '#FFF',
  color: '#FF69B4',
  '&:hover': {
    backgroundColor: '#FF1493',
    color: '#FFF',
  },
}));

const StyledForm = styled('form')(({ theme }) => ({
  width: '100%',
  marginTop: '20px',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: '15px',
  '& label.Mui-focused': {
    color: '#FF69B4',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: '#FF69B4',
  },
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: '#FF69B4',
    },
    '&:hover fieldset': {
      borderColor: '#FF1493',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#FF69B4',
    },
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: '20px',
  backgroundColor: '#FF69B4',
  color: '#FFF',
  '&:hover': {
    backgroundColor: '#FF1493',
  },
}));

const ProfilePage: React.FC = () => {
  const { user, setUser } = useContext(SessionContext) as SessionContextType;

  const [newUserInfo, setNewUserInfo] = useState({
    name: '',
    email: '',
    age: '',
    address: '',
    phone: '',
    bio: '',
    job: '',
    company: ''
  });

  useEffect(() => {
    if (user) {
      setNewUserInfo(user);
    }
  }, [user]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUser(newUserInfo);
    localStorage.setItem('userInfo', JSON.stringify(newUserInfo));
  };

  return (
    <StyledContainer component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ p: 4, width: '100%', textAlign: 'center', backgroundColor: '#FFF', color: '#000' }}>
        <Box sx={{ position: 'relative', display: 'inline-block' }}>
          <StyledAvatar>
            <PersonIcon fontSize="large" />
          </StyledAvatar>
          <EditAvatarButton aria-label="edit avatar">
            <EditIcon />
          </EditAvatarButton>
        </Box>
        <Typography component="h1" variant="h4" sx={{ color: '#000', marginBottom: '20px' }}>
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
          <StyledTextField
            name="bio"
            label="Bio"
            value={newUserInfo.bio}
            onChange={handleChange}
            fullWidth
            multiline
            rows={4}
            variant="outlined"
          />
          <StyledTextField
            name="job"
            label="Job"
            value={newUserInfo.job}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <StyledTextField
            name="company"
            label="Company"
            value={newUserInfo.company}
            onChange={handleChange}
            fullWidth
            variant="outlined"
          />
          <StyledButton type="submit" fullWidth variant="contained">
            Save
          </StyledButton>
        </StyledForm>
      </Paper>
    </StyledContainer>
  );
};

export default ProfilePage;

