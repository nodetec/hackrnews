/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of HackrNews.
 *
 * HackrNews is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HackrNews is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HackrNews. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * luis..f.carvalho20+hackrnews@gmail.com
 */

"use client";

import anime from "animejs";
import React from "react";
import { twMerge } from "tailwind-merge";

type StateCtx = boolean;

type StateActionCtx = React.Dispatch<React.SetStateAction<boolean>>;

/**
 * This basicaly means that children of popover can be a React.Node or a function that returns a React.Node
 */
type PopoverProps = {
  children?: React.ReactNode;
  render?: (props: {
    open: boolean;
    setOpen: StateActionCtx;
  }) => React.ReactNode;
} & React.HTMLAttributes<HTMLSpanElement>;

const DialogContext = React.createContext<{
  openCx: StateCtx;
  setOpenCx: StateActionCtx;
}>({
  openCx: false,
  setOpenCx: () => { },
});

function Popover({ children, render, ...props }: PopoverProps) {
  const [open, setOpen] = React.useState(false);

  if (render) {
    return render({ open, setOpen });
  }

  return (
    <DialogContext.Provider value={{ openCx: open, setOpenCx: setOpen }}>
      <span {...props} className={props.className}>
        {children}
      </span>
    </DialogContext.Provider>
  );
}

function Button({ children }: { children: React.ReactNode }) {
  const { openCx, setOpenCx } = React.useContext(DialogContext);
  return (
    <span className="cursor-pointer" onClick={() => setOpenCx(!openCx)}>
      {children}
    </span>
  );
}

type FloatProps = {
  children: React.ReactNode;
} & React.HTMLAttributes<HTMLDialogElement>;

function Float({ children, ...props }: FloatProps) {
  const { openCx, setOpenCx } = React.useContext(DialogContext);
  const [open, setOpen] = React.useState(false);
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  const clickOutListener = (e: MouseEvent) => {
    const dialogDimensions = dialogRef.current!.getBoundingClientRect();
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
      handleClose();
    }
  };

  const scrollListener = (e: Event) => {
    if (openCx) {
      handleClose();
    }
  };

  const pressEscListener = (e: KeyboardEvent) => {
    if (e.key === "Escape" && openCx) {
      e.preventDefault();
      handleClose();
    }
  };

  const handleClose = () => {
    anime({
      targets: dialogRef.current,
      opacity: [1, 0],
      duration: 200,
      translateY: [0, -20],
      translateX: [0, 10],
      scale: [1, 0.75],
      easing: "easeInElastic(2, .6)",
      complete: () => setOpenCx(false),
    });

    document.removeEventListener("click", clickOutListener);
  };

  const handleOpen = () => {
    document.addEventListener("click", clickOutListener);
    setOpen(true);

    anime({
      targets: dialogRef.current,
      opacity: [0, 1],
      duration: 200,
      translateY: [-20, 0],
      translateX: [10, 0],
      scale: [0.75, 1],
      easing: "easeOutElastic(2, .6)",
    });
  };

  React.useEffect(() => {
    // Esc Linstener
    document.addEventListener("keydown", pressEscListener);
    // Scroll Linstener
    //TODO: See if the experience of closing the modal is good
    document.addEventListener("scroll", scrollListener);

    if (openCx) {
      handleOpen();
    }

    return () => {
      document.removeEventListener("scroll", scrollListener);
      document.removeEventListener("keydown", pressEscListener);
    };
  }, [openCx]);

  return (
    <dialog
      ref={dialogRef}
      open={open}
      {...props}
      className={twMerge(
        "z-20 opacity-0 scale-75 text-textColor p-2",
        "bg-surface1 dark:bg-surface2 rounded-3xl ring-1 ring-black/10 shadow-md",
        props.className,
      )}
    >
      {children}
    </dialog>
  );
}

Popover.Button = Button;
Popover.Float = Float;

export default Popover;
