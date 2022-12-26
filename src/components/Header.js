import React from "react";
import { useDispatch } from "react-redux";
import "./style/Header.css";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import { SupervisorAccount } from "@mui/icons-material";
import { BusinessCenter } from "@mui/icons-material";
import { Chat } from "@mui/icons-material";
import { Notifications } from "@mui/icons-material";
import LogoutIcon from "@mui/icons-material/Logout";
import { auth } from "../db";
import { logout } from "../features/userSlice";

import HeaderOption from "./HeaderOption";

function Header() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <>
      <div className="header">
        <div className="header_left">
          <img
            src="https://img.icons8.com/fluency/48/000000/linkedin.png"
            alt=""
          />

          <div className="header_search">
            <SearchIcon />
            <input placeholder="Search" type="text" />
          </div>
        </div>
        <div className="header_right">
          <HeaderOption title="Home" Icon={HomeIcon} />
          <HeaderOption title="My network" Icon={SupervisorAccount} />
          <HeaderOption title="Jobs" Icon={BusinessCenter} />
          <HeaderOption title="Messaging" Icon={Chat} />
          <HeaderOption title="Notifications" Icon={Notifications} />
          <HeaderOption
            title="logout"
            Icon={LogoutIcon}
            onClick={logoutOfApp}
          />
          <HeaderOption
            avatar={true}
            title="me"
            onClick={() => {
              navigate("/profile");
            }}
          />
        </div>
      </div>
    </>
  );
}

export default Header;
