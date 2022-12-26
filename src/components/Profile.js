import React from "react";
import "./style/profile.css";

import LogoutIcon from "@mui/icons-material/Logout";

function Profile() {
  return (
    <div>
      <div className="profile_header">
        <h1>Profile</h1>
        <div>
          <LogoutIcon />
        </div>
      </div>
    </div>
  );
}

export default Profile;
