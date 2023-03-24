import React from "react";
import "./Table.css";

let Table = ({data}) => {
    console.log(data);
  return (
<table>
    <thead>
  <tr>
    <th>Name</th>
    <th>Surname</th>
    <th>Email</th>
  </tr>
  </thead>
  {data.map((item)=>(
    // console.log(item);
    <tr key={item.id}>
    <td>{item.first_name}</td>
    <td>{item.last_name}</td>
    <td>{item.email}</td>
  </tr>
  ))}
  
</table>



    // <div className="nav">
    //   <div className="nav-name"> Name
    //     <div>K</div>
    //     <div className="nav-surname">Surname</div>
    //     <div></div>
    //     <div className="nav-email">Email</div>
    //   </div>
    // </div>
  );
}

export default Table;
