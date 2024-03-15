"use client";

import { ElementRef, useEffect, useRef, useState } from "react";
import { EditorState } from "@codemirror/state";
import { EditorView, keymap } from "@codemirror/view";
import { vim } from "@replit/codemirror-vim";
import { defaultKeymap } from "@codemirror/commands";
import { Vim } from "@replit/codemirror-vim";
import sample from "./sample";
import { markdown } from "@codemirror/lang-markdown";
import theme from "./theme";

export default function Page() {
	const editor = useRef<ElementRef<"div"> | null>(null);
	const [vimMode, setVimMode] = useState(false);

	useEffect(() => {
		const extensions = [keymap.of(defaultKeymap), theme, markdown()];

		if (vimMode) {
			extensions.unshift(vim());
		}

		const startState = EditorState.create({
			doc: sample,
			extensions,
		});

		Vim.map("jj", "<Esc>", "insert");

		const view = new EditorView({
			state: startState,
			parent: editor.current!,
		});

		return () => {
			view.destroy();
		};
	}, [vimMode]);

	function toggleVim() {
		setVimMode((current) => !current);
	}

	return (
		<div>
			<button onClick={toggleVim}>vim</button>
			<div ref={editor} />
		</div>
	);
}
