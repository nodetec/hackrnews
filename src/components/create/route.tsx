import { IRoute } from "@/utils/routes/types";
import { twJoin } from "tailwind-merge";
import Link from "next/link";

interface IRouteProps extends IRoute {}

export default function Route({ path, name, accent, Icon }: IRouteProps) {
	return (
		<Link
			href={path}
			className={twJoin(
				accent,
				"flex items-center flex-1 p-6 rounded-xl gap-3 lg:gap-6 font-bold justify-center",
				name === "Post" ? "lg:col-span-2 flex-row py-10" : "flex-col",
			)}
		>
			{Icon}
			<span className="text-lg">{name}</span>
		</Link>
	);
}
