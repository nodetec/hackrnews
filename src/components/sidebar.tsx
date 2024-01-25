import { RoundButton } from "@/ui/buttons";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "lucide-react";
import { Fragment, useState } from "react";
import Logo from "./logo";
import { twJoin } from "tailwind-merge";

export default function Sidebar(props: {
  children: React.ReactNode;
  button: (open: boolean) => JSX.Element;
  mobile?: boolean;
  logo?: boolean;
  open?: boolean;
  title?: string;
}) {
  let [isOpen, setIsOpen] = useState(props.open ?? false);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <span
        onClick={() => setIsOpen(!isOpen)}
      >{props.button(isOpen)}</span>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto z-50">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className={twJoin(
                    "rounded-3xl p-4 bg-background w-full h-screen text-textColor z-50",
                    "space-y-4 backdrop:bg-black/20 backdrop:backdrop-blur-md",
                    props.mobile && "",
                  )}
                  as="dialog"
                  open={isOpen}
                >
                  <div className="flex justify-between items-center">
                    {props.logo && <Logo />}
                    <RoundButton flat onClick={closeModal}>
                      <XIcon className="w-5 h-5" />
                    </RoundButton>
                  </div>

                  {/* TITLE */}
                  {props.title && (
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    ></Dialog.Title>
                  )}

                  {/* CONTENT */}
                  <div className="mt-2">{props.children}</div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
