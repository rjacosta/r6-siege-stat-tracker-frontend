import React from "react";

const TextBubble = ({ text, type }) => {
  return (
    <div className="textBubble">
      {(type === "h1" && <h1 className="textBubbleText">{text}</h1>) ||
        (type === "h3" && <h3 className="textBubbleText">{text}</h3>) ||
        (type === "span" && <span className="textBubbleText">{text}</span>)}
    </div>
  );
};

export default TextBubble;
