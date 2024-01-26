import displayTags from "@/components/display-tags";
import { ArticleCardProps } from "..";
import { LinkIcon } from "lucide-react";
import Link from "next/link";

export default function Body(props: ArticleCardProps) {
  return (
    <div className="mt-2.5 space-y-3">
      <h3 className="line-clamp-3 text-justify lg:text-left text-lg">
        {props.title}
      </h3>

      <Link href={"#"} className="text line-clamp-1 text-link">
        <LinkIcon className="w-3.5 h-3.5 inline-block mr-1" />
        {props.relay}
      </Link>
      {props.tags && props.tags.length > 0 && (
        <div className="flex justify-end gap-1 pr-8">
          {displayTags(props.tags, 3)}
        </div>
      )}
    </div>
  );
}
