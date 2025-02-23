import axios from "axios";
import { useState } from "react"

const Insert=()=>{

    const [input,setInput]= useState({});
    const handelInput=(e)=>{
       let name=e.target.name;
       let value=e.target.value;
       setInput(values=>({...values,[name]:value}));

       console.log(input);
    }

    // const handelSubmit=()=>{
    //     let api="http://localhost:3000/students";
    //     axios.post(api,input).then((res)=>{
    //         alert("data save sucessfully !!!");
    //     });
        
    // }


    // onother way to do this.....
    const handelSubmit= async()=>{
        let api="http://localhost:3000/students";
        const response = await axios.post(api,input);
        alert("Data saved sucessfully ");
    }


    return(
    <>
    <h1>Insert Data </h1>
    <br/>

    Name: <input type="text" name="name" onChange={handelInput} />
    <br/>
    City: <input type="text" name="city" onChange={handelInput} />
    <br/>
    Moblie: <input type="text"  name="mobile" onChange={handelInput}/>
    <br/>
    salary: <input type="text" name="salary" onChange={handelInput}/>
    
    <button onClick={handelSubmit}>My button</button>
    </>
    )
}

export default  Insert;