"use client";
import { ReactNode } from "react";
import RelayProvider from "./relay-provider";

export default function Providers({ children }: { children: ReactNode}) {
  return <RelayProvider>{children}</RelayProvider>;
}
