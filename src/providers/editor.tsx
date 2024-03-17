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

import { historyField } from "@codemirror/commands";
import { ViewUpdate, useCodeMirror } from "@uiw/react-codemirror";
import { useDebounceCallback, useLocalStorage } from "usehooks-ts";
import EDITOR_DEFAULT_VALUE from "@/utils/editor";
import useEditorTheme from "@/utils/hooks/useEditorTheme";
import useEditorOptions from "@/utils/hooks/useEditorOptions";
import {
	ElementRef,
	MutableRefObject,
	ReactNode,
	createContext,
	useCallback,
	useContext,
	useEffect,
	useRef,
} from "react";
import useEditorSettings from "@/utils/hooks/useEditorSettings";

const stateFields = { history: historyField };

interface IEditorContext
	extends ReturnType<typeof useEditorTheme>,
		Omit<ReturnType<typeof useEditorSettings>, "extensions">,
		ReturnType<typeof useEditorOptions> {
	editorRef: MutableRefObject<HTMLDivElement | null>;
	editorValue: string;
}

const EditorContext = createContext<IEditorContext | null>(null);

const EditorProvider = ({ children }: { children: ReactNode }) => {
	const editorRef = useRef<ElementRef<"div"> | null>(null);
	const editorTheme = useEditorTheme();
	const editorOptions = useEditorOptions();
	const { extensions, ...editorSettings } = useEditorSettings();
	const [editorState, setEditorState] = useLocalStorage(
		"HACKRNEWS_EDITOR_STATE",
		undefined,
		{
			initializeWithValue: false,
			deserializer: (value) => ({
				json: JSON.parse(value),
				fields: stateFields,
			}),
		},
	);
	const [editorValue, setEditorValue] = useLocalStorage(
		"HACKRNEWS_EDITOR_VALUE",
		EDITOR_DEFAULT_VALUE,
		{
			initializeWithValue: false,
		},
	);
	const currentTheme = editorTheme.themes[editorTheme.themeName];

	const onChange = useCallback(
		(val: string, viewUpdate: ViewUpdate) => {
			setEditorValue(val);

			const state = viewUpdate.state.toJSON(stateFields);
			setEditorState(state);
		},
		[setEditorValue, setEditorState],
	);
	const debouncedOnChangeCallback = useDebounceCallback(onChange, 500);

	const { setContainer } = useCodeMirror({
		container: editorRef.current,
		initialState: editorState,
		extensions,
		value: editorValue,
		theme: currentTheme,
		onChange: debouncedOnChangeCallback,
		basicSetup: editorOptions.options,
	});

	/* useEffect(() => {
		return view?.destroy;
	}, [view]); */

	useEffect(() => {
		if (editorRef.current) {
			setContainer(editorRef.current);
		}
	}, [editorRef, setContainer]);

	return (
		<EditorContext.Provider
			value={{
				editorRef,
				editorValue,
				...editorTheme,
				...editorSettings,
				...editorOptions,
			}}
		>
			{children}
		</EditorContext.Provider>
	);
};

export const useEditor = () => {
	const context = useContext(EditorContext);

	if (!context) {
		throw new Error("useEditor should be used inside of EditorProvider");
	}

	return context;
};

export default EditorProvider;
