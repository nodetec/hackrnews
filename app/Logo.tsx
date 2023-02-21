import Link from "next/link";
import { FC } from "react";
// import { FaBlog } from "react-icons/fa";

const Logo: FC = () => (
  <Link className="text-xl md:text-2xl font-bold" href="/">
    <div className="flex flex-row">
      {/* <FaBlog size="25" /> */}
      <span className="">
        hackr<span className="text-orange-600">news</span>
      </span>
    </div>
  </Link>
);

export default Logo;
