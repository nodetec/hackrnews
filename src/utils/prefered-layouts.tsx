export enum Layout {
  WIDE = "wide",
  COMPACT = "narrow",
}

export const layoutType = [
  {
    name: Layout.WIDE,
    skeleton: <WideSkelleton />,
  },
  {
    name: Layout.COMPACT,
    skeleton: <CompactSkelleton />,
  },
];

function CompactSkelleton() {
  return (
    <div className="flex gap-2">
      <WideSkelleton />
      <WideSkelleton />
    </div>
  );
}

function WideSkelleton() {
  return (
    <div className="space-y-1 w-full">
      <div className="bg-primary/60 h-1"></div>
      <div className="bg-discreetText/60 h-1"></div>
      <div className="bg-discreetText/60 h-1 w-3/4"></div>
    </div>
  );
}
