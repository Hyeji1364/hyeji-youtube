import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/Home'
import Today from './pages/Today'
import Japan from './pages/Japan'
import Taiwan from './pages/Taiwan'
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
import Header from './components/section/Header';
import Main from './components/section/Main';
import Footer from './components/section/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/today' element={<Today />} />
          <Route path='/japan' element={<Japan />} />
          <Route path='/Taiwan' element={<Taiwan />} />
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
      </Main>
      <Footer />
    </BrowserRouter>
  )
}

export default App