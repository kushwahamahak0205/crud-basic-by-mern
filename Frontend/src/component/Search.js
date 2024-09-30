import { useState } from "react";
import axios from "axios";

const Search = () => {
  const [rollno, setRollno] = useState("");
  const [mydata, setMydata] = useState([]);
  const [showTable, setShowTable] = useState(false);

  const submitHandle = () => {
    let url = "http://localhost:8000/student/stusearch";
    axios.post(url, { rollno: rollno }).then((res) => {
      setMydata(res.data);
      setShowTable(true); // Show the table once data is fetched
    });
  };

  const ans = mydata.map((key) => (
    <tr key={key.rollno}>
      <td>{key.rollno}</td>
      <td>{key.name}</td>
      <td>{key.city}</td>
      <td>{key.fees}</td>
    </tr>
  ));

  return (
    <>
      <h1>Search Record</h1>
      Enter Rollno :
      <input
        type="text"
        value={rollno}
        onChange={(e) => {
          setRollno(e.target.value);
          setShowTable(false); // Hide the table when input changes
        }}
      />
      <button onClick={submitHandle}>Search</button>
      <br /> <br />
      {showTable && mydata.length > 0 && ( // Show the table only if there are records
        <table align="center" width="80%" bgcolor="pink">
          <thead>
            <tr bgcolor="orange">
              <td>Rollno</td>
              <td>Name</td>
              <td>City</td>
              <td>Fees</td>
            </tr>
          </thead>
          <tbody>{ans}</tbody>
        </table>
      )}
      {showTable && mydata.length === 0 && ( // Show a message if no records found
        <p style={{color:"red",fontFamily:"sans-serif"}}>No records found.</p>
      
      )}
    </>
  );
};

export default Search;
