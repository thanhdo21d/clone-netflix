import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import SingUp from './pages/SingUp'
import Nefix from './pages/Nefix'
import Player from './pages/Player'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Nefix />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Signup" element={<SingUp />} />
        <Route exact path="player" element={<Player />} />


      </Routes>
    </BrowserRouter>
  )
}

// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Login from './pages/Login';
// import SignUp from './pages/SignUp';
// import Netflix from './pages/Netflix';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Netflix />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<SignUp />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
