"use client";
import { ReactNode } from "react";
import RelayProvider from "./relay-provider";
import ProfilesProvider from "./profiles-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return <RelayProvider>
    <ProfilesProvider>
      {children}
    </ProfilesProvider>
  </RelayProvider>;
}
