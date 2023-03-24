import { useState } from "react";

import "./App.css";
import { Users } from "./users";
import Table from "./Table";

function App() {
  let [query, setQuery] = useState("");

  const keys = ['first_name','last_name', 'email']

  const search = (data)=>{
    return data.filter((item)=>
    keys.some(key=>item[key].toLowerCase().includes(query))
    )
  }

  // console.log(data);
  return (
    <>
    <div className="app">
      <div className="input-container">
        <input
          type="text"
          placeholder="Search..."
          className="search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <Table data={search(Users)} />
      </div>
      
    </div>
    </>
  );
}

export default App;
