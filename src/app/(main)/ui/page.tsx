import { Button, OutlineButton, RoundButton } from "@/ui/buttons";
import { ThumbsUpIcon } from "lucide-react";
import React from "react";

export default function Home() {
  return (
    <div className="space-y-4 flex flex-col items-center pt-12">
      <div className="bg-surface1 w-36 h-36" />
      <div className="bg-surface2 w-36 h-36" />
      <div className="bg-surface3 w-36 h-36" />

      <Button>primary</Button>
      <Button variant="error">error</Button>
      <Button variant="success">success</Button>
      <Button variant="warn">warn</Button>
      <Button variant="info">info</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="ghost">ghost</Button>

      <RoundButton>
        <ThumbsUpIcon className="w-5 h-5" />
      </RoundButton>
      <RoundButton variant="error">
        <ThumbsUpIcon className="w-5 h-5" />
      </RoundButton>
      <RoundButton variant="warn">
        <ThumbsUpIcon className="w-5 h-5" />
      </RoundButton>
      <RoundButton variant="ghost">
        <ThumbsUpIcon className="w-5 h-5" />
      </RoundButton>

      <OutlineButton variant="success">success</OutlineButton>
      <OutlineButton variant="error">error</OutlineButton>
      <OutlineButton>ghost</OutlineButton>
      <OutlineButton variant="warn">warn</OutlineButton>
      <OutlineButton variant="primary">primary</OutlineButton>
    </div>
  );
}
