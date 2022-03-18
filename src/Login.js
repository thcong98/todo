import React, { useState } from "react";
import Todo from "./Todo";
import { useRef } from 'react';
// import Register from "./Register";
export default function Login() {

  // users ánh xạ database trên local storage
  const [users, setUsers] = useState(() => {
    const storageUsers = JSON.parse(localStorage.getItem('database'))
    return storageUsers ?? []
  })

  //Khai báo trạng thái đăng nhập
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessages, setErrorMessages] = useState('');
//tạo tham chiếu
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

    // so sánh dữ liệu nhập vào và trên local storage
    var i = users.find((f) => {
      return f.username ===username.current.value && f.password === password.current.value
    })
    // so sánh dữ liệu nhập vào và trong mảng database
    var j = database.find((f) => {
      return f.username ===username.current.value && f.password === password.current.value
    })
    // đăng nhập thành công đổi trạng thái thành true
    if(i!=null || j!=null) {
      setIsSubmitted(true);
    }
    else {
      setIsSubmitted(false);
      setErrorMessages('tên đăng nhập hoặc mật khẩu sai');
    }
  };

  

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
      <h2>Đăng nhập</h2>
        <div className="input-container">
          <label>Tên đăng nhập</label>
          <input type="text" name="uname" ref={username}  required />        
        </div>
        <div className="input-container">
          <label>Mật khẩu </label>
          <input type="password" name="pass" ref={password}  required />     
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
        {errorMessages}
      </form>
    </div>
  );

  // Trả về function Todo trong Todo.js nếu đúng ngược lại reload page
  return (
    <div >  
        {isSubmitted ? <div><Todo/></div> : <div>{renderForm }</div>}
    </div>
  );
}