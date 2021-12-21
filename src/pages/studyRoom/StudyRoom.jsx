import React, { useState, useEffect } from "react";
import studyroomstyle from "./studyRoom.module.scss";
import { Link, useNavigate } from "react-router-dom";
import Card from "../../components/card/Card";
import { AiFillPlusCircle } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import ReactPaginate from "react-paginate";
import Button from "../../components/buttons/Button";
import NoResult from "../../components/noresult/NoResult";
import { useDispatch, useSelector } from "react-redux";
import {
  getRooms,
  getTopics,
} from "../../redux/action/actions/studyRoomAction/studyRoomAction";
import Loader from "../../components/loader/Loader";
import { useLocation } from "react-router";

function StudyRoom() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);
  const [status, setStatus] = useState("All Status");
  const [selected, setSelected] = useState(1);
  const [topic, setTopic] = useState("");
  const [chosenTopic, setChosenTopic] = useState("All Topic");
  const [searchInput, setSearchInput] = useState("");
  const { state } = useLocation();
  const limit = 8;
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Handle Showing Cards
  const studyRooms = useSelector((store) => {
    return store.studyRoomReducer;
  });

  useEffect(() => {
    if (studyRooms.data.length === 0) {
      handleFetch();
      // dispatch(
      //   getRooms({
      //     slug: `?page=${selected}&limit=${limit}&top=${topic}`,
      //   })
      // );
    } else {
      getRooms({});
    }

    dispatch(getTopics());
  }, []);

  const isLoading = studyRooms.isLoading;

  useEffect(async () => {
    // let latestStatus;
    // await setStatus(() => {
    //   latestStatus = status;
    //   return latestStatus;
    // });

    // let latestPage;
    // await setSelected(() => {
    //   latestPage = 1;
    //   return latestPage;
    // });

    // let latestTopic;
    // await setTopic(() => {
    //   latestTopic = topic;
    //   return latestTopic;
    // });
    if (state) {
      let latestSearch;
      await setSearchInput(() => {
        latestSearch = state;
        return latestSearch;
      });

      handleFetch(null, null, null, latestSearch);
    }
  }, [state]);

  // End Handle Showing Cards

  // Parallax

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // End of Parallax

  const handleFetch = (latestPage, latestStatus, latestTopic, latestSearch) => {
    const slugPage = latestPage
      ? `${latestPage ? `page=${latestPage}` : `page=${selected}`}`
      : "";
    const slugLimit = limit ? `limit=${limit}` : "";
    const slugStatus =
      latestStatus && latestStatus !== "All Status"
        ? `status=${latestStatus}`
        : "";
    const slugTopic = latestTopic ? `top=${latestTopic}` : "";
    const slugSearch = latestSearch ? `search=${latestSearch}` : "";
    dispatch(
      getRooms({
        slug: `?${slugPage}&${slugLimit}&${slugStatus}&${slugTopic}&${slugSearch}`,
      })
    );
  };

  // Filter
  // Filter by Status
  const handleStatus = async (stats) => {
    let latestStatus;
    await setStatus(() => {
      latestStatus = stats;
      return latestStatus;
    });

    let latestPage;
    await setSelected(() => {
      latestPage = 1;
      return latestPage;
    });

    let latestTopic;
    await setTopic(() => {
      latestTopic = topic;
      return latestTopic;
    });

    let latestSearch;
    await setSearchInput(() => {
      latestSearch = state;
      return latestSearch;
    });

    handleFetch(latestPage, latestStatus, latestTopic, latestSearch);
  };
  // End Filter by Status

  // Filter by Topics
  const handleTopics = async (top, chosenTop) => {
    setChosenTopic(chosenTop);

    let latestStatus;
    await setStatus(() => {
      latestStatus = status;
      return latestStatus;
    });

    let latestPage;
    await setSelected(() => {
      latestPage = 1;
      return latestPage;
    });

    let latestTopic;
    await setTopic(() => {
      latestTopic = top;
      return latestTopic;
    });

    let latestSearch;
    await setSearchInput(() => {
      latestSearch = state;
      return latestSearch;
    });

    handleFetch(latestPage, latestStatus, latestTopic, latestSearch);
  };
  // End Filter by Topics

  // Show hide dropdown

  const handleShow = () => {
    setShow(!show);
  };
  // End Show hide dropdown
  // End Filter
  // Start at top of page
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  // End Start at top of page

  // Handle Pagination
  const handlePagination = async (data) => {
    let latestStatus;
    await setStatus(() => {
      latestStatus = status;
      return latestStatus;
    });

    let latestPage;
    await setSelected(() => {
      latestPage = data.selected + 1;
      return latestPage;
    });

    let latestTopic;
    await setTopic(() => {
      latestTopic = topic;
      return latestTopic;
    });

    let latestSearch;
    await setSearchInput(() => {
      latestSearch = state;
      return latestSearch;
    });

    handleFetch(latestPage, latestStatus, latestTopic, latestSearch);
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
            <li
              onClick={() => handleStatus("All Status")}
              className={
                status === "All Status"
                  ? studyroomstyle.studyRoomTopTitleLeftChosen
                  : ""
              }
            >
              All Status
            </li>
            <li
              onClick={() => handleStatus("Open")}
              className={
                status === "Open"
                  ? studyroomstyle.studyRoomTopTitleLeftChosen
                  : ""
              }
            >
              Open
            </li>
            <li
              onClick={() => handleStatus("Restricted")}
              className={
                status === "Restricted"
                  ? studyroomstyle.studyRoomTopTitleLeftChosen
                  : ""
              }
            >
              Restricted
            </li>
          </ul>
          <div className={studyroomstyle.studyRoomTopTitleRight}>
            <div
              className={studyroomstyle.studyRoomTopTitleRightFilter}
              onClick={() => {
                handleShow();
              }}
            >
              <span>{chosenTopic}</span>
              <span>
                <IoIosArrowDown />
              </span>
            </div>
            <div
              className={studyroomstyle.studyRoomTopTitleRightOptions}
              style={show ? { display: "block" } : { display: "none" }}
            >
              <ul>
                {studyRooms.topics.map((data) => (
                  <li
                    key={data.id}
                    onClick={() => handleTopics(data.id, data.topic)}
                  >
                    {data.topic}
                  </li>
                ))}
              </ul>
            </div>
            <Link to="/new-class" className={studyroomstyle.link}>
              <Button classStyle={"addClass"}>
                Add Class
                <span className={studyroomstyle.plusIcon}>
                  <AiFillPlusCircle />
                </span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
      {studyRooms.data.length > 0 ? (
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
            forcePage={selected - 1}
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
