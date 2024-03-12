import { Button, OutlineButton } from "@ui/buttons";
import Logo from "@components/logo";
import Divider from "@ui/divider";
import {
  AlertTriangleIcon,
  HelpCircleIcon,
  LogInIcon,
  ThumbsUpIcon,
} from "lucide-react";
import PrivkeyInput from "./privkey-input";
import DangerWrapper from "@/ui/danger-wrapper";

export default function Login() {
  return (
    <div className="flex flex-col gap-10 p-6 max-w-md mx-auto">
      <Logo />

      <div className="space-y-4">
        <div className="bg-success/5 border-1 border-success px-6 py-2 rounded flex gap-2 items-center text-success">
          <ThumbsUpIcon className="w-5 h-5" />

          <h1 className="font-bold">Recomended</h1>
        </div>

        <Button variant="primary" className="w-full">
          Login with extension
          <HelpCircleIcon className="w-5 h-5 justify-self-end" />
        </Button>
      </div>
      <Divider />

      <form className="flex flex-col">
        <DangerWrapper className="mb-2 relative">
          <div className="flex gap-2 py-2 px-4 justify-between items-center">
            <AlertTriangleIcon className="w-6 h-6 fill-warn" />
            <h4 className="grow font-bold">Login with private key</h4>
          </div>
        </DangerWrapper>
        <PrivkeyInput></PrivkeyInput>
        <OutlineButton variant="success" type="submit">
          <LogInIcon />
          Login
        </OutlineButton>
      </form>
    </div>
  );
}
