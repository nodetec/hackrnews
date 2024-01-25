import { Button } from "@/ui/buttons";
import { routes } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twJoin } from "tailwind-merge";

export default function MenuLinks({
  closeHandler,
}: {
  closeHandler: () => void;
}) {
  const pathname = usePathname();
  return (
    <div className="flex flex-col gap-2 focus-within:ring-primary">
      {routes.map((route) => (
        <Link href={route.path} key={route.name}>
          <Button
            onClick={closeHandler}
            tabIndex={-1}
            flat
            className={twJoin(
              "justify-start gap-3",
              "active:bg-primary/30",
              pathname === route.path &&
              "underline underline-offset-2 decoration-primary decoration-4",
            )}
          >
            {route.icon}
            {route.name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
