"use client";

import Create from "@/components/create";
import Modal from "@/components/modal";
import { usePathname } from "next/navigation";

export default function Page() {
  const pathname = usePathname();

  if (pathname !== "/create") return null;

  return (
    <Modal>
      <Create />
    </Modal>
  );
}
