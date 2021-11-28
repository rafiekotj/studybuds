import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Card from "../components/card/Card";

function createRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* <Route exact path="/" element={<Home />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default createRoutes;
