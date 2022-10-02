import React from "react";
import Video from "../Video/Video";
import "./List.scss";

const List = ({ result }) => {
  return (
    <div className="List">
      {result.map((item) => {
        return (
          <Video
            img={item.snippet.thumbnails.default.url}
            title={item.snippet.title}
            channelTitle={item.snippet.channelTitle}
            description={item.snippet.description}
            key={Math.random()}
          />
        );
      })}
    </div>
  );
};

export default List;
