import { useState } from "react";

const divStyle = {
  backgroundColor: "#c1c1c1",
  border: "1px solid #000",
  borderRadius: "4px",
  padding: ".2rem 1rem",
  fontFamily: "Segoe UI, sans-serif",
};

const linkStyle = {
  textDecoration: "none",
  marginLeft: "6px",
};

export default function TextExpander({
  text = "",
  numWords = 10,
  isTextExpanded = false,
  expandText = "Show more",
  shrinkText = "Show less",
  linkColor = "#a5faa1",
}) {
  const [isExpanded, setIsExpanded] = useState(isTextExpanded);

  function handleExpand(e) {
    e.preventDefault();
    setIsExpanded(!isExpanded);
  }
  return (
    <div style={divStyle}>
      <p>
        {isExpanded
          ? text
          : `${text.split(" ").slice(0, numWords).join(" ")}...`}
        <a
          href="_"
          onClick={(e) => handleExpand(e)}
          style={{ ...linkStyle, color: linkColor }}
        >
          {isExpanded ? shrinkText : expandText}
        </a>
      </p>
    </div>
  );
}
