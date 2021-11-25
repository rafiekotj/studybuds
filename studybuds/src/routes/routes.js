import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function createRoutes() {
  return (
    <Router>
      {/* <Headers /> */}
      <Routes>
        {/* <Route exact path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> */}
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}

export default createRoutes;
