import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import WeatherApp from './components/WeatherApp/WeatherApp';
import "./App.css";
import './styles/global.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem("isLoggedIn");
    if (loggedInStatus === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  // Função de logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <Router>
      <Routes>
        {/* Rota de login */}
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <Navigate to="/home" />
            ) : (
              // <Login setIsLoggedIn={setIsLoggedIn} />
              <WeatherApp />
            )
          }
        />

        {/* Rota da home */}
        <Route
          path="/home"
          element={
            isLoggedIn ? <Home onLogout={handleLogout} /> : <Navigate to="/" />
          }
        />

        <Route
          path="/register"
          element={<Register onLogout={handleLogout} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
