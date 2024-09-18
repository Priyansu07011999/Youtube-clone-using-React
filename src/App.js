import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Box } from '@mui/material'
import {Feed, VideoDetails, ChannelDetails, SearchFeeds, Navbar} from './components'

const App = () => (
  <BrowserRouter>
    <Box sx={{backgroundColor: '#000'}}>
      <Navbar/>
      <Routes>
        <Route path='/' exact element={<Feed/>}/>
        <Route path='/video/:id' exact element = {<VideoDetails/>}/>
        <Route path='/channel/:id' exact element = {<ChannelDetails/>}/>
        <Route path='/search/:searchTerm' exact element = {<SearchFeeds/>}/>
      </Routes>
    </Box>
  </BrowserRouter>
)
export default App