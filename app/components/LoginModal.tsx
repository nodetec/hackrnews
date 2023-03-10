"use client";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useState } from "react";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <button
        type="button"
        onClick={openModal}
        className="fill-round-button"
      >
        <UserIcon className="w-5 h-5" />
      </button>

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
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden align-middle text-left p-6 popup shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    LOGIN
                  </Dialog.Title>

                  <button
                    onClick={closeModal}
                    className="fill-round-button bg-red-600 text-white p-1 absolute top-2 right-2"
                  >
                    <XMarkIcon className="h-4 w-4" />
                  </button>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      inputs go here, styles needed
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="fill-button ml-auto"
                      onClick={closeModal}
                    >
                      login <ArrowRightOnRectangleIcon className="h-5 w-5" />
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
