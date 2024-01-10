import { Button } from "@/ui/buttons";
import { nFormatter } from "@/utils/fns/number-formatter";
import {
  EyeIcon,
  LinkIcon,
  MessagesSquareIcon,
  UserIcon,
  ZapIcon,
} from "lucide-react";
import { ArticleCardProps } from "..";
import { twJoin } from "tailwind-merge";

export default function ActionBar(props: ArticleCardProps) {
  return (
    <div className="flex gap-4 items-center ">
      {/* <Button */}
      {/*   flat */}
      {/*   className="text-ellipsis overflow-hidden whitespace-nowrap lowercase text-md text-info" */}
      {/* > */}
      {/*   <UserIcon /> */}
      {/*   {props.author} */}
      {/* </Button> */}
      {/**/}
      {/* <span className="font-bold text-discreetText">{props.date}</span> */}
      {/**/}
      {/* <span className="flex gap-2"> */}
      {/*   <EyeIcon /> */}
      {/*   {nFormatter(props.views)} */}
      {/* </span> */}

      <Button flat>
        <MessagesSquareIcon />
        {nFormatter(props.comments || 0)}
      </Button>

      <Button flat>
        <ZapIcon className="text-warn" />
        {nFormatter(props.sats)}
      </Button>

      <Button flat>
        <LinkIcon className="w-5 h-5" />
        <span
          className={twJoin(
            "text-ellipsis overflow-hidden whitespace-nowrap lowercase",
            "lg:max-w-60 xl:max-w-96 underline underline-offset-2 decoration-primary/50 decoration-2",
          )}
        >
          {props.relay}
        </span>
      </Button>
    </div>
  );
}
