import React from "react";
import { Modal } from "./modal";
import Login from "@/components/login";

export default function Page() {
  return (
    <Modal>
      <Login></Login>
    </Modal>
  );
}
