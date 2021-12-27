import React, { useEffect, useState } from "react";
import profilestyle from "./account.module.scss";
import Button from "../../components/buttons/Button";
import { getProfile } from "../../redux/action/actions/profileAction/profileAction";
import { useDispatch, useSelector } from "react-redux";
import Avatar from "../../assets/img/default-avatar-300x300.png";

function Profile() {
  const [menu, setMenu] = useState("Profile");
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
  console.log(profile);

  useEffect(() => {
    dispatch(getProfile());
  }, []);
  // End Fetch Data

  return (
    <section className={profilestyle.container}>
      <div className={profilestyle.imageLeftLoad}></div>
      <div className={profilestyle.imageRightLoad}></div>
      <h1>Account</h1>
      <main className={profilestyle.menus}>
        <ul>
          <li>Notification</li>
          <li
            onClick={() => setMenu("Profile")}
            className={menu === "Profile" ? profilestyle.selectedMenu : ""}
          >
            Profile
          </li>
          <li>History</li>
          <li>Change Password</li>
        </ul>
        {/* NOTIF */}
        {/* <h2>Notification</h2>
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
        {menu === "Profile" ? (
          <div
            className={profilestyle.menusProfile}
            style={
              menu === "Profile" ? { display: "flex" } : { display: "hidden" }
            }
          >
            <h2>Profile</h2>
            <label>Profile Photo</label>
            <div className={profilestyle.menusProfilePictureContainer}>
              <img
                src={
                  profile.data.imageUser !== null
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
      </main>
    </section>
  );
}

export default Profile;
