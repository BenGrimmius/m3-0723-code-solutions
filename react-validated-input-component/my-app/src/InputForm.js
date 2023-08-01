import { useState } from 'react';

export default function InputForm() {
  const [value, setValue] = useState('');

  let icon = '';
  let text = '';
  let color = '';
  value.length >= 8
    ? (icon = 'fa-solid fa-check fa-beat fa-2xl')
    : (icon = 'fa-solid fa-xmark fa-2xl');
  value.length >= 8 ? (color = 'green') : (color = 'red');

  if (value.length === 0) {
    text = 'A password is required';
  } else if (value.length < 8) {
    text = 'Your password is too short';
  } else {
    text = 'Password OK!';
  }

  return (
    <>
      <label>
        <b style={{ margin: '10px' }}>Password</b>
        <input
          name="password"
          value={value}
          type="password"
          onChange={(e) => setValue(e.target.value)}
          style={{ fontSize: '20px' }}
        />
        <div className={icon} style={{ color: color, marginLeft: '10px' }} />
        <div style={{ color: color, fontWeight: 'bold', marginTop: '10px' }}>
          {text}
        </div>
        <br />
      </label>
    </>
  );
}
