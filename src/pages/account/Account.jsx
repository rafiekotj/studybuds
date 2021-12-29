import React, { useEffect, useState } from "react";
import profilestyle from "./account.module.scss";
import Button from "../../components/buttons/Button";
import { getProfile } from "../../redux/action/actions/profileAction/profileAction";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../assets/img/default-avatar-300x300.png";
import { useParams } from "react-router-dom";

function Profile() {
  const param = useParams();

  const [menu, setMenu] = useState(param.menu);
  const dispatch = useDispatch();
  // Start at top of page
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  // End Start at top of page
  // Fetch Data

  const profile = useSelector((store) => {
    return store.profileReducer;
  });

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  // End Fetch Data

  useEffect(() => {
    param.menu = menu;
  }, [menu]);

  return (
    <section className={profilestyle.container}>
      <div className={profilestyle.imageLeftLoad}></div>
      <div className={profilestyle.imageRightLoad}></div>
      <h1>Account</h1>
      <main className={profilestyle.menus}>
        <ul>
          <li
            li
            onClick={() => setMenu("notification")}
            className={menu === "notification" ? profilestyle.selectedMenu : ""}
          >
            Notification
          </li>
          <li
            onClick={() => setMenu("profile")}
            className={menu === "profile" ? profilestyle.selectedMenu : ""}
          >
            Profile
          </li>
          <li
            onClick={() => setMenu("history")}
            className={menu === "history" ? profilestyle.selectedMenu : ""}
          >
            History
          </li>
          <li
            onClick={() => setMenu("change-password")}
            className={
              menu === "change-password" ? profilestyle.selectedMenu : ""
            }
          >
            Change Password
          </li>
        </ul>
        {/* NOTIF */}
        {menu === "notification" ? (
          <div
            className={profilestyle.menusProfile}
            style={
              menu === "notification"
                ? { display: "flex" }
                : { display: "hidden" }
            }
          >
            <div className={profilestyle.notFoundContainer}>
              <p>The notification menu is still on development process</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* <h2>notificationication</h2>
        <ul>
          <li>
            <div>
              <p>
                You are now can join class <strong>Advanced Biology</strong> by
                Dr. Kusanagi
              </p>
              <p>Today</p>
            </div>
            <div></div>
          </li>
          <li>
            <div>
              <p>You currently have no new notifications.</p>
              <p> Today</p>
            </div>
          </li>
        </ul> */}
        {/* END NOTIF */}
        {/* PROFILE */}
        {menu === "profile" ? (
          <div
            className={profilestyle.menusProfile}
            style={
              menu === "profile" ? { display: "flex" } : { display: "hidden" }
            }
          >
            <h2>Profile</h2>
            <label>Profile Photo</label>
            <div className={profilestyle.menusProfilePictureContainer}>
              <img
                src={
                  profile.data.imageUser !== null || Avatar
                    ? profile.data.imageUser
                    : Avatar
                }
                alt={profile.data?.fullname}
                className={profilestyle.menusProfilePicture}
              />
            </div>
            <label htmlFor="fullName">Full Name</label>
            <input
              type="text"
              placeholder={profile.data?.fullname}
              value={profile.data?.fullname}
              disabled
            />
            <label htmlFor="Email">Email</label>
            <input
              type="text"
              placeholder={profile.data?.email}
              value={profile.data?.email}
              disabled
            />
            <div className={profilestyle.buttons}>
              <Button classStyle="buttonWhite">Cancel</Button>
              <Button classStyle="buttonGreen">Save</Button>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* END PROFILE */}
        {/* HISTORY */}
        {menu === "history" ? (
          <div
            className={profilestyle.menusProfile}
            style={
              menu === "history" ? { display: "flex" } : { display: "hidden" }
            }
          >
            <div className={profilestyle.notFoundContainer}>
              <p>The history menu is still on development process</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* END HISTORY */}
        {/* CHANGE PASSWORD */}
        {menu === "change-password" ? (
          <div
            className={profilestyle.menusProfile}
            style={
              menu === "change-password"
                ? { display: "flex" }
                : { display: "hidden" }
            }
          >
            <div className={profilestyle.notFoundContainer}>
              <p>The change password menu is still on development process</p>
            </div>
          </div>
        ) : (
          ""
        )}
        {/* END CHANGE PASSWORD */}
      </main>
    </section>
  );
}

export default Profile;
