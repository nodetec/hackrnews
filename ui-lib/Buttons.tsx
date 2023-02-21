import React, { ReactNode } from "react";

// IMPORTANT: These components can only be used on the client ("use client")
// To take advantage of the server side rendering there will be classnames with the same styles
// check global.css

type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children: ReactNode;
};

export const FillButton = (props: ButtonProps) => {
  return (
    <button
      onClick={() => props.onClick && props.onClick()}
      className={`flex gap-2 items-center bg-primary outline-primary outline-offset-2 text-white 
      rounded-md hover:bg-opacity-70 py-2 px-4 active:bg-primary/50 transition-all ease-in-out
      ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
};

export function BorderedButton(props: ButtonProps) {
  return (
    <button
      onClick={() => props.onClick && props.onClick()}
      className={`ring-0 flex gap-2 items-center border border-primary outline-primary outline-offset-4 text-primary 
      rounded-md hover:bg-primary/10 py-2 px-4 active:bg-primary/30 transition-all ease-in-out
      ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}

export function GhostButton(props: ButtonProps) {
  return (
    <button
      onClick={() => props.onClick && props.onClick()}
      className={`rounded-md hover:bg-gray-400/60 px-4 py-2 outline-primary outline-offset-2
      transition-all ease-in-out;
      ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}

export const FillRoundButton = (props: ButtonProps) => {
  return (
    <button
      onClick={() => props.onClick && props.onClick()}
      className={`bg-primary outline-primary outline-offset-2 text-white 
      rounded-full hover:bg-opacity-70 p-2 active:bg-primary/50 transition-all ease-in-out
      ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
};

export function BorderedRoundButton(props: ButtonProps) {
  return (
    <button
      onClick={() => props.onClick && props.onClick()}
      className={`ring-0 border border-primary outline-primary outline-offset-4 text-primary 
      rounded-full hover:bg-primary/10 p-2 active:bg-primary/30 transition-all ease-in-out
      ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}

export function GhostRoundButton(props: ButtonProps) {
  return (
    <button
      onClick={() => props.onClick && props.onClick()}
      className={`rounded-full hover:bg-gray-400/60 p-2 outline-primary outline-offset-2
      transition-all ease-in-out;
      ${props.className || ""}`}
    >
      {props.children}
    </button>
  );
}
