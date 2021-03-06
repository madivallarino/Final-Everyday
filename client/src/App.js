import { useState, useEffect } from "react";

import AuthorizedApp from "./AuthorizedApp";
import UnauthorizedApp from "./UnauthorizedApp";
import './App.css';

function App() {
 
  const [ user, setUser ] = useState(null)

  function onLogin(){
    fetch('/me').then((r)=> {
      if (r.ok){
        r.json().then((data)=> {
          setUser(data)
        })
      }
    })
  }

  function handleLogout(){
    console.log("This is firing")
    fetch('/logout', {
      method: "DELETE"
    })
    .then(setUser(null))
  }

  useEffect(()=> {
    fetch('/me').then((r)=> {
      if (r.ok){
        r.json().then((data)=> {
          setUser(data)
        })
      }
    })
  },[])

  return (
    
      <div className="App">
      
      { user ? 
          
            <AuthorizedApp user={user} handleLogout={handleLogout}/>
           
        :
             <UnauthorizedApp onLogin={onLogin}/>
             
      }
      </div>
   
  );
}

export default App;