import React, { useContext } from 'react';
import './NavBar.css'; // Import the CSS file
import LogInForm from '../LoggedIn_Page/LogInForm';
import SignUp from '../SignUp_Page/SignUp';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../ContextApi/AppContext';
import { Link } from 'react-router-dom';

export default function NavBar() {

    const { isLogIn, setLogIn } = useContext(AppContext)

  const navigate = useNavigate();
  const LoginHandler = () => {
    navigate("/login")
  }
  const SignUpHandler = () => {
    navigate("/signup")
  }
  const logOutHandler = () => {
    setLogIn(!isLogIn)
   
  }



  return (
    <div>
      <header className="navbar-header">

        <nav>
          <div className="logo-container">
            <h1 className="logo">My Website</h1>
          </div>
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/about">About</Link></li>
          </ul>

          <ul className="action-buttons">
            {isLogIn ? <li><button className="signup-button" onClick={logOutHandler}>Logout</button></li>
              : (<div>
                <li><button className="login-button" onClick={LoginHandler}>Login</button></li>
                <li><button className="signup-button" onClick={SignUpHandler}>Sign Up</button></li>

              </div>)}



          </ul>
        </nav>
      </header>
    </div>
  );
}
