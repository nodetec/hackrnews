"use client";

import React from "react";

type StateCtx = boolean;

type StateActionCtx = React.Dispatch<React.SetStateAction<boolean>>;

/**
 * This basicaly means that children of popover can be a React.Node or a function that returns a React.Node
 */
type PopoverProps = {
  children:
  | React.ReactNode
  | ((open: StateCtx, setOpen: StateActionCtx) => React.ReactNode);
} & React.HTMLAttributes<HTMLSpanElement>;

const DialogContext = React.createContext<{
  openCx: StateCtx;
  setOpenCx: StateActionCtx;
}>({
  openCx: false,
  setOpenCx: () => { },
});

function Popover({ children, ...props }: PopoverProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <DialogContext.Provider value={{ openCx: open, setOpenCx: setOpen }}>
      <span {...props}>
        {typeof children === "function" ? children(open, setOpen) : children}
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
  const dialogRef = React.useRef<HTMLDialogElement>(null);

  React.useEffect(() => {
    dialogRef.current?.addEventListener("click", (e) => {
      const dialogDimensions = dialogRef.current!.getBoundingClientRect();
      if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
      ) {
        dialogRef.current?.close();
        setOpenCx(false);
      }
    });
  }, []);
  return (
    <dialog ref={dialogRef} open={openCx} {...props}>
      {children}
    </dialog>
  );
}

Popover.Button = Button;
Popover.Float = Float;

export default Popover;
