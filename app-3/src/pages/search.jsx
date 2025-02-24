import axios from "axios";
import { useState } from "react";


const Search=()=>{
const [input,setInput]=useState("");
const [mydata, setMydata]= useState([])
const handelSubmit=async()=>{
    let api =`http://localhost:3000/students/?name=${input}`;
    let response= await axios.get(api);
    console.log(response.data);
    setMydata(response.data);


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
   <input type="search" value={input} onChange={(e)=>{setInput(e.target.value)}} />
   <button onClick={handelSubmit}>Search</button>

   <table>
    <tr>
        <th>Name</th>
        <th>City</th>
        <th>Mobile</th>
        <th>Salary</th>



    </tr>
    {ans}
   </table>

       
    
    </>
    )

}
export default Search;
