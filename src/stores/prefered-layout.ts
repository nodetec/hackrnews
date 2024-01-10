// NOTE: not used probably to delete
import { Layout } from "@utils/prefered-layouts";
import { create } from "zustand";

interface LayoutState {
  layout: Layout;
  setLayout: (layout: Layout) => void;
}

export const layoutStore = create<LayoutState>()((set) => ({
  layout: Layout.WIDE,
  setLayout: (layout) => set({ layout }),
}));
