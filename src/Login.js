import React, { useState } from "react";
import Todo from "./Todo";
import { useRef } from 'react';
// import Register from "./Register";
export default function Login() {

  const [isSubmitted, setIsSubmitted] = useState(false);
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

    // Find user login info
    var i = database.find((f) => {
      return f.username ===username.current.value && f.password === password.current.value
    })
    if(i!=null) {
      setIsSubmitted(true);
    }
    else {
      console.log(i)
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
    <div className="app">
      <div className="login-form">
        <div className="title">Todo</div>
        {isSubmitted ? <div><Todo/></div> : renderForm}
      </div>
    </div>
  );
}