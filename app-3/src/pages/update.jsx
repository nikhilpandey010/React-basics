import axios from "axios";
import { useState,useEffect } from "react";

import editimg from "../images/editimage.png";
import deleteimg from "../images/deleteimg.png";
import { useNavigate } from "react-router-dom";


const Update=()=>{
const[mydata,setMydata]=useState([])
const navigate= useNavigate();

    const loadData=async()=>{
        let api="http://localhost:3000/students";
        let response= await axios.get(api);
        console.log(response.data);
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    },[])

    const mydel=async(id)=>{
        let api=`http://localhost:3000/students/${id}`;
        let response= await axios.delete(api);
        alert("deleted sucessfully");
        loadData();
    }

    const myedit=(id)=>{
        navigate(`/editdata/${id}`);
    }



const ans=mydata.map((key)=>{
    return(
        <tr>
        <td>{key.name}</td>
        <td>{key.city}</td>
        <td>{key.mobile}</td>
        <td>{key.salary}</td>
        <td>
            <a href="#">
            <img src={deleteimg}  width="30" height="30"  onClick={()=>{mydel(key.id)}}/>
            
            </a>
        </td>
        <td>

          <a href="#">

          <img src={editimg} width="20px" height="20px" onClick={()=>{myedit(key.id)}}  />
          </a>
        </td>



    </tr>
    )
})
    return(
    <>
    <table >
        <tr>
        <th>Name</th>
        <th>city</th>
        <th>mobile</th>
        <th>salary</th>
        <th>delete</th>
        <th>edit</th>






        </tr>
        {ans}
    </table>
    
    </>
    )

}
export default Update ;
