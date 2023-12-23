import Actions from "./actions";
import Author from "./author";
import Body from "./body";
import Header from "./header";

export type ArticleCardProps = {
  postNr: number;
  title: string;
  // body: string;
  date: string;
  author: string;
  relay: string;
  views: number;
  upvotes: number;
  downvotes: number;
  comments: number;
  sats: number;
  tags: string[];
};

export default function ArticleCard(props: ArticleCardProps) {
  return (
    <div className="p-2">
      <Header {...props} />
      <Author {...props} />
      <Body {...props} />
      <Actions {...props} />
    </div>
  );
}
