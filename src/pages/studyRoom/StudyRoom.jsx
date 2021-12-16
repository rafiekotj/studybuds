import React, { useState, useEffect } from "react";
import studyroomstyle from "./studyRoom.module.scss";
import Card from "../../components/card/Card";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";
import Button from "../../components/buttons/Button";
import NoResult from "../../components/noresult/NoResult";
import { useDispatch, useSelector } from "react-redux";
import { getRooms } from "../../redux/action/actions/studyRoomAction/studyRoomAction";
import Loader from "../../components/loader/Loader";

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
  const selected = 1;
  const limit = 8;

  const handlePagination = (data) => {
    dispatch(
      getRooms({
        slug: `?page=${data.selected + 1}&limit=${limit}`,
      })
    );
  };
  // End Handle Pagination

  // Handle Showing Cards
  const studyRooms = useSelector((store) => {
    return store.studyRoomReducer;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getRooms({
        slug: `?page=${selected}&limit=${limit}`,
      })
    );
  }, []);

  const isLoading = studyRooms.isLoading;
  // End Handle Showing Cards

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
                <li>Art</li>
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
      {studyRooms.data ? (
        <main className={studyroomstyle.studyRoomMain}>
          <div className={studyroomstyle.studyRoomMainCards}>
            {studyRooms.data.length > 0 &&
              studyRooms.data.map((data) => <Card data={data} key={data.id} />)}
          </div>
          <ReactPaginate
            breakLabel={"..."}
            pageCount={Math.ceil(studyRooms.totalData / limit)}
            marginPagesDisplayed={1}
            pageRangeDisplayed={5}
            onPageChange={handlePagination}
            containerClassName={studyroomstyle.studyRoomMainPagination}
            pageClassName={studyroomstyle.studyRoomMainPaginationList}
            pageLinkClassName={studyroomstyle.studyRoomMainPaginationLink}
            previousClassName={
              studyroomstyle.studyRoomMainPaginationDisplayNone
            }
            nextClassName={studyroomstyle.studyRoomMainPaginationDisplayNone}
            breakClassName={studyroomstyle.studyRoomMainPaginationList}
            activeClassName={studyroomstyle.studyRoomMainPaginationActive}
          />
        </main>
      ) : (
        <NoResult />
      )}
      {isLoading && <Loader />}
    </section>
  );
}

export default StudyRoom;
