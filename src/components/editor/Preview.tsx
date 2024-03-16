"use client";

import { useEditor } from "@/providers/editor";
import ReactMarkdown from "react-markdown";

export default function Preview() {
	const { editorValue } = useEditor();

	return (
		<ReactMarkdown className="prose dark:prose-invert flex-1 p-4 border-l border-black/10 dark:ring-white/10">
			{editorValue}
		</ReactMarkdown>
	);
}
