import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const auth = getAuth(app);

  // Register user
  const registerUser = (email, password) => {
    setLoading(true);
    setError(null);
    return createUserWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  // Login user
  const signInUser = (email, password) => {
    setLoading(true);
    setError(null);
    return signInWithEmailAndPassword(auth, email, password)
      .catch((err) => {
        setError(err.message);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  // Auth state observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const value = {
    user,
    loading,
    error,
    loggedIn: !!user,
    registerUser,
    signInUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
