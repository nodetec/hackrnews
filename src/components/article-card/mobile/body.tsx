import displayTags from "@components/displayTags";
import { ArticleCardProps } from "..";

export default function Body(props: ArticleCardProps) {
  return (
    <div className="mt-2">
      <h3 className="line-clamp-3 text-justify lg:text-left">{props.title}</h3>
      {props.tags && props.tags.length > 0 && (
        <div className="mt-2 flex justify-end gap-1">
          {displayTags(props.tags, 3)}
        </div>
      )}
    </div>
  );
}

