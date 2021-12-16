import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import homestyle from "./home.module.scss";
import Button from "../../components/buttons/Button";
import Card from "../../components/card/Card";
import { HiChevronDoubleRight } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getHomeRooms } from "../../redux/action/actions/homeRoomAction/homeRoomAction";

function Home() {
  // Parallax
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  // End of Parallax

  // Start at top of page
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  // End Start at top of page

  // Handle Showing Cards
  const studyRooms = useSelector((store) => {
    return store.homeRoomReducer;
  });

  const dispatch = useDispatch();

  const limit = 4;

  useEffect(() => {
    dispatch(
      getHomeRooms({
        slug: `?limit=${limit}`,
      })
    );
  }, []);
  // End of Handle Showing Cards

  return (
    <>
      <section className={homestyle.heroTop}>
        <div
          className={homestyle.heroTopDecorLeft}
          style={{
            transform: `translateY(${offsetY * 0.425}px)`,
          }}
        ></div>
        <div
          className={homestyle.heroTopTitleContainer}
          style={{
            transform: `translateY(${offsetY * 0.55}px)`,
          }}
        >
          <h1>ITS TIME TO STUDY! LETS JOIN WITH STUDYBUDS</h1>
          <p>
            Looking for a new study group? Join us now and check out all
            available classes for you!
          </p>
          <div className={homestyle.button}>
            <Link to="/register">
              <Button classStyle={`buttonGreen`}>Join Now</Button>
            </Link>
          </div>
        </div>
        <div
          className={homestyle.heroTopImage}
          style={{
            transform: `translateX(${offsetY * 0.15}px)`,
          }}
        ></div>
        <div
          className={homestyle.heroTopDecorRight}
          style={{
            transform: `translate(50px, ${offsetY * -0.55}px)`,
          }}
        ></div>
      </section>
      <section className={homestyle.heroMain}>
        <div className={homestyle.heroMainDecorLeft}></div>
        <div className={homestyle.heroMainContainer}>
          <h2>Join Available Class</h2>
          <ul className={homestyle.heroMainContainerMenu}>
            <li>All Topics</li>
            <li>Art</li>
            <li>Biology</li>
            <li>Business</li>
            <li>Cooking</li>
            <li>Digital</li>
            <li>Fashion</li>
            <li>Geography</li>
          </ul>
          <div className={homestyle.heroMainContainerCards}>
            {studyRooms.data.length > 0 &&
              studyRooms.data.map((data) => <Card data={data} key={data.id} />)}
          </div>
          <Link to="/study-room" className={homestyle.links}>
            <Button classStyle={"heroMainContainerButton"}>
              See All Available Study Room
              <span className={homestyle.arrows}>
                <HiChevronDoubleRight className={homestyle.arrow} />
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
