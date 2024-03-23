import React from "react";

import { IComment } from "../model/comment";
import { USER_AVATAR } from "../asserts";

interface IProps {
  data: IComment;
}

const Comment = ({ data }: IProps) => {
  const { name, text } = data;
  return (
    <div className="flex p-2 m-2 border-l-2 items-center shadow-sm bg-gray-900">
      <img src={USER_AVATAR} alt="profile_icon" className="rounded-full h-8" />
      <div className="ml-2 text-white">
        <h1 className="font-bold">{name}</h1>
        <h2 className="">{text}</h2>
      </div>
    </div>
  );
};

export default Comment;
