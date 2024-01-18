import displayTags from "@components/displayTags";
import { ArticleCardProps } from "..";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Body(props: ArticleCardProps) {
  return (
    <div className="mt-2">
      <h3 className="line-clamp-3 text-justify lg:text-left text-md">
        {props.title}
      </h3>

      <Link href={"#"} className="text-sm line-clamp-1 my-2 text-link">
        <LinkIcon className="w-3 h-3 inline-block mr-1" />
        {props.relay}
      </Link>
      {props.tags && props.tags.length > 0 && (
        <div className="mt-2 flex justify-end gap-1">
          {displayTags(props.tags, 3)}
        </div>
      )}
    </div>
  );
}
