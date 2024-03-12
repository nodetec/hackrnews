import { Button, OutlineButton } from "@ui/buttons";
import Logo from "@components/logo";
import Divider from "@ui/divider";
import { LogInIcon, ThumbsUpIcon } from "lucide-react";
import PrivkeyInput from "./privkey-input";
import { twJoin } from "tailwind-merge";

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
        </Button>
      </div>
      <Divider />

      <form className="flex flex-col">
        <PrivkeyInput></PrivkeyInput>
        {/* <input */}
        {/*   className={twJoin( */}
        {/*     "w-full rounded-md border border-secondary text-secondary px-4 py-2 cursor-pointer", */}
        {/*     "hover:bg-secondary/5 focus:bg-secondary/10 transition-colors", */}
        {/*   )} */}
        {/*   type="submit" */}
        {/*   value="Login" */}
        {/* /> */}
        <OutlineButton variant="success" type="submit">
          <LogInIcon />
          Login
        </OutlineButton>
      </form>
    </div>
  );
}
