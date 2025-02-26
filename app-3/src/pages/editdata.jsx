import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const Editdata=()=>{

    const {id}= useParams();
    const [empdata ,setEmpdata]= useState({});

    const loadData=async()=>{
        let api=`http://localhost:3000/students/${id}`;
       let response= await axios.get(api);
        setEmpdata(response.data);
    }

    useEffect(()=>{
        loadData();
    },[])

    const handelInput=(e)=>{
        let name= e.target.name;
        let value=e.target.value;
        setEmpdata(values=>({...values,[name]:value}));
        console.log(empdata)
    }

    const handelSubmit=async()=>{
        let api=`http://localhost:3000/students/${id}`;
        const response= await axios.put(api,empdata);
        alert("Record updated sucessfully");
    }

    return(
        <>
        <h1>Edit data</h1>
        Name: <input type="text" name="name" value={empdata.name} onChange={handelInput} />
        <br/>
        City: <input type="text" name="city" value={empdata.city} onChange={handelInput} />
        <br/>
        Moblie: <input type="text"  name="mobile" value={empdata.mobile} onChange={handelInput}/>
        <br/>
        salary: <input type="text" name="salary" value={empdata.salary} onChange ={handelInput}/>
        
        <button onClick={handelSubmit}>My button</button>
        
        </>
    )
}
export default Editdata ;