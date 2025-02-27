
import { useState } from "react";
import Comp1 from "./comp1";
const App=()=>{

return(
  <>
  const [user,setUser]=useState("nikhil");
  <h1>hello</h1>

  <h1> my program app welcome: {user} </h1>
  <Comp1  user={user} />
  </>
)
}
export default  App;