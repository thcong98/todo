import { useState } from 'react';
import Login from "./Login";
import { useRef } from 'react';
export default function Register() {

    const [isSubmitted, setIsSubmitted] = useState(false);
const [users, setUsers] = useState(() => {
    const storageUsers = JSON.parse(localStorage.getItem('database'))
    return storageUsers ?? []
    })

    //tạo tham chiếu
const password = useRef();
const username = useRef();

//tạo gửi dữ liệu đăng ký
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
              <label>Tên đăng nhập </label>
              <input type="text" name="uname" ref={username} required />  
            </div>
            <div className="input-container">
              <label>Mật khẩu </label>
              <input type="password" name="pass" ref={password} required />            
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      );

// đăng ký thành công chuyển sang trang đăng nhập
    return ( <div className="app">
    <div className="login-form"> 
      {isSubmitted ? <div><Login/></div> : FormRegister}
    </div>
  </div>)
  
}
