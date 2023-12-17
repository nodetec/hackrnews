import React from "react";
import SidebarWrapper from "./sidebar-wrapper";
import ActionBar from "./action-bar";
import ThemeToggler from "./theme-toggler";

export default function Settings() {
  return (
    <div>
      <SidebarWrapper>
        {/* <ActionBar /> */}
        <ThemeToggler />
      </SidebarWrapper>
    </div>
  );
}
