import { useContext, useState } from 'react'
import UserContext from '../context/UserContext'
const Login = () => {
const [username, setUsername] = useState('')
const [userpass, setUserpass] = useState('')

const {setUser} = useContext(UserContext)
    const handleSubmit =(e)=>{
e.preventDefault()
setUser({username, userpass})
}
  return (
    <>
    <h2>Login</h2>
    <input type='text'
     placeholder='user'
     value={username}
     onChange={(e)=>setUsername(e.target.value)}
     />
    <input type='text'
     placeholder='password'
     value={userpass}
     onChange={(e)=>setUserpass(e.target.value)}

    />
    <button onClick={handleSubmit}>Login</button>
    
    
    
    </>
  )
}

export default Login