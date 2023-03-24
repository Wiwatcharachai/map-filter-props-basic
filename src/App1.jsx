import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Users } from './users'

function App() {
  let [query, setQuery] = useState("");
  console.log(query);

  return(
    <div className='app'>
      <div className='input-container'>
      <input type='text' placeholder='Search...' className='search' onChange={(e)=> setQuery(e.target.value)} />
      </div>
      <ul className='list'>
        {Users.filter((user)=> user.first_name.toLowerCase().includes(query)).map((user)=>(
          <li className='listItem' key={user.id}> {user.first_name} </li>
        ))}
        
    
      </ul>

    </div>
  )
  
  
}

export default App
