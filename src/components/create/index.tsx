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

import { CREATE_ROUTES } from "@/utils/routes/create";
import Route from "./route";

export default function Create() {
	return (
		<>
			<h2 className="text-center text-xl font-bold">
				What do you wanna create?
			</h2>
			<div className="grid grid-cols-1 lg:grid-cols-2 max-w-md items-stretch gap-2 p-6 mx-auto">
				{CREATE_ROUTES.map((route) => (
					<Route key={route.name} {...route} />
				))}
			</div>
		</>
	);
}
