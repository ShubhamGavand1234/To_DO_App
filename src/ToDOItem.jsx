import React, { useState } from "react";

function ToDOItem(props) {
  const [clicked, setClicked] = useState(false);
  function handleClick() {
    setClicked((prevValue) => {
      return !prevValue;
    });
  }
  return (
    <div onClick={handleClick}>
      <li
        style={
          clicked ? { textDecoration: "line-through", color: "grey" } : null
        }
      >
        {props.text}
      </li>
    </div>
  );
}

export default ToDOItem;
