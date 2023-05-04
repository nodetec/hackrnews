"use client";
import { Dialog, Transition } from "@headlessui/react";
import {
  ArrowRightOnRectangleIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/solid";
import { nip05 } from "nostr-tools";
import { Fragment, useEffect, useState } from "react";
import { detectWebLNProvider } from "../lib/detectWebLn";
import { userStore } from "../stores/user";

export default function MyModal() {
  let [isOpen, setIsOpen] = useState(false);
  let [keys, setKeys] = useState({ privateKey: "", publicKey: "" });
  let [isLightningConnected, setIsLightningConnected] = useState(false);
  let [hasExt, setHasExt] = useState(false);
  const pubkey = userStore((state) => state.pubkey);
  const setPubkey = userStore((state) => state.setPubkey);

  async function loginHandler() {
    if (typeof window.nostr !== "undefined") {
      const publicKey = await window.nostr.getPublicKey();
      console.log("public key", publicKey);
      setPubkey(publicKey);
      console.log("pubkey =>", pubkey);

      setKeys({ privateKey: "", publicKey: publicKey });
      localStorage.setItem("shouldReconnect", "true");
    }

    if (typeof window.webln !== "undefined") {
      await window.webln.enable();
      setHasExt(true);
      console.log("webln enabled");
    }
    console.log("connected");
    setIsOpen(false);
  }

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const shouldReconnect = localStorage.getItem("shouldReconnect");

    const getConnected = async (shouldReconnect: string) => {
      let enabled = false;

      if (typeof window.nostr === "undefined") {
        console.log("no nostr");
        return;
      }

      if (shouldReconnect === "true") {
        const publicKey = await nostr.getPublicKey();
        console.log("public key", publicKey);
        setKeys({ privateKey: "", publicKey: publicKey });
      }

      if (typeof window.webln === "undefined") {
        return;
      }

      if (shouldReconnect === "true" && !webln.executing) {
        try {
          enabled = await window.webln.enable();
          setIsLightningConnected(true);
        } catch (e: any) {
          console.log(e.message);
        }
      }
      return enabled;
    };

    if (shouldReconnect === "true") {
      getConnected(shouldReconnect);
    }
  }, [setKeys]);

  useEffect(() => {
    const checker = async () => {
      await detectWebLNProvider().then(
        (promise: any) => promise.enabled && setHasExt(true)
      );
      let profile = await nip05.queryProfile("lcarv@kollider.me");
      console.log("profile", profile);
    };

    checker();
  });

  return (
    <>
      <button type="button" onClick={openModal} className="fill-round-button">
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
                  {isLightningConnected ? (
                    <>
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
                          onClick={loginHandler}
                        >
                          login{" "}
                          <ArrowRightOnRectangleIcon className="h-5 w-5" />
                        </button>
                      </div>
                    </>
                  ) : (
                    <LoginWithExtension />
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

const LoginWithExtension = () => {
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
      <p>Consult here for more information</p>
    </>
  );
};
