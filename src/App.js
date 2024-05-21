import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Japan from './pages/Japan'
import Thailand from './pages/Thailand'
import Honkong from './pages/Honkong'
import Singapore from './pages/Singapore'
import Vietnam from './pages/Vietnam'
import Usa from './pages/Usa'
import Australia from './pages/Australia'
import Europe from './pages/Europe'
import Channel from './pages/Channel'
import Video from './pages/Video'
import Search from './pages/Search'
import Not from './pages/Not'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/japan' element={<Japan />} />
        <Route path='/thailand' element={<Thailand />} />
        <Route path='/honkong' element={<Honkong />} />
        <Route path='/singapore' element={<Singapore />} />
        <Route path='/vietnam' element={<Vietnam />} />
        <Route path='/usa' element={<Usa />} />
        <Route path='/australia' element={<Australia />} />
        <Route path='/europe' element={<Europe />} />
        <Route path='/channel:channelID' element={<Channel />} />
        <Route path='/video/:videoID' element={<Video />} />
        <Route path='/search/:searchID' element={<Search />} />
        <Route path='/*' element={<Not />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App