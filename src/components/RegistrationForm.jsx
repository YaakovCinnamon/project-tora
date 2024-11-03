import React, { useState } from 'react';
import './RegistrationFormCSS.css';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  // פונקציה לרישום משתמש חדש
  const handleRegister = () => {
    if (!name || !password || !email) {
        // if (!name || !password ) {
      setMessage("נא למלא את כל השדות");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];

    if (existingUsers.some((user) => user.name === name)) {
      setMessage("המשתמש כבר קיים במערכת");
      return;
    }

    const userData = { name, password, email };
    // const userData = { name, password};
    existingUsers.push(userData);
    localStorage.setItem("userData", JSON.stringify(existingUsers));
    setMessage("הרשמה בוצעה בהצלחה");

    // מעבר לדף בחירת מסלול לימודים
    navigate('/select-route');
  };

  // פונקציה להתחברות למערכת
  const handleLogin = () => {
    if (!name || !password) {
      setMessage("נא למלא את שם המשתמש והסיסמה");
      return;
    }

    const existingUsers = JSON.parse(localStorage.getItem("userData")) || [];

    const userExists = existingUsers.some(
      (user) => user.name === name && user.password === password
    );

    if (userExists) {
      setMessage("ברוך הבא!");
      // מעבר לדף הבית של המשתמש
      navigate('/home');
    } else {
      setMessage("שם משתמש או סיסמה שגויים");
    }
  };

  return (
    <div id="box">
      <div>
        <h2>תופס רישום / התחברות</h2>
        <input
          type='text'
          placeholder='שם משתמש'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='password'
          placeholder='סיסמה'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input
          type='email'
          placeholder='אימייל'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button onClick={handleRegister}>הרשמה</button>
        <button onClick={handleLogin}>התחברות</button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default RegistrationForm;
