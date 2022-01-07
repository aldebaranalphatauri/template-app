import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button';


export default function Home() {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/list')
  }

  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h3" gutterBottom component="div">
        Project Home
      </Typography>
      <Button onClick={handleClick} >
        See items
      </Button>
    </Box>
  )
}