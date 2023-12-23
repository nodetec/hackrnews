"use client";

import React from "react";

type Checkbox = React.HtmlHTMLAttributes<HTMLInputElement>;

export default function Checkbox({ ...props }: Checkbox) {
  return (
    <input type="checkbox" className="accent-sky-500  border-bg" {...props} />
  );
}
