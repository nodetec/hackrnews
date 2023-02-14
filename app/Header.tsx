// import PostButton from "./PostButton";
import Logo from "./Logo";

const Header = () => {
  return (
    <header className="bg-white z-30 top-0 w-full left-0 right-0 border-b border-b-light-gray md:mx-0 py-3">
      <nav>
        <div className="flex items-center justify-between w-full gap-4 flex-col sm:flex-row">
          <div className="flex flex-row items-center justify-start">
            <Logo />
          </div>
          <div className="hidden sm:flex gap-4 items-center border border-gray-700 py-1 px-2 rounded-md">
            Post
            {/* <PostButon /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
