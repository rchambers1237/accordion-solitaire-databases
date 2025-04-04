import React, { useState } from 'react';

interface LoginFormProps {
  onLogin: (credentials: { email?: string; username?: string; password?: string }) => void;
  onRegisterClick?: () => void;
  errorMessage?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onRegisterClick, errorMessage }) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  
    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();

        // Probably can assign them no matter what, since their default val is a string
        if (password && (email || username)) {
            const credentials: { email?: string; username?: string; password: string } = { password };
            credentials.email = email ? email.trim() : '';
            credentials.username = username ? username.trim() : '';
    
            return onLogin(credentials);
        }

        alert('Please provide a password and either an email or username.');
    }

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <h2>Login</h2>
      {errorMessage && <div className="error-message">{errorMessage}</div>}

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
          placeholder="Your Email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-control"
          placeholder="Your Username"
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
          placeholder="Your Password"
        />
      </div>

      <button type="submit" className="submit-button">
        Login
      </button>

      {onRegisterClick && (
        <p className="register-link">
          Don't have an account? <button type="button" onClick={onRegisterClick}>Register</button>
        </p>
      )}
    </form>
  );
};

export default LoginForm;
