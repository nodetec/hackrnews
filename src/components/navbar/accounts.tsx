"use client";
import { Button, OutlineButton } from "@ui/buttons";
import { User2Icon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
// TODO: Add real login functionality
export default function Accounts() {
  const [mockLogin, setMockLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const AcountMock = [
    {
      displayName: "damus.io",
      avatar: "https://picsum.photos/200",
    },
    {
      displayName: "relay.example/wellord.com",
      avatar: "https://picsum.photos/200",
    },
    {
      displayName: "relay.example/simple.com",
      avatar: "https://picsum.photos/200",
    },
  ];
  function handleLogin() {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setMockLogin(true);
    }, 2000);
  }
  return (
    <>
      {mockLogin ? (
        <Button variant="ghost" className="flex -space-x-4">
          {AcountMock.map((account) => (
            <Image
              key={account.displayName}
              className="inline-block h-6 w-6 rounded-full object-cover ring-2 ring-success"
              width={8}
              height={8}
              src={account.avatar}
              alt="Profile Picus"
            />
          ))}
        </Button>
      ) : (
        <OutlineButton
          variant="primary"
          onClick={handleLogin}
          className="flex -space-x-4"
        >
          {isLoading ? (
            //<LoaderIcon className="h-5 w-5 animate-spin text-gradient-to-r from-primary to-background" />
            <SpinningLoader />
          ) : (
            <User2Icon className="h-5 w-5" />
          )}
          Login
        </OutlineButton>
      )}
    </>
  );
}
const SpinningLoader = () => {
  return (
    <svg
      className="animate-spin h-5 w-5 text-primary"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <title>Spinner</title>
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );
};

