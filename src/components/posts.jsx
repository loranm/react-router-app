import React from "react";

const Posts = ({match}) => {
  const {year, month } = match.params
  return (
    <div>
      <h1>Posts</h1>
      Year: {year}, Month: {month}
    </div>
  );
};

export default Posts;
