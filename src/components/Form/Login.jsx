import React, { useState } from 'react'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Login() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [designation, setDesignation] = useState('')
  const [error, setError] = useState({})
  const [visibility, setVisiblilty] = useState(true)
  const [allUser, setAllUser] = useState([])


  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = {};


    if (!username) {
      newErrors.username = 'Username is required bewakoof'
    }
    else if (!password) {
      newErrors.password = 'Password is required bewakoof';
    }


    // if (Object.keys(newErrors).length === 0) {
    //   // No errors, proceed with login
    //   if (username === 'anjali' && password === '123') {
    //     window.alert("Correct username and password");
    //   } else {
    //     window.alert("Try again");
    //   }
    //   setUsername('');
    //   setPassword('');
    // }
    else if (username && password) {
      window.alert('logged in succesfully')
      setAllUser([...allUser, username])
      setUsername('')
      setPassword('')
    }
    setError(newErrors);


  }


  const handleVisibility = (e) => {
    e.preventDefault()
    setVisiblilty(!visibility)
  }


  return (
    <>
      <div className='container mt-3 border border-black'>
        <h1 className='text-center'>Login</h1>
        <form>
          <div className='m-4'>
            <label className='p-3'>Username</label>
            <input className='w-50' type='text' placeholder='Enter you username' value={username} onChange={(e) => setUsername(e.target.value)} />
            {error.username && <p>{error.username}</p>}
          </div>
          <div className='m-4'>
            <label className='p-3'>Password</label>
            <input className='w-50' type={visibility ? 'password' : 'text'} placeholder='enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            {visibility ? <button onClick={handleVisibility}><VisibilityOffIcon /></button> : <button onClick={handleVisibility}><VisibilityIcon /></button>}
            {error.password && <p>{error.password}</p>}
          </div>
          <div>
            <input type='text' placeholder='enter your designation' value="" onChange={(e) => e.target.value} />
          </div>

          <button className='' onClick={handleSubmit}>Submit</button>

        </form>

      </div>
      {allUser.map((user, index) => (
        <div>{user}</div>
      ))}
    </>
  )
}

export default Login