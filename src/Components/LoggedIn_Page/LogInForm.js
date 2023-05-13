import React, { useContext, useState } from 'react'
import { AppContext } from '../ContextApi/AppContext'
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';
import './LogInForm.css'

import { useNavigate } from 'react-router-dom';



export default function LogInForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showPassword, setShowPassword] = useState(false)

    const { isLogIn, setLogIn } = useContext(AppContext)

    const { LogIn } = useContext(AppContext)
    const Navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await LogIn(email, password)
            alert("Log in Succesfull")
            Navigate('/deshboard');
            setLogIn(!isLogIn)
        } catch (error) {
            alert(error)
        }
    }

    const showPasswordHandler = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="signup-form-container">

            <form className="signup-form" onSubmit={handleSubmit}>
                <h1>Login</h1>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        placeholder='email'
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <div class="input-container">
                        <input
                            placeholder='password'
                            type={showPassword ? "text" : "password"}
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span class="icon" onClick={showPasswordHandler}>
                            {showPassword ? <AiFillEye /> : <AiFillEyeInvisible />}
                        </span>
                    </div>
                </div>


                <div>
                    <button type="submit">Log In</button>
                    <p style={{ fontWeight: "bold", textAlign: "center", marginTop: "4px" }}><u>forget password</u></p>
                </div>
            </form>
            <div>
                <button style={{ marginTop: "10px", width: "230px" }}>Dont have an account? SignUp</button>
            </div>

        </div>
    )
}
