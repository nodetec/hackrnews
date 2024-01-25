// this only exists for me to remeber how to use forwardRef without forwardRef
// it's the best way to expose ref to other components




"use client";

import React from "react";

interface TestProps {
  compRef: React.RefObject<TestRef>;
}

export type TestRef = {
  print: () => void;
};

export default function Test(props: TestProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useImperativeHandle(
    props.compRef,
    () => {
      return {
        print: () => console.log(ref.current),
      };
    },
    [],
  );

  return <div ref={ref}>Test</div>;
}

