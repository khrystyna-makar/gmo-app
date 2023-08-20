import { useNavigate } from "react-router-dom";
import { useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import '../index.css'

function First() {

  let navigate = useNavigate();

  useEffect(() => {
    localStorage['isAllowed'] = false;
  }, [])

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    localStorage['email'] = data.get('email');
    localStorage['phone'] = data.get('phone');
    localStorage['name'] = data.get('name');
    localStorage['isAllowed'] = true;
    navigate('/second');
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit} >
        <TextField
          className="textField"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoComplete="name"
        />
        <TextField
          className="textField"
          required
          fullWidth
          id="phone"
          label="Phone Number"
          name="phone"
          autoComplete="phone"
        />
        <TextField
          className="textField"
          required
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          autoComplete="email"
        />
        <Button type="submit" variant="contained">Submit</Button>
      </Box>
    </>
  )
}

export default First;
