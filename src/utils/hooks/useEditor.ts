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

import { historyField } from "@codemirror/commands";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { vim } from "@replit/codemirror-vim";
import { MutableRefObject, useCallback, useEffect, useMemo } from "react";
import { Extension, ViewUpdate, useCodeMirror } from "@uiw/react-codemirror";
import { useLocalStorage } from "usehooks-ts";
import EDITOR_DEFAULT_VALUE from "@/utils/editor";
import useEditorTheme from "@/utils/hooks/useEditorTheme";
import useEditorOptions from "@/utils/hooks/useEditorOptions";
const stateFields = { history: historyField };
const mdExt = markdown({ base: markdownLanguage, codeLanguages: languages });

const useEditor = (ref: MutableRefObject<HTMLDivElement | null>) => {
	const { themeName, themes, themeNames, setThemeName } = useEditorTheme();
	const { options, toggleOption } = useEditorOptions();
	const [editorState, setEditorState] = useLocalStorage(
		"HACKRNEWS_EDITOR_STATE",
		undefined,
		{
			deserializer: (value) => ({
				json: JSON.parse(value),
				fields: stateFields,
			}),
		},
	);
	const [editorValue, setEditorValue] = useLocalStorage(
		"HACKRNEWS_EDITOR_VALUE",
		EDITOR_DEFAULT_VALUE,
	);
	const [vimMode, setVimMode] = useLocalStorage("HACKRNEWS_VIM_MODE", false);

	const extensions = useMemo(() => {
		const exts: Extension[] = [mdExt];
		return vimMode ? [vim(), ...exts] : exts;
	}, [vimMode]);

	const onChange = useCallback(
		(val: string, viewUpdate: ViewUpdate) => {
			setEditorValue(val);

			const state = viewUpdate.state.toJSON(stateFields);
			setEditorState(state);
		},
		[setEditorValue, setEditorState],
	);

	const { setContainer } = useCodeMirror({
		container: ref.current,
		initialState: editorState,
		extensions,
		value: editorValue,
		theme: themes[themeName],
		onChange,
		basicSetup: options,
	});

	const toggleVimMode = () => {
		setVimMode((current) => !current);
	};

	useEffect(() => {
		if (ref.current) {
			setContainer(ref.current);
		}
	}, [ref, setContainer]);

	return {
		vimMode,
		toggleVimMode,
		editorValue,
		themeName,
		themeNames,
		setThemeName,
    toggleOption,
	};
};

export default useEditor;
