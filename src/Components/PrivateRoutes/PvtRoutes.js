import React, { useContext } from 'react'
import { AppContext } from '../ContextApi/AppContext';
import { useNavigate } from 'react-router-dom';
import LogInForm from '../LoggedIn_Page/LogInForm';

export default function PvtRoutes({children}) {

  const { isLogIn, setLogIn } = useContext(AppContext)

  const Navigate = useNavigate();

  if (!isLogIn) {
    return <LogInForm/>
  }
  else{
    return children;
  }
  
}
