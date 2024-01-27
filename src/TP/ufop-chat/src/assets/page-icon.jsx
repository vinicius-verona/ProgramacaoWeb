import React from "react";

function PageIcon({ svgClassName, pathClassName }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      className={svgClassName}
    >
      <g
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        className={pathClassName}
      >
        <path d="M4 21.4V2.6a.6.6 0 01.6-.6h11.652a.6.6 0 01.424.176l3.148 3.148A.6.6 0 0120 5.75V21.4a.6.6 0 01-.6.6H4.6a.6.6 0 01-.6-.6M8 10h8m-8 8h8m-8-4h4"></path>
        <path d="M16 2v3.4a.6.6 0 00.6.6H20"></path>
      </g>
    </svg>
  );
}

export default PageIcon;
