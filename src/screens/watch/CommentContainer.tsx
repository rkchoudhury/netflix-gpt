import React from "react";

import CommentsList from "../../components/CommentsList";
import { commentsData } from "../../utils/commentConstants";

const CommentContainer = () => {
  return (
    <div className="hidden md:block mx-8 pb-8">
      <h1 className="text-2xl font-bold text-white">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
