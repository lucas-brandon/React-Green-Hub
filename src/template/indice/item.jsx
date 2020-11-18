import React from "react";

export default (props) => {
  return (
    <div className={props.class}>
      <span>{props.name}</span>
    </div>
  );
};
