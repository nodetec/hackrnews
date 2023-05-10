"use client";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { Fragment, useEffect, useState } from "react";
import { setCookie } from "../lib/cookieHandlers";
import { fetchProfileData, getProviders, getPubkey } from "../lib/loginUtils";
import { userStore } from "../stores/user";

export default function LoginModal() {
  let [isOpen, setIsOpen] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  let [hasExt, setHasExt] = useState(false);
  const setPubkey = userStore((state) => state.setPubkey);
  const user = userStore((state) => state);

  const openModal = async () => {
    // Verify webln and nostr availability
    if (!hasExt) {
      const { webln, nostr } = await getProviders();

      if (webln && nostr) {
        setHasExt(true);
      } else {
        setHasExt(false);
      }
    }
    setIsOpen(true);
  };

  const loginHandler = async () => {
    getPubkey(setPubkey);
    console.log("pubkey:", user.pubkey);
    fetchProfileData();
  };

  useEffect(() => {
    setCookie("rememberMe", rememberMe.toString(), 30);
  }, [rememberMe]);

  return (
    <>
      <button type="button" onClick={openModal} className="fill-round-button">
        <UserIcon className="w-5 h-5" />
      </button>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
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
                  {hasExt ? (
                    <>
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-medium leading-6 text-gray-900"
                      >
                        LOGIN
                      </Dialog.Title>

                      <button
                        onClick={() => setIsOpen(false)}
                        className="fill-round-button bg-red-600 text-white p-1 absolute top-2 right-2"
                      >
                        <XMarkIcon className="h-4 w-4" />
                      </button>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          inputs go here, styles needed
                        </p>
                      </div>

                      <div className="mt-4 flex justify-between items-center">
                        <div className="flex items-center text-gray-500">
                          <input
                            type="checkbox"
                            name="remember-me"
                            onClick={(ev) =>
                              setRememberMe(ev.currentTarget.checked)
                            }
                          />
                          <label className="ml-2 text-sm" htmlFor="remember-me">
                            Remember me for 30 days.
                          </label>
                        </div>

                        <button
                          type="button"
                          className="fill-button ml-auto"
                          onClick={loginHandler}
                        >
                          login{" "}
                          <ArrowRightOnRectangleIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <DownloadExtension />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

const DownloadExtension = () => {
  return (
    <>
      <Dialog.Title
        as="h3"
        className="text-lg font-medium leading-6 text-gray-900"
      >
        Oops!
      </Dialog.Title>
      <p className="text-sm text-gray-500">
        It seems you don't have a supported extension.
      </p>
      <p>
        Consult{" "}
        <a href="https://www.webln.guide/ressources/webln-providers">here</a>{" "}
        for more information
      </p>
    </>
  );
};
