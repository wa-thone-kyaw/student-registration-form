import React, {useState} from "react";
export const Date= () => {
  const[date,setDate]=useState();
  console.log("Date", date);
  return(
    <input type="date" onChange={e=>setDate(e.target.value)}/>
  );
}
export default Date;
