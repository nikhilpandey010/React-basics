import axios from "axios";
import { useState,useEffect } from "react";
import deleteimg from "../images/deleteimg.png";


const Practice=()=>{
    const [mydata,setMydata]=useState([])
    const loadData=async()=>{
        let api=`http://localhost:3000/students`;
        let response= await axios.get(api);
        setMydata(response.data)
        

    }

    useEffect(()=>{
        loadData();
    },[])

    const myDel=(id)=>{
        let api=`http://localhost:3000/students/${id}`;
        axios.delete(api);
        alert(" Data deleted sucessfully ");
        loadData();
    }

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.mobile}</td>
                <td>{key.salary}</td>
                <td><img src={deleteimg} width="20px" height="20px" onClick={()=>{myDel(key.id)}} /></td>



            </tr>
            
            </>
        )
    })

    
    return(
        <>
        <table>
            <tr>
    
                <th>Name</th>
                <th>City</th>
                <th>Mobile</th>
                <th>Salary</th>
                <th>Delete</th>
                <th>Edit</th>






            </tr>
            {ans}
        </table>

        </>
    )
}
export default Practice;