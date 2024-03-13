import { Briefcase, Home, InfoIcon, MessageSquarePlusIcon } from "lucide-react";
import { IRoute } from "./types";

export const ROUTES = [
	{
		name: "Home",
		path: "/",
		accent: "bg-primary",
		Icon: <Home className="w-5 h-5 text-primary" strokeWidth={2} />,
	},
	{
		name: "Discussions",
		path: "/discussions",
		accent: "bg-info",
		Icon: (
			<MessageSquarePlusIcon className="w-5 h-5 text-info" strokeWidth={2} />
		),
	},
	{
		name: "Jobs",
		path: "/jobs",
		accent: "bg-success",
		Icon: <Briefcase className="w-5 h-5 text-success" strokeWidth={2} />,
	},
	{
		name: "About",
		path: "/about",
		accent: "bg-warn",
		Icon: <InfoIcon className="w-5 h-5 text-warn" strokeWidth={2} />,
	},
	{
		name: "Create",
		path: "/create",
		accent: "bg-primary",
		Icon: <InfoIcon className="w-5 h-5 text-error" strokeWidth={2} />,
	},
	// {
	//   name: "Login",
	//   path: "/login",
	//   icon: <UserIcon className="w-5 h-5 text-error" strokeWidth={2} />,
	// },
	// {
	//   name: "DHome",
	//   path: "/",
	//   color: "primary",
	//   icon: <Home className="w-5 h-5" strokeWidth={2} />,
	// },
] satisfies IRoute[];
