import { RefObject } from "react";
import { create } from "zustand";

type TModalRef = RefObject<HTMLDialogElement> | null;

interface IModalStore {
	modalRef: TModalRef;
	setModalRef: (ref: TModalRef) => void;
}

export const useModalRefStore = create<IModalStore>()((set) => ({
	modalRef: null,
	setModalRef: (modalRef) => set({ modalRef }),
}));
