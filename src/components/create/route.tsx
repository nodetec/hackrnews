/**
 * Sovereign Computing For a Brighter Future
 * Copyright (C) 2024 Nodetec.co
 *
 * This file is part of HackrNews.
 *
 * HackrNews is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * HackrNews is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with HackrNews. If not, see <https://www.gnu.org/licenses/>.
 *
 * Contact information:
 * luis..f.carvalho20+hackrnews@gmail.com
 */

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
