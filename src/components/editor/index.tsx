import Controls from "./Controls";
import Preview from "./Preview";
import EditorProvider from "@/providers/editor";
import CodeMirror from "./CodeMirror";

export default function Editor() {
	return (
		<EditorProvider>
			<div>
				<Controls />
				<div className="flex">
					<CodeMirror />
					<Preview />
				</div>
			</div>
		</EditorProvider>
	);
}
