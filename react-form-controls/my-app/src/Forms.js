import { useState } from 'react';

const styles = {
  border: '1px solid black',
  padding: '5px',
};

export default function RegistrationFormControlled() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    console.log('Username: ', username);
    console.log('Password: ', password);
  }

  return (
    <>
      <h1>Controlled Form</h1>
      <form style={styles} onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" style={{ marginTop: '10px' }}>
          Submit
        </button>
      </form>
    </>
  );
}

function RegistrationFormUncontrolled() {
  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <>
      <h1>Uncontrolled Form</h1>
      <form onSubmit={handleSubmit} style={styles}>
        <label>
          Username: <input name="username" />
        </label>
        <br />
        <label>
          Password: <input type="password" name="password" />
        </label>
        <br />
        <button type="submit" style={{ marginTop: '15px' }}>
          Submit
        </button>
      </form>
    </>
  );
}

export { RegistrationFormUncontrolled, RegistrationFormControlled };
