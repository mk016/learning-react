import React , {useState , UseContext} from 'react'
import UserContext from '../Context/UserContext'
import { useContext } from 'preact/hooks'

function Login () {
    const [username , setUsername] = useState('')
    const [Password , setPassword] = useState('')

    const {setUser} = useContext(UserContext)

    const handleSumit = (e) => {
        e.preventDefault()
        setUser ({username , Password})

    }
     
  
    return (
        <div>
            <h2>Login</h2>
            <input type='text' value={username} onChange={(e) => setUsername(e.target.value)} placeholder='Username'/>
            <input type='text' value={Password} onChange={(e) => setPassword(e.target.value)} placeholder='Password'/>
            <button onClick={handleSumit}>Submit</button>
        </div>
    )
}