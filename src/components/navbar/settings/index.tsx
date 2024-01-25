'use client'
import React from "react";
import SidebarWrapper from "./sidebar-wrapper";
import ThemeToggler from "./theme-toggler";
import PreferedLayout from "./prefered-layout";
import RelaySettings from "./relay-settings";

export default function Settings() {
  return (
    <div>
      <SidebarWrapper>
        <div className="space-y-8">
          <ThemeToggler />
          <PreferedLayout />
          <RelaySettings />
        </div>
      </SidebarWrapper>
    </div>
  );
}
