import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import StudyRoom from "../pages/studyRoom/StudyRoom";
import DetailRoomStudents from "../pages/detailRoomStudents/DetailRoomStudents";
import DetailRoomHost from "../pages/detailRoomHost/DetailRoomHost";
import ApproveParticipant from "../pages/approveParticipant/ApproveParticipant";

function createRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/study-room" element={<StudyRoom />} />
        <Route path="/room" element={<DetailRoomStudents />} />
        <Route path="/host" element={<DetailRoomHost />} />
        <Route path="/approve" element={<ApproveParticipant />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/room" element={<DetailRoomStudents />} />
        <Route path="/host" element={<DetailRoomHost />} />
        <Route path="/approve" element={<ApproveParticipant />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default createRoutes;
