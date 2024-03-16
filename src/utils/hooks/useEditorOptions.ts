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
import { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

const defaultOptions = {
	lineNumbers: false,
	foldGutter: false,
	highlightActiveLine: true,
	highlightActiveLineGutter: true,
	autocompletion: true,
	tabSize: 2,
} satisfies BasicSetupOptions;

const useEditorOptions = () => {
	const [options, setOptions] = useLocalStorage(
		"HACKRNEWS_EDITOR_OPTIONS",
		defaultOptions,
	);

	const toggleOption = useCallback(
		(option: keyof typeof defaultOptions) => {
			if (typeof defaultOptions[option] === "boolean") {
				setOptions((current) => ({ ...current, [option]: !current[option] }));
			}
		},
		[setOptions],
	);

	const setTabSize = useCallback(
		(n: number) => {
			setOptions((current) => ({ ...current, tabSize: n }));
		},
		[setOptions],
	);

	const resetOptions = useCallback(() => {
		setOptions(defaultOptions);
	}, [setOptions]);

	return {
		options,
		toggleOption,
		resetOptions,
    setTabSize,
	};
};

export default useEditorOptions;
