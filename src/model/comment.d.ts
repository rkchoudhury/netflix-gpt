interface IComment {
  name: string;
  text: string;
  replies: IComment[];
}

export { IComment };
