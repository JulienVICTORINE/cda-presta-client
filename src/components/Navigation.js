import React, { useEffect } from "react";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

// pages 
import Login from "../views/auth/Login.jsx";
import Register from "../views/auth/Register.jsx";
import App from "../App.jsx";
import Navbar from "./Navbar";
import Profil from "../views/profil/Profil";
import PrestatairesByServices from "../views/prestataires/PrestatairesByServices.jsx";
import FichePrestataire from "../views/prestataires/FichePrestataire.jsx";
import ValidationAccount from "../views/admin/ValidationAccount.jsx";
import Utilisateurs from "../views/admin/Utilisateurs.jsx";

// AuthProvider
import { useAuth } from "./AuthProvider.js";


function Navigation() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  useEffect(() => {
    // Vérifier si l'utilisateur est authentifié (par exemple, si un token est disponible)
    const token = localStorage.getItem("token"); // Assurez-vous de stocker le token dans localStorage après la connexion
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
    }
  }, []);
  return (
    <Router>
      <Navbar />
      <Routes>
        {!isAuthenticated && (
          <>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/register" element={<Register />} />
            <Route path="/home" element={<App />} />
            <Route
              path="/prestataires/service/:serviceId"
              element={<PrestatairesByServices />}
            />
            <Route path="/prestataire/:id" element={<FichePrestataire />} />
          </>
        )}
        {isAuthenticated && (
          <>
            <Route path="/home" element={<App />} />
            <Route path="/profil" element={<Profil />} />

            <Route
              path="/prestataires/service/:serviceId"
              element={<PrestatairesByServices />}
            />
            <Route path="/prestataire/:id" element={<FichePrestataire />} />
            <Route
              path="/validation-inscription"
              element={<ValidationAccount />}
            />
            <Route path="/utilisateurs" element={<Utilisateurs />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default Navigation;
