import React from 'react';

const UserContext = React.createContext()



const UserContextProvider = ({children}) =>{
    const [user ,setUser]  = React.useState(null)
    return (
        <UserContext.Provider>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;
// UseContextProvider 
