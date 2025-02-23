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
    
            </tr>
            </>
        )
    })

    return(
        <>
        <h1>Display data</h1>
        <table width="500px" >
        <th>
          <th>Name</th>  
          <th>city</th>  

        </th>
        {ans}
        </table>

        </>
    )
}

export default Display;

