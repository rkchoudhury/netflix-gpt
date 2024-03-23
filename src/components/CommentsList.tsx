import React from "react";

import Comment from "./Comment";
import { IComment } from "../model/comment";

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

export default CommentsList;
