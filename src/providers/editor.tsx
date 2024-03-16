"use client";

import { historyField } from "@codemirror/commands";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { vim } from "@replit/codemirror-vim";
import { Extension, ViewUpdate, useCodeMirror } from "@uiw/react-codemirror";
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
	useMemo,
	useRef,
} from "react";

const stateFields = { history: historyField };
const mdExt = markdown({ base: markdownLanguage, codeLanguages: languages });

interface IEditorContext
	extends ReturnType<typeof useEditorTheme>,
		ReturnType<typeof useEditorOptions> {
	editorRef: MutableRefObject<HTMLDivElement | null>;
	editorValue: string;
	vimMode: boolean;
	toggleVimMode: () => void;
}

const EditorContext = createContext<IEditorContext | null>(null);

const EditorProvider = ({ children }: { children: ReactNode }) => {
	const editorRef = useRef<ElementRef<"div"> | null>(null);
	const editorTheme = useEditorTheme();
	const editorOptions = useEditorOptions();
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
	const debouncedOnChangeCallback = useDebounceCallback(onChange, 500);

	const { setContainer } = useCodeMirror({
		container: editorRef.current,
		initialState: editorState,
		extensions,
		value: editorValue,
		theme: editorTheme.themes[editorTheme.themeName],
		onChange: debouncedOnChangeCallback,
		basicSetup: editorOptions.options,
	});

	const toggleVimMode = useCallback(() => {
		setVimMode((current) => !current);
	}, [setVimMode]);

	useEffect(() => {
		if (editorRef.current) {
			setContainer(editorRef.current);
		}
	}, [editorRef, setContainer]);

	return (
		<EditorContext.Provider
			value={{
				editorRef,
				vimMode,
				toggleVimMode,
				editorValue,
				...editorTheme,
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
