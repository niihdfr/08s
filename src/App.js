import logo from './background.jpeg';
import React from 'react';
import './App.css'; // Assumindo que você tem um arquivo CSS para estilização

export default function App() {
  return (
    <div className="login-container">

        <div className="background-image">
          <img src={logo} alt="Background Top" className="background-top" />

          <img src={logo} alt="Background Bottom" className="background-bottom" />
        </div>

        <div className="login-box">
          <form>
            <label htmlFor="login">Login:</label>
            <input type="text" id="login" name="login" />
            
            <label htmlFor="senha">Senha:</label>
            <input type="password" id="senha" name="senha" />
            
            <button type="submit">Login</button>
          </form>

          <div className="icon">
            <span role="img" aria-label="key">🔑</span>
          </div>
        </div>
    </div>
  );
}

