import { create } from "zustand";

export enum Layout {
  WIDE = "wide",
  COMPACT = "narrow",
}

interface LayoutState {
  layout: Layout;
  setLayout: (layout: Layout) => void;
}

export const layoutState = create<LayoutState>()((set) => ({
  layout: Layout.WIDE,
  setLayout: (layout) => set({ layout }),
}));
