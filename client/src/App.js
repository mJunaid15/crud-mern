import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Homw from './components/Homw';
import Navbar from './components/Navbar';
import Register from './components/Register';

import { Route, Routes  } from "react-router-dom";
import Edit from './components/Edit';
import Details from './components/Details';


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Homw/>} />
        <Route  path='/register' element={<Register/>} />
        <Route  path='/edit/:id' element={<Edit/>} />
        <Route  path='/view/:id' element={<Details/>} />

      </Routes>
       

    </>
  )
}

export default App