"use client";

import useEditor from "@/utils/hooks/useEditor";
import { ElementRef, useRef } from "react";

export default function Page() {
	const editorRef = useRef<ElementRef<"div"> | null>(null);
	const { toggleVim } = useEditor(editorRef);

	return (
		<div>
			<button onClick={toggleVim}>vim</button>
			<div
				className="float-border overflow-auto bg-surface1 h-screen min-h-[10rem] max-h-[70vh]"
				ref={editorRef}
			/>
		</div>
	);
}
