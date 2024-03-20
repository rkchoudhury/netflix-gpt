import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import { IRootState } from "../model/RootState";

const AppOutlet = () => {
  const { uid } = useSelector((state: IRootState) => state.user);
  const {
    selectedMovie: { id },
  } = useSelector((state: IRootState) => state.watch);
  const { isError } = useSelector((state: IRootState) => state.error);

  return (
    <div>
      <Header showSignOut={!!uid} showHome={!!id || isError} />
      <Outlet />
    </div>
  );
};

export default AppOutlet;
