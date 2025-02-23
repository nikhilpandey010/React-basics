

import { useState, useEffect } from "react";

import axios from "axios";
const Display=()=>{
    const [mydata,setMydata]=useState([]);
    const loadData= async()=>{
        let api ="http://localhost:3000/students";
        const response= await axios.get(api);
        console.log(response.data)
        setMydata(response.data);
    }

    useEffect(()=>{
        loadData();
    },[])

    const ans=mydata.map((key)=>{
        return(
            <>
            <tr>
                <td>{key.name}</td>
                <td>{key.city}</td>
                <td>{key.mobile}</td>
                <td>{key.salary}</td>


    
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>Display data</h1>
        <table width="500px"  border="2px" >
        <tr>
          <th>Name</th>  
          <th>city</th>  
          <th>contact</th>
          <th>salary</th>

        </tr>
        {ans}
        </table>

        </>
    )
}

export default Display;

