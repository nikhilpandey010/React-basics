
// import Bhopal from "./bhopal"
// import Cybrom from "./cybrom"
// import image1 from "./images/one.jpg"
// import image2 from "./images/two.jpg"
// import image3 from "./images/three.jpg"

// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import Carousel from 'react-bootstrap/Carousel';

// import a1 from './images/one.jpg'
// import a2 from './images/two.jpg'
// import a3 from './images/three.jpg'


import { BrowserRouter,Routes,Route } from "react-router-dom";

import Layout from "./layout";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Nopage from "./pages/nopage";
import Display from "./pages/display";

import { useEffect, useState } from "react";

import axios from "axios" ;




// const x= {
//   display :"flex",
//   alignItem:"center",
//   justifyContent:"center",
//   width:"100vw"
// }

// const a={
//   width:"500px",
//   height:"300px",
//   backgroundColor: "red",
//   display:"flex",
//   alignItem :"center",
//   justifyContent :"center"


// }
// const b= {
//   width:"350px",
//   height: "200px",
//   backgroundColor: "yellow",
//   display:"flex",
//   alignItem :"center",
//   justifyContent : "center"


// }
// const c= {
//   width:"250px",
//   height:"100px",
//   backgroundColor: "green",
//   display:"flex",
//   alignItem:"center",
//   justifyContent : "center",

// const Display=()=>{
//   alert("this is my function")
// }
// const MyName=(fnm,snm)=>{
//   alert(`My first name is ${fnm} and last name is ${snm}`)
// }
// const Mybhopal=(nm,e)=>{
//   alert("name : "+ nm +"event name " + e.type)
//   console.log(e)
// }
// const getvalue=(e)=>{
//   let name = e.target.name;
//   let value = e.target.value;
//   alert("name: "+ name + " value : "+value)
// }
// const handelInput=(e)=>{
//   let name = e.target.name;
//   let value = e.target.value;
//   alert("name: "+ name + " value : " + value)
//   console.log({[name]:value})  //  we have to give name in  square bracket so that it pick the value of name insteed of name
//   // this is very important 
// }




// }


const App=()=>{

// const [data,setData] = useState("bhopal");
// const [color,setcolor]= useState("red");
// const [count,setcount]= useState(0);

// const myval=()=>{
//   setData("indore");
// }
// const mydec=()=>{
//   if(count <=0)
//   {
//     alert("you can decrease further ");
//   }
//   else{
//     setcount(count-1);
//   }
// }

// 19/02/25
// // const [multi,setmulti]= useState(0);
// const [count,setcount]= useState(0);

// useEffect(()=>{
//   setcount(count+1)
// })



// useEffect(()=>{
//   setcount(count +1)
// },[])

// useEffect(()=>{
// setmulti(count*2)


// },[count]);

// const[empno,setempno]=useState("");
// const[name,setname]= useState("");
// const[city,setcity]= useState("");
// const[salary,setsalary]=useState("");
// const handelsubmit=()=>{
//   console.log({name:name ,city:city ,empno:empno ,salary:salary});
// }


const [input,setinput] = useState({});

const handelinput=(e)=>{
  let name= e.target.name;
  let value= e.target.value;

setinput(values=>({...values,[name]:value}));


   
  console.log(input)
 


}
// const handelsubmit=()=>{
// console.log(input)

// }


const handelsubmit=()=>{
  let api="http://localhost:3000/students";
          axios.post(api,input).then((res)=>{
              alert("data save sucessfully !!!");
          });
          
  }





  return(
    <>
     {/* <div style={x}>
      <div style={a}>
        <div style={b}>
          <div style={c}>
            <h1 style={{Color:"red" ,fontSize:"30px",fontFamily:"sans-serif"}}>Nikhil pandey</h1>
          </div>
        </div>
      </div>
    </div>
    <Bhopal/>
    <Cybrom/>

<img src ={image1}/>
<img src ={image2}/>
<img src ={image3}/> 


 <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      <Carousel>
      <Carousel.Item>
        <img src={image1} style={{width:"100%" , height:"600px"}}/>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image2} style={{width:"100%" , height:"600px"}}/>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={image3} style={{width:"100%" , height:"600px"}}/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    <Card style={{ width: '18rem' }}>
   <img src={image3} alt="" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card> */}

     

      <BrowserRouter>
      <Routes>
        
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="home" element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contact/>}/>
          <Route path="display" element={<Display/>}/>

          <Route path="*" element={<Nopage/>}/>
        </Route>
      </Routes>
     
    </BrowserRouter> 


 

 {/* <h1>welcome to react event</h1>
 <button onClick={Display}>Button</button>
 <button onClick={()=>{MyName("nikhil","pandey")}}>Button2</button>
 <button onClick={(e)=>{Mybhopal("nikhil",e)}}>Button3</button>

 <button name="btn" value="button001" onClick={getvalue}>button-4</button>

 Enter city : <input type="text" name="city" value="bhopal" onChange={handelInput} />

 */}
 
 {/* <h1>welcome to : {data}</h1>
 <button onClick={myval}>click here </button>

 <h1 style={{color:color}}>my color is : {color}</h1>
 <button onClick={()=>{setcolor("green")}}>green</button>
 <button onClick={()=>{setcolor("yellow")}}>yellow</button>
<br/>
<br/>

 <button onClick={()=>{setcount(count+1)}}>Increament</button>
 <h1>my count is: {count} </h1>
 <button onClick={mydec}>decrement</button> */}




{/* <h1> count is : {count}</h1>

<h1> multiplication is : {multi}</h1>

<button onClick={()=>{setcount(count+1)}}>button</button> */}


<h1>Application form</h1>

{/* name: <input type="text" value={name}  onChange={(e)=>{setname(e.target.value)}}/>
city: <input type="text"  value={city} onChange={(e)=>{setcity(e.target.value)}}/>

Emp no: <input type="text"  value={empno} onChange={(e)=>{setempno(e.target.value)}}/>
salary: <input type="text"  value={salary} onChange={(e)=>{setsalary(e.target.value)}}/>


<button onClick={handelsubmit}>button1</button> */}


{/* name: <input type="text" name="name"  onChange={handelinput}/>
city: <input type="text"  name="city" onChange={handelinput}/>

salary: <input type="text"  name="salary" onChange={handelinput}/> */}


name: <input type="text" name="name"  onChange={handelinput}/>
city: <input type="text"  name="city" onChange={handelinput}/>

<button onClick={handelsubmit}>button1</button>







  </>
  )
}

export default App;
