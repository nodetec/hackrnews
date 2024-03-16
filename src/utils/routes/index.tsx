/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of Hackr News.
 *
 * Hackr News is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Hackr News is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Hackr News. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * chris.machine@pm.me
 */

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
