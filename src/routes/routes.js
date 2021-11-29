import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";

function createRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
<<<<<<< HEAD
        <Route exact path="/" element={<Home />} />
=======
        {/* <Route exact path="/" element={<Home />} /> */}
>>>>>>> 2b0aea4da6d0b45c8b3ee2d1f77cf9e2075353cc
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default createRoutes;
