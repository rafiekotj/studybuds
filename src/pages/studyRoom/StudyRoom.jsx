import React, { useState, useEffect } from "react";
import studyroomstyle from "./studyRoom.module.scss";
import Card from "../../components/card/Card";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";
import Button from "../../components/buttons/Button";

function StudyRoom() {
  // Parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // End of Parallax

  // Show hide dropdown
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };
  // End Show hide dropdown

  // Start at top of page
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  // End Start at top of page

  // Handle Pagination
  const [selected, setSelected] = useState("");
  const handlePagination = (data) => {
    setSelected(data.selected);
  };
  // End Handle Pagination

  return (
    <section className={studyroomstyle.studyRoom}>
      <div
        className={studyroomstyle.studyRoomDecorLeft}
        style={{
          transform: `translateY(${offsetY * 0.425}px)`,
        }}
      ></div>
      <div
        className={studyroomstyle.studyRoomDecorRight}
        style={{
          transform: `translateY(${offsetY * -0.25}px)`,
        }}
      ></div>
      <div className={studyroomstyle.studyRoomTop}>
        <h1>Study Room</h1>
        <div className={studyroomstyle.studyRoomTopTitle}>
          <ul className={studyroomstyle.studyRoomTopTitleLeft}>
            <li>All Status</li>
            <li>Open</li>
            <li>Restricted</li>
          </ul>
          <div className={studyroomstyle.studyRoomTopTitleRight}>
            <div
              className={studyroomstyle.studyRoomTopTitleRightFilter}
              onClick={() => {
                handleShow();
              }}
            >
              <span>All Topic</span>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
            <div
              className={studyroomstyle.studyRoomTopTitleRightOptions}
              style={show ? { display: "block" } : { display: "none" }}
            >
              <ul>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li>Art</li>
                <li onClick={selected}>Art</li>
              </ul>
            </div>
            <Button classStyle={"addClass"}>
              Add Class
              <span className={studyroomstyle.plusIcon}>
                <AiFillPlusCircle />
              </span>
            </Button>
          </div>
        </div>
      </div>
      <main className={studyroomstyle.studyRoomMain}>
        <div className={studyroomstyle.studyRoomMainCards}>
          <Card />
        </div>
        <ReactPaginate
          breakLabel={"..."}
          pageCount={10}
          marginPagesDisplayed={1}
          pageRangeDisplayed={5}
          onPageChange={handlePagination}
          containerClassName={studyroomstyle.studyRoomMainPagination}
          pageClassName={studyroomstyle.studyRoomMainPaginationList}
          pageLinkClassName={studyroomstyle.studyRoomMainPaginationLink}
          previousClassName={studyroomstyle.studyRoomMainPaginationDisplayNone}
          nextClassName={studyroomstyle.studyRoomMainPaginationDisplayNone}
          breakClassName={studyroomstyle.studyRoomMainPaginationList}
          activeClassName={studyroomstyle.studyRoomMainPaginationActive}
          // style={selected ? { color: "blue" } : { color: "pink" }}
        />
      </main>
    </section>
  );
}

export default StudyRoom;
