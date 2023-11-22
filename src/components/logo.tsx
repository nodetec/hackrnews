import { pixelify, tourney } from "@/ui/fonts";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

export default function Logo() {
  return (
    <Link href="/">
      <h1
        className={twJoin(
          "text-3xl align-top uppercase",
          // tourney.className,
          pixelify.className,
        )}
      >
        <span className="text-primary">Hackr</span>news
      </h1>
    </Link>
  );
}
