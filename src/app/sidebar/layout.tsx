import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-0 w-full h-full p-2 bg-neutral-800/30">
      {children}
    </div>
  );
}
