'use client'
import Drawer from "@/ui/drawer";

export default function NestedDrawer() {
  return (
    <Drawer.Nested>
      <Drawer.Trigger>
        <span>button</span>
      </Drawer.Trigger>
      <Drawer.Body>
        <div>this is the nested content</div>
      </Drawer.Body>
    </Drawer.Nested>
  );
}
