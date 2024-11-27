// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import element from "./JSXROUTES";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
     <Route path="/" element={<element.Dashboard />} />
        <Route path="/users" element={<element.UsersPage />} />
        <Route path="/roles" element={<element.RolesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
