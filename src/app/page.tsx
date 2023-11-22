import {
  Button,
  IconButton,
  OutlineButton,
  RoundButton,
} from "@/components/buttons";
import Dialog from "@/components/dialog";
import { ThumbsUpIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="space-y-4 flex flex-col items-center pt-12">
      <div className="bg-surface1 w-36 h-36"></div>
      <div className="bg-surface2 w-36 h-36"></div>
      <div className="bg-surface3 w-36 h-36"></div>
      <IconButton>
        <ThumbsUpIcon />
      </IconButton>
      <Dialog />

      <Button variant="primary">primary</Button>
      <Button variant="error">error</Button>
      <Button variant="success">success</Button>
      <Button variant="warn">warn</Button>
      <Button variant="info">info</Button>
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

      <OutlineButton variant="success" className="flex justify-center">
        success
      </OutlineButton>
      <OutlineButton variant="error" className="flex justify-center">
        error
      </OutlineButton>
      <OutlineButton className="flex justify-center">ghost</OutlineButton>
      <OutlineButton variant="warn" className="flex justify-center">
        warn
      </OutlineButton>
    </div>
  );
}
