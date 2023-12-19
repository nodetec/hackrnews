import React from "react";
import styles from "./styles.module.css";

// TODO: add animation and convert global styles to module styles
// FIX: Ask chatGPT to reduce with and height
export default function Checkmark() {
  return (
    <div className="w4rAnimated_checkmark">
      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 130.2 130.2"
      >
        <title>Animated check svg</title>
        <polyline
          className="path check"
          fill="none"
          stroke="#73AF55"
          strokeWidth="6"
          strokeLinecap="round"
          strokeMiterlimit="10"
          points="100.2,40.2 51.5,88.8 29.8,67.5 "
        />
      </svg>
    </div>
  );
}
