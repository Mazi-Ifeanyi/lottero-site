import React from 'react';
import MainUI from './components/UI/MainUI';
import { Routes, Route, Navigate } from 'react-router-dom';
import HomeRoute from './routes/HomeRoute';
import PlayersRoute from './routes/PlayersRoute';

function App() {
  return (
      <MainUI>
        <Routes>
          <Route path='/' element={<Navigate to='home'/>} />
          <Route path='/home' element={<HomeRoute />} />
          <Route path='/players' element={<PlayersRoute />} />
          <Route path='/players/:ca' element={<PlayersRoute />} />
          <Route path='*' element={<Navigate to='home' />} />
        </Routes>
      </MainUI>
  );
}

export default App;
