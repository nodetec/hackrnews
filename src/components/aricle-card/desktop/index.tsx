import displayTags from "@/components/displayTags";
import { ArticleCardProps } from "..";
import ArticleSidebar from "./article-sidebar";
import ActionBar from "./action-bar";
import { EyeIcon } from "lucide-react";
import { nFormatter } from "@/utils/fns/number-formatter";
import Image from "next/image";
import { Button } from "@/ui/buttons";

export default function DesktopCard(props: ArticleCardProps) {
  return (
    <div className="hidden lg:flex gap-2">
      <div className="grow-0 bg-surface1 rounded-l-xl shadow">
        <ArticleSidebar
          postNr={props.postNr}
          downvotes={props.downvotes}
          upvotes={props.upvotes}
        />
      </div>

      <div className="grow-1 w-full flex flex-col gap-1">
        <div className="flex gap-3 items-center">
          <Button
            className="text-info flex items-center gap-1 px-1 text-sm normal-case"
            flat
          >
            <Image
              alt={"avatar of " + props.author}
              width={30}
              height={30}
              className="rounded-full"
              src={
                "https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=" +
                props.author.split(" ").join("+")
              }
            />
            <span>{props.author}</span>
          </Button>

          <h5 className="text-sm font-bold text-discreetText">{props.date}</h5>

          <div className="inline-flex gap-1 items-center ml-auto text-discreetText">
            <EyeIcon className="w-4 h-4 inline" />
            <span className="text-sm align-bottom">
              {nFormatter(props.views)}
            </span>
          </div>

        </div>
        <div className="text-xl line-clamp-2">{props.title}</div>

        {props.tags && props.tags.length > 0 && (
          <div className="space-x-2 flex justify-end">
            {displayTags(props.tags, 5)}
          </div>
        )}

        <div className="mt-auto">
          <ActionBar {...props} />
        </div>
      </div>
    </div>
  );
}
