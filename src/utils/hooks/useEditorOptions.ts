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

import { BasicSetupOptions } from "@uiw/react-codemirror";
import { useLocalStorage } from "usehooks-ts";

const defaultOptions = {
  lineNumbers: false,
	foldGutter: false,
  highlightActiveLine: true,
  highlightActiveLineGutter: true,
  autocompletion: true,
} satisfies BasicSetupOptions;

const useEditorOptions = () => {
	const [options, setOptions] = useLocalStorage(
		"HACKRNEWS_EDITOR_OPTIONS",
		defaultOptions,
	);

	function toggleOption(option: keyof typeof defaultOptions) {
		if (typeof defaultOptions[option] === "boolean") {
			setOptions((current) => ({ ...current, [option]: !current[option] }));
		}
	}

	return {
		options,
		toggleOption,
	};
};

export default useEditorOptions;
