import { Votes } from "./vote-btns";

export default function ArticleSidebar({
  postNr,
  upvotes,
  downvotes,
}: {
  postNr: number;
  upvotes: number;
  downvotes: number;
}) {
  return (
    <div className="flex flex-col h-full justify-between w-24 items-center p-1">
      <h1 className="lg:text-xl xl:text-3xl text-primary font-extrabold">
        #{postNr}
      </h1>

      {/* TODO: this will be like radio buttons */}
      <Votes upvotes={upvotes} downvotes={downvotes} />
    </div>
  );
}

