import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
import Contact from "./components/contact";
import About from "./components/about";
import Register from "./components/Register";
import Login from "./components/adminLogin";
import Shownavbar from "./components/ShowNavbar/Shownavbar";
import ErrorPage from "./components/ErrorPage";
import Dashboard from "./components/dashboard";


function App() {
  return (
    <BrowserRouter>
      <Shownavbar>
        <Navbar />
      </Shownavbar>
      <div style={{ marginTop: "56px",marginBottom:"56px"}}>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/register" element={<Register />} />
          <Route path="/admin" element={<Dashboard/>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
      <Shownavbar>
        <Footer />
      </Shownavbar>
    </BrowserRouter>
  );
}

export default App;
