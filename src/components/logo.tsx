import { silkScreen } from "@/utils/fonts";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

export default function Logo() {
  return (
    <Link href="/">
      <h1
        className={twJoin(
          "text-3xl uppercase",
          silkScreen.className,
          // tourney.className,
        )}
      >
        <span className="text-primary">Hackr</span>news
      </h1>
    </Link>
  );
}
