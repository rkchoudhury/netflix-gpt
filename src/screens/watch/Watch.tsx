import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";

import Header from "../../components/Header";
import VideoContainer from "./VideoContainer";
import { ROUTE_NAMES } from "../../navigation/Routes";
import { clearWatchState } from "../../redux/slices/watchSlice";

const Watch = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  useEffect(() => {
    return () => {
      dispatch(clearWatchState());
    };
  }, [dispatch]);

  // Fixed Scrolling to bottom issue when navigating to watch page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-black w-screen">
      <Header showSignOut={false} route={ROUTE_NAMES.WATCH} />
      <div className="flex-1 pt-[5%]">
        <VideoContainer />
        {/* <div className="bg-red-300 h-48">comments</div> */}
      </div>
    </div>
  );
};

export default Watch;
