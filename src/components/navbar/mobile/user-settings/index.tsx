import React from "react";
import FloatWrapper from "../float-wrapper";
import ThemeSelect from "./theme-toggler";
import { Button } from "@/ui/buttons";
import { Settings2Icon } from "lucide-react";
import RelaySettings from "../../relay-settings";

export default function MobileSettings() {
  const dialogId = React.useId();

  return (
    <FloatWrapper
      toggleButton={
        <Button className="justify-start w-full gap-3" flat>
          <Settings2Icon />
          <span>Settings</span>
        </Button>
      }
      dialogId={dialogId}
    >
      <div className="space-y-8">
        <ThemeSelect />
        <RelaySettings />
      </div>
    </FloatWrapper>
  );
}
