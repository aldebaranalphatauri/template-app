import * as React from 'react'
import { useNavigate } from 'react-router-dom'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { useAppState } from '../contexts/appState'


export default function List() {
  const [items, setItems] = React.useState([])
  const navigate = useNavigate()
  const [ state, dispatch ] = useAppState()

  const getList = async (name) => {
    let obj = {
      name: name
    }
    let response = await fetch("/api/getList", {
      method: 'POST',
      headers: {
        'Accept': '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
    if (!response.ok) {
      throw new Error('HTTP error! status: ' + response.status)
    } else {
      return await response.json();
    }
  }

  const handleFetch = async () => {
    try {
      let list = await getList("anyParam")
      setItems(list.list)
      dispatch({ 
        type: 'CONCATLIST',
        payload: list.list
      })
    } catch (e) {
      console.log("Something went wrong calling server: " + e.message)
    }
  }

  const handleClick = () => {
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>

        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom component="div">
            List of Items (local)
          </Typography>
          {/* Check to see if any items are fetched*/}
          {items.length ? (
            <div>
              {/* Render the list of items */}
              {items.map((anItem, index) => {
                return (
                  <Typography key={index} variant="body1" gutterBottom>
                    {anItem}
                  </Typography>
                );
              })}
            </div>
          ) : (
            <Typography variant="subtitle1" gutterBottom component="div">
              List is not available yet
            </Typography>
          )}
        </Grid>

        <Grid item xs={6}>
          <Typography variant="h5" gutterBottom component="div">
            List of Items (global)
          </Typography>
          {/* Check to see if any items are fetched*/}
          {state.globalList.length ? (
            <div>
              {/* Render the list of items */}
              {state.globalList.map((anItem, index) => {
                return (
                  <Typography key={index} variant="body1" gutterBottom>
                    {anItem}
                  </Typography>
                );
              })}
            </div>
          ) : (
            <Typography variant="subtitle1" gutterBottom component="div">
              List is not available yet
            </Typography>
          )}
        </Grid>

        <Grid item xs={12}>
          <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button onClick={handleFetch} >Fetch items</Button>
            <Button onClick={handleClick} >Back home</Button>
          </Box>
        </Grid>
      </Grid>
    </Box>
  )
}