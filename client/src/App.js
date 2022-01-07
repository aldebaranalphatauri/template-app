import * as React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'
import { initialState, appReducers } from './reducers'
import { AppStateProvider } from './contexts/appState'
import Home from './components/Home'
import List from './components/List'


export default function App() {
  return (
    <AppStateProvider reducer={appReducers} initialState={initialState}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }}>
          <BrowserRouter >
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/list' element={<List />} />
            </Routes>
          </BrowserRouter>
        </Box>
      </Container>
    </AppStateProvider>
  )
}