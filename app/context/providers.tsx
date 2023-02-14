"use client";
import RelayProvider from "./relay-provider";

export default function Providers({ children }: any) {
  return <RelayProvider>{children}</RelayProvider>;
}
