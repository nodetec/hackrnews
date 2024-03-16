"use client";

import { useEditor } from "@/providers/editor";

export default function CodeMirror() {
	const { editorRef } = useEditor();

	return (
		<div className="float-border flex-1 overflow-auto bg-surface1 rounded-md">
			<div
				ref={editorRef}
				className="h-screen max-h-[70vh]"
			/>
		</div>
	);
}
