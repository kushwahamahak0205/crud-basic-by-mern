import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
const EditDataShow=()=>
{
  const {id} = useParams();
  const navigate = useNavigate();
  const [input, setInput]=useState({});
 const loadData=()=>
 {
   let url="http://localhost:8000/student/stuedit";
   axios.post(url, {id:id}).then((res)=>{
    setInput(res.data);
   })
 }
useEffect(()=>{
  loadData();
}, []);
const handleInput=(e)=>{
   let name=e.target.name;
   let value=e.target.value;
   setInput(values=>({...values, [name]:value}));
 }
 const handleSubmit=()=>{
  let url="http://localhost:8000/student/editDataSave";  
  axios.post(url, input).then((res)=>{
     alert("succesfully Updated");
     navigate("/display");
  });
 }
  return(
 <>
 <div className="container">
   <h1> Edit Student Record</h1>  
  <label>  Enter Rollno :</label><input type="text" name="rollno" value={input.rollno} onChange={handleInput} />
   <br/>
  <label> Enter Name : </label><input type="text" name="name" value={input.name} onChange={handleInput} />
   <br/>
 <label>  Enter City :</label> <input type="text" name="city" value={input.city} onChange={handleInput} />
   <br/>
   <br/>
   <label> Enter Fees :</label><input type="text" name="fees" value={input.fees} onChange={handleInput} /><br/>
    <button onClick={handleSubmit}> Edit Save!!!</button>
    </div>
 </>
    );
}
export default EditDataShow;