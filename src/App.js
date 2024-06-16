import React from 'react';
import { useState } from'react';
import { BrowserRouter, Routes, Route } from'react-router-dom';
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Landing from './Pages/Landing'

function App() {
  const [users, setUsers] = useState([

    {
      username: "gokul",
      password: "123"
    }

  ])



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login users={users} setUsers={setUsers} />}></Route>
          <Route path='/signup' element={<Signup users={users} setUsers={setUsers}/>}></Route>
          <Route path='/landing' element={<Landing />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
