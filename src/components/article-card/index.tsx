import DesktopCard from "./desktop";
import MobileCard from "./mobile";

export type ArticleCardProps = {
  postNr: number;
  title: string;
  date: string;
  author: string;
  relay: string;
  views: number;
  upvotes: number;
  downvotes: number;
  comments?: number;
  sats: number;
  tags: string[];
};

export default function ArticleCard(props: ArticleCardProps) {
  return (
    <div className="p-2 w-full">
      <MobileCard {...props} />
      <DesktopCard {...props} />
    </div>
  );
}
