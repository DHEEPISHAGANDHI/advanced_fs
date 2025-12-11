import React from 'react'
import Nav from './Nav';
import "./styles/nav.css"
import ParentComponent from './ParentComponent';
import ClassBasedComponent from './ClassBasedComponent';
import Register from './Register';
import  {BrowserRouter, Route, Routes} from 'react-router-dom';
import Adduser from './AddUser';
import Getuser from './GetUsers';
import About from './About';
import Contact from './contact';
import Home from './Home';


const App = () => {
  return (
    <div>
        {/* <Nav/>
        <Register/> */}

          <BrowserRouter>
          <Nav/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/adduser' element={<Adduser/>} />
            <Route path='/getuser' element={<Getuser/>} />
            <Route path='/about' element={<About/>} />
            <Route path='/contact' element={<Contact/>} />  
          </Routes>
          </BrowserRouter>
        {/* <ParentComponent/>
        <hr />
        <ClassBasedComponent/> */}
    </div>
  )
}

export default App
