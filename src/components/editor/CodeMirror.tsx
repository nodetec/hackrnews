"use client";

import { useEditor } from "@/providers/editor";

export default function CodeMirror() {
	const { editorRef } = useEditor();

	return (
		<div className="flex-1 overflow-auto">
			<div
				ref={editorRef}
				className="h-screen max-h-[70vh]"
			/>
		</div>
	);
}
