import { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      phone: data.get('phone'),
    });
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

export default App
