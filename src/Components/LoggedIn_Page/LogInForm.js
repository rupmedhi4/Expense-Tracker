import React, { useContext, useState } from 'react'
import { AppContext } from '../ContextApi/AppContext'

export default function LogInForm() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const {LogIn} =useContext(AppContext)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        try{
         await LogIn(email,password)
         alert("account login")
        }catch(error){
            alert(error)
        }
    }
  return (
    <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
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
                    <input
                        placeholder='password'
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
               
                <div>
                    <button type="submit">Log In</button>
                </div>
            </form>
            <div>
                <button style={{ marginTop: "10px", width: "200px" }}>Have an account? Login</button>
            </div>

        </div>
  )
}
