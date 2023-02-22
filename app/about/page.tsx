import { CogIcon, HeartIcon, UserIcon } from "@heroicons/react/24/solid";
import React from "react";

function alerto() {
  alert("hello");
}
export default function About() {
  return (
    <div className="space-y-2 h-full p-4 relative space-x-2">
      {/* <FillButton onClick={alerto}>Primary Button</FillButton> */}
      {/* <BorderedButton>Border Button</BorderedButton> */}
      {/* <GhostButton onClick={alerto}>Ghost Button</GhostButton> */}
      <button className="fill-button inline-block">button</button>
      <button className="bordered-button inline-block">button</button>
      <button className="ghost-button shadow inline-block">button</button>

      <button className="fill-round-button">
        <HeartIcon className="h-5 w-5" />
      </button>
      <button className="bordered-round-button">
        <UserIcon className="h-5 w-5" />
      </button>
      <button className="ghost-round-button shadow">
        <CogIcon className="h-5 w-5" />
      </button>

      <h1 className="title">I am a title</h1>
      <h2 className="subtitle">I am a subtitle</h2>
      <p className="txt-color">This is a normal paragraph</p>

      {/* for a popup it is required to make the parent as relative and specify the position */}
      <div className="popup top-0 right-0 w-52 h-40 flex items-center justify-center">
        this is a popup
      </div>

      <div className="card">This is a card (with hoover effect)</div>
      <div className="link">www.this-is-a-link.org</div>

      <span className="bordered-crumb m-2">#crumb</span>
      <span className="fill-crumb m-2">#crumb</span>
    </div>
  );
}
