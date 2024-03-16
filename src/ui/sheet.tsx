/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of Hackr News.
 *
 * Hackr News is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Hackr News is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hackr News. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * chris.machine@pm.me
 */

'use client'

import ReactSheet from 'react-modal-sheet';
import { createContext, useContext, useState } from 'react';
import React from 'react';

type SheetContextType = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const SheetCtx = createContext<SheetContextType>({ isOpen: false, setIsOpen: () => { } });

type SheetProps = {
  children:
  | React.ReactNode
  | React.ReactNode[]
  | (({ isOpen, setIsOpen }: SheetContextType) => React.ReactNode)
  | (({ isOpen, setIsOpen }: SheetContextType) => React.ReactNode[])
}
export function Sheet({ children }: SheetProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SheetCtx.Provider value={{ isOpen, setIsOpen }}>
      {typeof children === 'function' ? children({ isOpen, setIsOpen }) : children}
    </SheetCtx.Provider>
  );
}

function by10px(el: HTMLElement, direction: 'open' | 'close' = 'open') {
  const currentTransform = +(el.style.transform.match(/\d+/g) ?? 0)
  const translation = direction === 'open' ? currentTransform + 10 : currentTransform - 10
  const currSheets = document.querySelectorAll('#bottom-sheet-iOS > *')
  console.log(currSheets)

  el.style.transform = `translateY(-${translation}px)`;
}

type TriggerProps<C extends React.ElementType> = {
  as?: C;
  children: React.ReactNode;
} & React.ComponentPropsWithoutRef<C>;

export const Trigger = <C extends React.ElementType = "span">({
  as,
  children,
  ...restProps
}: TriggerProps<C>) => {
  const { setIsOpen } = useContext(SheetCtx);

  function handleOpen() {
    const el = document.getElementById('main-wrapper')!;
    by10px(el);
    setIsOpen(true);
  }

  const Component = as || "span";
  return <Component onClick={handleOpen} {...restProps}>{children}</Component>;
};

export function Body({ children }: { children: React.ReactNode }) {
  const { isOpen, setIsOpen } = useContext(SheetCtx);

  function handleClose() {
    const el = document.getElementById('main-wrapper')!;
    by10px(el, 'close');
    setIsOpen(false);
  }

  return (
    <ReactSheet
      id='bottom-sheet-iOS'
      isOpen={isOpen} onClose={handleClose}
      snapPoints={[0.85, 0.4, 0]}
      initialSnap={1}
    >
      <ReactSheet.Container className=''>
        <ReactSheet.Header />
        <ReactSheet.Content className='pb-4'>
          {children}
        </ReactSheet.Content>
      </ReactSheet.Container>
      <ReactSheet.Backdrop onTap={handleClose} />
    </ReactSheet>
  )
}

// Sheet.Trigger = Trigger;
// Sheet.Body = Body;
//
// export default Sheet

