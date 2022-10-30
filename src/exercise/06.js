// Basic Forms
// http://localhost:3000/isolated/exercise/06.js

import * as React from 'react'

function UsernameForm({onSubmitUsername}) {
  const usernameRef = React.useRef();
  const [error, setError] = React.useState(null);
  const [username, setUsername] = React.useState('');

  const handleSubmit = (evt) => {
    evt.preventDefault();
    // onSubmitUsername(usernameRef.current.value);
    // onSubmitUsername(evt.target.elements.usernameInput.value)
    onSubmitUsername(username);
  }

  // const handleChange = (evt) => {
  //   const value = evt.target.value;
  //   const isValid = value === value.toLowerCase();
  //   setError(isValid ? null : 'Username must be lower case');
  // }
  const handleChange = (evt) => {
    const {value} = evt.target;
    setUsername(value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <div role="alert" style={{color: 'red', padding: '1em'}}>{error}</div> */}
      <div>
        <label htmlFor="usernameInput">Username:</label>
        <input id="usernameInput" type="text" ref={usernameRef} onChange={handleChange} value={username} />
      </div>
      <button type="submit" disabled={Boolean(error)}>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
