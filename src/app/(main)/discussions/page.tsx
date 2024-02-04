"use client";

import React from "react";
import Drawer from "./comp";
import { twJoin } from "tailwind-merge";
import NestedDrawer from "./nested";

export default function Page() {
  return (
    <div>
      <Drawer>
        {({ isOpen, setIsOpen }) => (
          <>
            <Drawer.Trigger asChild>
              <button className={twJoin(isOpen && "bg-red-500")}>butt</button>
            </Drawer.Trigger>
            <Drawer.Body>
              <Drawer.Title>Drawer Title</Drawer.Title>
              <div>this is the content</div>
              <button onClick={() => setIsOpen(false)}>closes</button>

              <NestedDrawer />
            </Drawer.Body>
          </>
        )}
      </Drawer>
    </div>
  );
}
