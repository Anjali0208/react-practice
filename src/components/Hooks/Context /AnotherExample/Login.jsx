import React, { useContext, useState } from 'react'
import { UserContext } from '../../../../context/UserContext'

function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log(username, password)
        setUser({ username, password })
    }

    return (
        <div>Login
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='username' />
            <input type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='password' />
            <button type='button' onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login