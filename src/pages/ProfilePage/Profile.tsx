import React, { useState, useContext, ChangeEvent, FormEvent } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import { SessionContext, SessionContextType } from "../../contexts/SessionContext";

const ProfilePage: React.FC = () => {
  const { user, updateUser } = useContext(SessionContext) as SessionContextType;
  const [newUserInfo, setNewUserInfo] = useState({
    name: user?.name || '',
    email: user?.email || '',
    age: user?.age || '',
    address: user?.address || '',
    phone: user?.phone || '',
    github: user?.github || '',
   
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
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>
        Profile Information
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="name"
          label="Name"
          value={newUserInfo.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          name="email"
          label="Email"
          value={newUserInfo.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          name="age"
          label="Age"
          value={newUserInfo.age}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          name="address"
          label="Address"
          value={newUserInfo.address}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
         <TextField
          name="phone"
          label="Phone"
          value={newUserInfo.phone}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          name="github"
          label="Github"
          value={newUserInfo.github}
          onChange={handleChange}
          fullWidth
          margin="normal"
          variant="outlined"
        />
      </form>
    </Box>
  );
}

export default ProfilePage;