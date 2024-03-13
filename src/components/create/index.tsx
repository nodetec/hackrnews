import { CREATE_ROUTES } from "@/utils/routes/create";
import Link from "next/link";
import { twJoin } from "tailwind-merge";

export default function Create() {
	return (
		<>
			<h2 className="text-center text-xl font-bold">What do you wanna create?</h2>
			<div className="flex flex-col max-w-md items-stretch gap-2 p-6 mx-auto">
				{CREATE_ROUTES.map(({ path, name, accent, Icon }) => (
					<Link
						key={name}
            href={path}
						className={twJoin(accent, "flex items-center flex-1 p-6 rounded-xl gap-6 font-bold")}
					>
						{Icon}
						<span>{name}</span>
					</Link>
				))}
			</div>
		</>
	);
}
