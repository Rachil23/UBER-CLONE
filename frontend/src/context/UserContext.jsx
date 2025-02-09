/* eslint-disable no-unused-vars */
import React , {useState} from 'react'

// eslint-disable-next-line no-undef, react-refresh/only-export-components
export const UserDataContext = createContext()

// eslint-disable-next-line react/prop-types
const UserContext = ({children}) => {

    const [first, setfirst] = useState({
        email:'',
        fullName:{
            firstName:'',
            lastName:''
        }
    })

  return (
    <div>
        <UserDataContext.Provider>
            {children}
        </UserDataContext.Provider>        
    </div>
  )
}

export default UserContext