import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import VideoContainer from "./VideoContainer";
import Error from "../error/Error";
import { clearWatchState } from "../../redux/slices/watchSlice";
import { IRootState } from "../../model/RootState";
import CommentContainer from "./CommentContainer";

const Watch = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const {
    selectedMovie: { id },
  } = useSelector((state: IRootState) => state.watch);

  useEffect(() => {
    return () => {
      dispatch(clearWatchState());
    };
  }, [dispatch]);

  // Fixed Scrolling to bottom issue when navigating to watch page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  if (!id) return <Error />;

  return (
    <div className="bg-black w-screen">
      <div className="flex-1 pt-[5%]">
        <VideoContainer />
        <CommentContainer />
      </div>
    </div>
  );
};

export default Watch;
