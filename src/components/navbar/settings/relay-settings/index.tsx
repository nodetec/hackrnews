import React from "react";
import RelaySettings from "../../mobile/user-settings/relay-settings";

export default function Component() {
  return (
    <div>
      <fieldset>
        {/* <legend className="text-2xl mb-2">Servers</legend> */}
        <div className="space-y-4">
          <RelaySettings></RelaySettings>
        </div>
      </fieldset>
    </div>
  );
}
