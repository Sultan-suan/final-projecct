import {createContext, useState} from 'react';


export const AuthContext = createContext(null);

export const AuthProvider = ({children}: any) => {

    const [user, setUser] = useState('')

    const signIn = (newUser: any, cb: any) => {
        setUser(newUser);
        cb();
    }

    const signOut = (cb: any) => {
        setUser('');
        cb();
    }

    const value = {user, signIn, signOut}

    return <AuthContext.Provider value={value}>
        {children}
    </AuthContext.Provider>
}

