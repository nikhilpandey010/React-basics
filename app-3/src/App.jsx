import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./layout"
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Insert from "./pages/insert";
import Display from "./pages/display";
import Search from "./pages/search";
import Update from "./pages/update";
import Practice from "./pages/practice";
import Editdata from "./pages/editdata";







function App() {
 
  return (
    <>
    <h1>hello friends</h1>
    <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout/>}>
        <Route index element={<Home/>} />
        <Route path="home" element={<Home/>} />
        <Route path="about" element={<About/>} />
        <Route path="insert" element={<Insert/>} />
        <Route path="display" element={<Display/>} />
        <Route path="search" element={<Search/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="update" element={<Update/>} />
        <Route path="search" element={<Search/>}/>
        <Route path="practice" element={<Practice/>}/>
        <Route path="editdata/:id" element={<Editdata/>}/>
        

    





           
         
        </Route>
      </Routes>
     
    </BrowserRouter> 

    </>
  )
}

export default App;
