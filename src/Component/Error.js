import React from 'react';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

const Error = () => {
    const navigate = useNavigate();
  return (
    <div className='error'>
        <h1>404 page not found</h1>
        <Button variant="contained" color='error' onClick={()=>{navigate('/')}}>Go home</Button>
    </div>
  )
}

export default Error