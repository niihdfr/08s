import React, { useState } from 'react';
import logo from './background.jpeg';
import './App.css';

export default function App() {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    // Verificar login e senha
    if (login === 'cabritinha' && senha === 'patopato12') {
      
      window.location.href = 'https://docs.google.com/presentation/d/1ABBZq_SHhTQgN8VQrSnsK8UjAbnKIYKDq_eCC6qwqqM/edit#slide=id.p';
    } else {
      alert('Login ou senha incorretos xuxu.');
    }
  };

  return (
    <div className="login-container">
      <div className="background-image">
        <img src={logo} alt="Background Top" className="background-top" />
        <img src={logo} alt="Background Bottom" className="background-bottom" />
      </div>

      <div className="login-box">
        <form onSubmit={handleLogin}>
          <label htmlFor="login">Login:</label>
          <input 
            type="text" 
            id="login" 
            name="login" 
            value={login}
            onChange={(e) => setLogin(e.target.value)} 
          />

          <label htmlFor="senha">Senha:</label>
          <input 
            type="password" 
            id="senha" 
            name="senha" 
            value={senha}
            onChange={(e) => setSenha(e.target.value)} 
          />

          <button type="submit">Login</button>
        </form>

        <div className="icon">
          <span role="img" aria-label="key">🔑</span>
        </div>
      </div>
    </div>
  );
}
