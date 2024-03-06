// Import necessary hooks from React
import { useState, useCallback, useEffect, useRef } from 'react'

// Define the main App component
function App() {
  // State variables to manage password length, inclusion of numbers and characters, and the generated password
  const [length, setLength] = useState(8) // Default password length is 8
  const [numberAllowed, setNumberAllowed] = useState(false); // State to track if numbers are allowed in password
  const [charAllowed, setCharAllowed] = useState(false) // State to track if special characters are allowed in password
  const [password, setPassword] = useState("") // State to store the generated password

  // useRef hook to reference the password input field
  const passwordRef = useRef(null)

  // Function to generate a password based on current settings
  const passwordGenerator = useCallback(() => {
    let pass = "" // Initialize an empty string for the password
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // Default characters for password
    
    // If numbers are allowed, add them to the characters pool
    if (numberAllowed) str += "0123456789"
    
    // If special characters are allowed, add them to the characters pool
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    // Loop through the length and randomly select characters from the pool
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1) // Generate a random index within the pool
      pass += str.charAt(char) // Append the selected character to the password string
    }

    // Set the generated password in the state
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // Function to copy the generated password to clipboard
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select(); // Select the password input field
    passwordRef.current?.setSelectionRange(0, 999); // Set selection range to cover the whole text
    window.navigator.clipboard.writeText(password) // Copy password to clipboard
  }, [password])

  // useEffect to generate a new password whenever settings change
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  // Return the JSX representing the UI
  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
            ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
                setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="characterInput"
              onChange={() => {
                  setCharAllowed((prev) => !prev )
              }}
            />
            <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

// Export the App component
export default App
