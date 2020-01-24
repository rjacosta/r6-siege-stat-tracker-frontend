import React from "react";

const TextBubble = ({ text, type }) => {
  return (
    <div className="textBubble">
      {(type === 1 && <h1 className="textBubbleText">{text}</h1>) ||
       (type === 2 && <h2 className="textBubbleText">{text}</h2>) ||
       (type === 3 && <h3 className="textBubbleText">{text}</h3>) ||
       (type === 4 && <h4 className="textBubbleText">{text}</h4>) ||
       (type === 5 && <h5 className="textBubbleText">{text}</h5>) ||
       (type === "span" && <span className="textBubbleText">{text}</span>) ||
       (type === "none" && text)
      }
    </div>
  );
};

export default TextBubble;
