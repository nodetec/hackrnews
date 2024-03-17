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
import clsx from "clsx";
import Markdown from "react-markdown";

export default function Preview() {
	const { editorValue, preview, fullscreen } = useEditor();

	if (!preview) return null;

	return (
		<div
			className={clsx("overflow-auto w-full border-l border-surface3 p-4", {
				"h-[75vh]": !fullscreen,
			})}
		>
			<Markdown className="prose dark:prose-invert">{editorValue}</Markdown>
		</div>
	);
}
