import { BasicSetupOptions } from "@uiw/react-codemirror";
import { useLocalStorage } from "usehooks-ts";

const defaultOptions = {
  lineNumbers: false,
	foldGutter: false,
  highlightActiveLine: true,
  highlightActiveLineGutter: true,
  autocompletion: true,
} satisfies BasicSetupOptions;

const useEditorOptions = () => {
	const [options, setOptions] = useLocalStorage(
		"HACKRNEWS_EDITOR_OPTIONS",
		defaultOptions,
	);

	function toggleOption(option: keyof typeof defaultOptions) {
		if (typeof defaultOptions[option] === "boolean") {
			setOptions((current) => ({ ...current, [option]: !current[option] }));
		}
	}

	return {
		options,
		toggleOption,
	};
};

export default useEditorOptions;
