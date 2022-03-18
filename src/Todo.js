import { useState } from 'react';
import Login from './Login';
export default function Todo() {
    // trạng thái đăng xuất
    const [isLogout, setIsLogout] = useState(false);

    // Dùng local storage để lưu danh sách 
    const [job,setJob] = useState('')
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('jobs'))
        return storageJobs
    })
// xử lý khi nhập dữ liệu 
    const handleSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev, job]
            const jsonJobs = JSON.stringify(newJobs)
            localStorage.setItem('jobs',jsonJobs)
            return newJobs
        })
        setJob('')
    }

    // Chuyển trạng thái đăng xuất 
    const Logout = () => {
        setIsLogout(true)
      }
    
      // Lấy danh sách từ local storge
      const listToDo =(<div>
      <button onClick={Logout}>Đăng xuất</button>
      <h2>Danh sách việc làm</h2>
        <input 
            value={job}
            onChange = {e =>setJob(e.target.value)}/>
            <button onClick={handleSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) => 
                (<li key={index}>{job}</li>))}
            </ul>
        </div>
        )        
    return(
        <div >     
        {isLogout ? <div><Login/></div> : listToDo}      
        </div>
    )
}
