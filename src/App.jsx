import { useState } from 'react';
import {
  Routes,
  BrowserRouter as Router,
  Route
} from "react-router-dom";
import Homepage from './Components/Homepage';
import Connect from './Components/Connect';

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<Homepage />} path='/' />
        <Route element={<Connect />} path='/connect' />
        <Route element={<Connect />} path='*' />
      </Routes>
    </Router>
  )
}

export default App
