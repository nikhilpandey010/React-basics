import axios from "axios";
import { useState } from "react";


const Search=()=>{
const [input,setInput]=useState("");
const [mydata, setMydata]= useState({})
const handelSubmit=async()=>{
    let api =`http://localhost:3000/students/${input}`;
    let request= await axios.get(api);
    console.log(request.data);
    setMydata(request.data)


}

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
   <input type="search" value="search" onChange={(e)=>{setInput(e.target.value)}} />
   <button onClick={handelSubmit}>Search</button>

   <table>
    <tr>
        <th>Name</th>
        <th>City</th>
        <th>Mobile</th>
        <th>Salary</th>



    </tr>
   </table>


    
    </>
    )

}
export default Search;
