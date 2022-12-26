import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "./App";
import Profile from "./components/Profile";
import Feed from "./components/Feed";

const AllRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/feed" element={<Feed />} />
      <Route exact path="/profile" element={<Profile />} />
    </Routes>
  );
};

export default AllRoutes;
