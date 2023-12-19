import React from "react";
import SidebarWrapper from "./sidebar-wrapper";
import ThemeToggler from "./theme-toggler";
import PreferedLayout from "./prefered-layout";

export default function Settings() {
  return (
    <div>
      <SidebarWrapper>
        <div className="space-y-8">
          <ThemeToggler />
          <PreferedLayout />
        </div>
      </SidebarWrapper>
    </div>
  );
}
