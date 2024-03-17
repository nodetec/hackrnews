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

export default function Titlebar() {
	const { toggleSetting } = useEditor();

	return (
		<div className="flex items-center gap-2 p-2">
			<button
				className="w-3 h-3 rounded-full bg-discreetText/50 hover:bg-error"
				onClick={() => toggleSetting("fullscreen")}
			/>
			<button
				className="w-3 h-3 rounded-full bg-discreetText/50 hover:bg-warn"
				onClick={() => toggleSetting("fullscreen")}
			/>
			<button
				className="w-3 h-3 rounded-full bg-discreetText/50 hover:bg-success"
				onClick={() => toggleSetting("fullscreen")}
			/>
		</div>
	);
}
