import React from "react";

import Comment from "../../components/Comment";
import { commentsData } from "../../utils/commentConstants";
import { IComment } from "../../model/comment";

const CommentsList = ({ comments }: { comments: IComment[] }): any => {
  // Disclaimer: Don't use indexes as keys
  return comments.map((eachComment: IComment, index: number) => (
    <div key={index}>
      <Comment data={eachComment} />
      {eachComment.replies.length > 0 && (
        <div className="pl-12 border-l-white ml-5">
          <CommentsList comments={eachComment.replies} />
        </div>
      )}
    </div>
  ));
};

const CommentContainer = () => {
  return (
    <div className="hidden md:block mx-8 pb-8">
      <h1 className="text-2xl font-bold text-white">Comments: </h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentContainer;
