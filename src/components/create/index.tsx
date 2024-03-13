import { CREATE_ROUTES } from "@/utils/routes/create";
import Route from "./route";

export default function Create() {
	return (
		<>
			<h2 className="text-center text-xl font-bold">
				What do you wanna create?
			</h2>
			<div className="flex flex-col max-w-md items-stretch gap-2 p-6 mx-auto">
				{CREATE_ROUTES.map((route) => (
					<Route key={route.name} {...route} />
				))}
			</div>
		</>
	);
}
