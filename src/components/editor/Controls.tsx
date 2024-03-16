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

"use client";

import { useEditor } from "@/providers/editor";
import { Button } from "@/ui/buttons";

export default function Controls() {
	const {
		themeName,
		setThemeName,
		themeNames,
		getOption,
		toggleOption,
		getSetting,
		toggleSetting,
	} = useEditor();

	return (
		<div className="flex items-center gap-4">
			<Button
				variant={getOption("lineNumbers") ? "primary" : "ghost"}
				onClick={() => toggleOption("lineNumbers")}
			>
				toggle lineNumbers
			</Button>
			<Button
				variant={getSetting("vimMode") ? "primary" : "ghost"}
				onClick={() => toggleSetting("vimMode")}
			>
				toggle VimMode
			</Button>

			<Button
				variant={getSetting("preview") ? "primary" : "ghost"}
				onClick={() => toggleSetting("preview")}
			>
				toggle Preview
			</Button>
			<Button
				variant={getSetting("fullscreen") ? "primary" : "ghost"}
				onClick={() => toggleSetting("fullscreen")}
			>
				toggle Fullscreen
			</Button>
			<select
				value={themeName}
				onChange={(e) => setThemeName(e.target.value as typeof themeName)}
			>
				{themeNames.map((theme) => (
					<option key={theme} value={theme}>
						{theme}
					</option>
				))}
			</select>
		</div>
	);
}
