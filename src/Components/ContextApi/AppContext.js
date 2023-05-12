import { Children, createContext } from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from 'firebase/auth'
import { auth } from "../../Firebase";




export const AppContext = createContext();

export default function AppContextProvider({children}){

    const SignUp = (email, password)=>{
        return createUserWithEmailAndPassword (auth, email, password)
    }
    const LogIn = (email, password)=>{
        return signInWithEmailAndPassword (auth, email, password)
    }


    const Value ={
        SignUp,
        LogIn
    }

    return(
        <AppContext.Provider value={Value}>
            {children}
        </AppContext.Provider>
    )
}