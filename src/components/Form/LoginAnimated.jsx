import React from 'react'
import illus2 from "../../Assets/Images/illus2.gif"
import "./LoginAnimated.css"

function LoginAnimated() {
    return (
        <>
            <div className='login-wrapper'>
                <div className='login-container'>
                    {/* animated illustration */}
                    <div className='illust'>
                        <img src={illus2} alt='login' className='' />
                    </div>
                    {/* form */}

                    <form className='form'>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type='email' placeholder='Enter your email id' />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type='password' placeholder='Enter your password' />
                        </div>

                    </form>
                </div>
            </div>
        </>
    )
}

export default LoginAnimated