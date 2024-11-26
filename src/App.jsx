import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import QuerySlots from "./components/Query-slots";
import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

const App = () => (
  <Router>
    <nav>
      <Link to="/"></Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/query-slots/*" element={<QuerySlots />} />
    </Routes>
  </Router>
);

export default App;
