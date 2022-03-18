import React, { useState } from "react";
import Todo from "./Todo";
import { useRef } from 'react';
// import Register from "./Register";
export default function Login() {
  const [users, setUsers] = useState(() => {
    const storageUsers = JSON.parse(localStorage.getItem('database'))
    return storageUsers ?? []
  })
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [show, setShow] = useState(false)

  const password = useRef();
  const username = useRef();
  
  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();
    setShow(!show)
    // Find user login info
    var i = users.find((f) => {
      return f.username ===username.current.value && f.password === password.current.value
    })
    var j = database.find((f) => {
      return f.username ===username.current.value && f.password === password.current.value
    })
    if(i!=null || j!=null) {
      setIsSubmitted(true);
    }
    else {
 
      setIsSubmitted(false);
    }
  };

  

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <h2>Đăng nhập</h2>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" ref={username}  required />        
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" ref={password}  required />     
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div >  
        {isSubmitted ? <div><Todo/></div> : <div>{renderForm }</div>}
    </div>
  );
}