"use client";

import anime from "animejs";
import React from "react";

export default function Backdrop({ onClick }: { onClick: () => void }) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    anime({
      targets: ref.current,
      opacity: [0, 1],
      duration: 200,
      easing: "linear",
    });
  });

  const handleClose = () => {
    anime({
      targets: ref.current,
      opacity: [1, 0],
      duration: 200,
      easing: "linear",
      complete: () => onClick(),
    }); 
  }

  return (
    <div
      ref={ref}
      onClick={handleClose}
      className="fixed top-0 left-0 right-0 bottom-0 bg-black/50 backdrop-blur-sm"
    />
  );
}
