import React, { useContext, useState } from 'react';
import './SignUp.css'; // Import the CSS file
import { AppContext } from '../ContextApi/AppContext';
import { useNavigate } from 'react-router-dom';

export default function SignUpForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');


    
    const {SignUp} = useContext(AppContext)
 const Navigate = useNavigate();
    const handleSubmit = async (e) => {

   

        e.preventDefault();
        try{
           if(password===confirmPassword){
            await SignUp(email,password)
            alert("account create succesfull")
            Navigate("/login")

           }else{
            alert("password not match")
           }
        }catch(error){
            alert(error.message)
        }
        
    };

    return (
        <div className="signup-form-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        required
                        placeholder='name'
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        required
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
                        required
                        placeholder='password'
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                        req
                        placeholder='Confirm Password'
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button type="submit">Sign Up</button>
                </div>
            </form>
            <div>
                <button style={{ marginTop: "10px", width: "200px" }}>Have an account? Login</button>
            </div>

        </div>
    );
}
