"use client";

import { routes } from "@/utils/routes";
import { CogIcon, Settings2Icon, User2Icon, XIcon } from "lucide-react";
import { useRef } from "react";
import { twJoin } from "tailwind-merge";
import { IconButton, LinkButton } from "../buttons";
import Divider from "../divider";
import Logo from "../logo";

export default function MobileMenu() {
  const dialog = useRef<HTMLDialogElement>(null);

  const closeHandler = () => {
    document.body.style.overflowY = "auto";
    dialog.current?.close();
  };

  return (
    <>
      <IconButton
        className="ring-transparent shadow-none"
        onClick={() => {
          console.log("clicked");
          document.body.style.overflowY = "hidden";
          dialog.current?.showModal();
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </IconButton>
      <dialog
        ref={dialog}
        className={twJoin(
          "rounded-3xl p-4 bg-background w-full h-full  menu-open text-textColor",
          "space-y-4 backdrop:blur-md backdrop:bg-black/30 backdrop:w-full backdrop:h-full",
        )}
      >
        <div className="flex flex-col gap-3 h-full">
          <div className="flex justify-between items-center">
            <Logo />
            <IconButton onClick={closeHandler}>
              <XIcon className="w-5 h-5" />
            </IconButton>
          </div>

          <div className="flex flex-col gap-1">
            {routes.map((route) => (
              <LinkButton
                key={route.name}
                href={route.path}
                onClick={closeHandler}
                //  {...btnAttr}
              >
                {route.icon}
                {route.name}
              </LinkButton>
            ))}
          </div>
          <Divider />

          <div className="flex flex-col gap-3">
            <LinkButton href="/settings" onClick={closeHandler}>
              <Settings2Icon className="w-5 h-5" />
              Settings
            </LinkButton>
            <LinkButton
              href="accounts"
              onClick={closeHandler}
              className="border border-primary text-primary"
            >
              <User2Icon className="w-5 h-5" />
              Accounts
            </LinkButton>
          </div>
          {/* NOTE: the parent must be flex and this as to be self-end */}
          <div className="mt-auto">
            <LinkButton
              href="/logout"
              className="bg-error text-white active:bg-error/70 hover:bg-error/90"
            >
              <CogIcon className="w-5 h-5" />
              Logout
            </LinkButton>
          </div>
        </div>
      </dialog>
    </>
  );
}
