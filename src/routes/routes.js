import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "../pages/register/Register";
import Login from "../components/Login/Login";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Home from "../pages/home/Home";
import StudyRoom from "../pages/studyRoom/StudyRoom";
// import DetailRoomStudents from "../pages/detailRoomStudents/DetailRoomStudents";
import DetailRoomHost from "../pages/detailRoomHost/DetailRoomHost";
import ApproveParticipant from "../pages/approveParticipant/ApproveParticipant";
import MyClass from "../pages/myClass/MyClass";
import ClassForm from "../pages/classForm/ClassForm";
import MeetingRoom from "../pages/meetingRoom/MeetingRoom";
import Account from "../pages/account/Account";
import NotFound from "../pages/notFound/NotFound";
import ClassFormEdit from "../pages/classFormEdit/ClassFormEdit";

function createRoutes() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/study-room" element={<StudyRoom />} />
        {/* <Route path="/room/:id" element={<DetailRoomStudents />} /> */}
        <Route path="/room/:id" element={<DetailRoomHost />} />
        <Route path="/participant/:id" element={<ApproveParticipant />} />
        <Route path="/new-class" element={<ClassForm />} />
        <Route path="/edit-class/:id" element={<ClassFormEdit />} />
        <Route path="/class" element={<MyClass />} />
        <Route path="/room/:id/meeting/:roomName" element={<MeetingRoom />} />
        <Route path="/account" element={<Account />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default createRoutes;
