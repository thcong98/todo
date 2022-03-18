import { useState } from 'react';
import Login from "./Login";
import { useRef } from 'react';
export default function Register() {

    const [isSubmitted, setIsSubmitted] = useState(false);
const [users, setUsers] = useState(() => {
    const storageUsers = JSON.parse(localStorage.getItem('database'))
    return storageUsers ?? []
    })
const password = useRef();
const username = useRef();

const handleRegister = () => {
    if(password.current.value !== null){
        setIsSubmitted(true);
        setUsers(prev => {
            const newUsers = [...prev,{username: username.current.value, password: password.current.value}]
            localStorage.setItem('database', JSON.stringify(newUsers))
            return newUsers
        })
    }
    else{
        setIsSubmitted(false);
    }
}
    const FormRegister = (
        <div className="form">
          <form onSubmit={handleRegister}>
          <h2>Đăng ký</h2>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" ref={username} required />
              {/* {renderErrorMessage("uname")} */}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" ref={password} required />
              {/* {renderErrorMessage("pass")} */}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );
    return ( <div className="app">
    <div className="login-form">
      
      {isSubmitted ? <div><Login/></div> : FormRegister}
    </div>
  </div>)
  
}
