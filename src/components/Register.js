// import React, { useState } from 'react';
// import axios from 'axios';

// const Register = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleRegister = async (userData) => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/register', userData);
//       console.log('Registration successful:', response.data);
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Register</h2>
//       <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
//       <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
//       <button onClick={handleRegister}>Register</button>
//     </div>
//   );
// };

// export default Register;
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/register', { username, password });
      alert('Registration successful!');
      console.log(response.data); // Ensure the response is correct
    } catch (error) {
      console.error(error);
      setError(error.response.data.message); // Display the error message if any
    }
  };

  return (
    <div>
      <h2>Register</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;