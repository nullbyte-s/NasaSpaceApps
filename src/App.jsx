import React, { useState } from "react";
import Home from "./components/Home";
import Login from "./components/Login";
import WeatherApp from './components/WeatherApp/WeatherApp';
import "./App.css";
import './styles/global.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        // <Home onLogout={handleLogout} />
        <WeatherApp />
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;