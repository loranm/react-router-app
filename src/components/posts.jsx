import React from "react";
import queryString from "query-string"
const Posts = ({match, location}) => {
  const {sortBy} = queryString.parse(location.search)
  const {year, month} = match.params
  return (
    <div>
      <h1>Posts</h1>
      Year: {year}, Month: {month}
    </div>
  );
};

export default Posts;
