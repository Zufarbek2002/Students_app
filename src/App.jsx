import { useState } from "react";
import UserContext from "./context/UserContext";
import Home from "./pages/Home";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Login from "./pages/Login";
import "./App.css";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./components/Auth";
import Profile from "./pages/Profile";
import RequireAuth from "./components/RequireAuth";

const App = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState(data);
  const [studentData, setStudentData] = useState([]);

  return (
    <Router>
      <UserContext.Provider
        value={{
          data,
          setData,
          filtered,
          setFiltered,
          studentData,
          setStudentData,
        }}
      >
        <AuthProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/about"
              element={
                <RequireAuth>
                  <About />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AuthProvider>
      </UserContext.Provider>
    </Router>
  );
};
export default App;
