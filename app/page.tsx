import ArticleList from "./ArticleList";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <ArticleList />

      <button className="self-center my-5 w-20 border-2 border-orange-600 rounded-md px-3 py-1 text-orange-600 ml-2 hover:bg-orange-600 hover:text-white">
        more
      </button>
    </div>
  );
}
