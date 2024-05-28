import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Today = lazy(() => import('./pages/Today'));
const Japan = lazy(() => import('./pages/Japan'));
const Taiwan = lazy(() => import('./pages/Taiwan'));
const Honkong = lazy(() => import('./pages/Honkong'));
const Singapore = lazy(() => import('./pages/Singapore'));
const Vietnam = lazy(() => import('./pages/Vietnam'));
const Usa = lazy(() => import('./pages/Usa'));
const Australia = lazy(() => import('./pages/Australia'));
const Europe = lazy(() => import('./pages/Europe'));
const Channel = lazy(() => import('./pages/Channel'));
const Video = lazy(() => import('./pages/Video'));
const Search = lazy(() => import('./pages/Search'));
const Not = lazy(() => import('./pages/Not'));


const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/today' element={<Today />} />
          <Route path='/japan' element={<Japan />} />
          <Route path='/taiwan' element={<Taiwan />} />
          <Route path='/honkong' element={<Honkong />} />
          <Route path='/singapore' element={<Singapore />} />
          <Route path='/vietnam' element={<Vietnam />} />
          <Route path='/usa' element={<Usa />} />
          <Route path='/australia' element={<Australia />} />
          <Route path='/europe' element={<Europe />} />
          <Route path='/channel/:channelId' element={<Channel />} />
          <Route path='/video/:videoId' element={<Video />} />
          <Route path='/search/:searchId' element={<Search />} />
          <Route path='*' element={<Not />} />
        </Routes>
      </Suspense >
    </BrowserRouter >
  );
}

export default App