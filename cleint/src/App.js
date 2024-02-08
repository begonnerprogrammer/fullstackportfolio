
import Navbar from "./components/navbar.jsx"
import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import Home from "./components/home.jsx"
import Contact from "./components/contact.jsx"
import About from "./components/about.jsx"
import Projects from "./components/projects.jsx"
import Skills from "./components/skills.jsx";
function App() {
  return (
 <div>

   <Router>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} ></Route>
      <Route path='/contact' element={<Contact/>} ></Route>
      <Route path='/about'  element={<About/>}></Route>
      <Route path='/projects' element={<Projects/>} ></Route>
      <Route path="/skills" element={<Skills/>} />
         </Routes>
   </Router>
   
 </div>
  );
}

export default App;
