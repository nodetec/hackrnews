import { Button, OutlineButton, RoundButton } from "@ui/buttons";
import Divider from "@ui/divider";
import { LogOutIcon, MenuIcon, User2Icon } from "lucide-react";
import React from "react";
import FloatWrapper from "./float-wrapper";
import MenuLinks from "./menu-links";
import UserSettings from "./user-settings";

const MenuButton = () => (
  <RoundButton flat>
    <MenuIcon className="w-5 h-5" />
  </RoundButton>
);

export default function MobileMenu() {
  const dialogId = React.useId();

  return (
    <FloatWrapper logo toggleButton={<MenuButton />} dialogId={dialogId}>
      <MenuLinks dialogId={dialogId} />

      <Divider />

      {/* User Settings and Account*/}
      <div className="flex flex-col gap-3">
        <UserSettings />

        <OutlineButton
          variant="primary"
          className="justify-start gap-3"
          flat
        // onClick={closeFn}
        >
          <User2Icon className="w-5 h-5" />
          Accounts
        </OutlineButton>
      </div>

      {/* Logout Btn */}
      <div className="mt-auto">
        <Button
          variant="error"
          className="w-full"
          // onClick={closeFn}
          flat
        >
          <LogOutIcon className="w-5 h-5" />
          Logout
        </Button>
      </div>
    </FloatWrapper>
  );
}
