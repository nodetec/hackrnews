"use client";

import { RoundButton } from "@ui/buttons";
import Divider from "@ui/divider";
import { MenuIcon } from "lucide-react";
import React from "react";
import FloatWrapper from "./float-wrapper";
import Extras from "./extras";
import UserSettings from "./user-settings";
import Sidebar from "@/components/sidebar";

const MenuButton = () => (
  <RoundButton flat>
    <MenuIcon className="w-5 h-5" />
  </RoundButton>
);

export default function MenuLinks() {
  const dialogId = React.useId();

  // return (
  //   <FloatWrapper logo toggleButton={<MenuButton />} dialogId={dialogId}>
  //
  //     <Divider />
  //
  //     <Extras dialogId={dialogId}>
  //       <UserSettings />
  //     </Extras>
  //   </FloatWrapper>
  // );

  return 
  <Sidebar logo>

  </Sidebar>;
}
