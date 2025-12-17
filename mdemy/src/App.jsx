import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Courses from "./components/Courses";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Navbar />  
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/courses" element={<Courses />} />
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default App;
