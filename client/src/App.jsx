import "./App.css";
import Footer from "./layout/Footer";
import Login from "./pages/Login/Login";
import Page404 from "./pages/errors/page404";
import LandingPage from "./pages/landingPage/LandingPage";
import SignUp from "./pages/signUp/SignUp";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
