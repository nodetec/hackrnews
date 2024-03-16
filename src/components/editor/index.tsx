import Controls from "./Controls";
import Preview from "./Preview";
import EditorProvider from "@/providers/editor";
import CodeMirror from "./CodeMirror";

export default function Editor() {
	return (
		<EditorProvider>
			<div>
				<Controls />
				<div className="flex rounded-lg bg-surface1 float-border">
					<CodeMirror />
					<Preview />
				</div>
			</div>
		</EditorProvider>
	);
}
