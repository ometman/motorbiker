import React from 'react';
import {
  Routes,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import Splash from './page/Splash'

const App = () => (
  <BrowserRouter>
    <h1>Welcome to MotorBiker</h1>
    <Routes>
      <Route path="/" element={<Splash />} />
    </Routes>
  </BrowserRouter>
);

export default App;