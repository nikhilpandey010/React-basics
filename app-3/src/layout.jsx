import { Link, Outlet } from "react-router-dom"

const Layout=()=>{
   return(
    <>
    <Link to="home">Home</Link>
    <Link to="about">About</Link>
    <Link to="insert">Insert</Link>
    <Link to="display">Display</Link>
    <Link to="search">Search</Link>
    <Link to="update">Update</Link>
    <Link to="contact">Contact</Link>
    <Link to="practice">practice</Link>





    <hr/>
    <Outlet/>
    <hr/>

    www.mycompany.com

    </>
   ) 
}
export default Layout;