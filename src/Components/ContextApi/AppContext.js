import { Children, createContext,useState, useEffect} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged
} from 'firebase/auth'
import { auth } from "../../Firebase";




export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [isLogIn, setLogIn] = useState(false);
    const [user, setUser] = useState({});

    const SignUp = (email, password)=>{
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const LogIn = (email, password)=>{
        return signInWithEmailAndPassword (auth, email, password)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentuser) => {
          console.log("Auth", currentuser);
          setUser(currentuser);
        });
    
        return () => {
          unsubscribe();
        };
      }, []);
    

    const Value ={
        SignUp,
        LogIn,
        isLogIn,
        setLogIn,
        user
    }

    return(
        <AppContext.Provider value={Value}>
            {children}
        </AppContext.Provider>
    )
}