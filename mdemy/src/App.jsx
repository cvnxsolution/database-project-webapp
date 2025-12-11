import React from 'react'
import Navbar from './components/navbar'
import { BrowserRouter, Routes ,Route} from 'react-router-dom'
import Courses from './components/Courses'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/courses' element={<Courses/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App