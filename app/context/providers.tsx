"use client";
import { ReactNode } from "react";
import ProfilesProvider from "./profiles-provider";

export default function Providers({ children }: { children: ReactNode }) {
  return <ProfilesProvider>{children}</ProfilesProvider>;
}
