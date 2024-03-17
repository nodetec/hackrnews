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

import { useCallback, useMemo } from "react";
import { useLocalStorage } from "usehooks-ts";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";
import { Extension } from "@uiw/react-codemirror";
import { vim } from "@replit/codemirror-vim";
import { lineNumbersRelative } from "@uiw/codemirror-extensions-line-numbers-relative";

const mdExt = markdown({ base: markdownLanguage, codeLanguages: languages });

const defaultSettings = {
	vimMode: false,
	preview: true,
	fullscreen: false,
	relativenumber: false,
};

const useEditorSettings = () => {
	const [settings, setSettings] = useLocalStorage(
		"HACKRNEWS_SETTINGS",
		defaultSettings,
		{
			initializeWithValue: false,
		},
	);

	const { vimMode, relativenumber } = settings;

	const extensions = useMemo(() => {
		const exts: Extension[] = [mdExt];
		if (vimMode) exts.unshift(vim());
		if (relativenumber) exts.unshift(lineNumbersRelative);
		return exts;
	}, [vimMode, relativenumber]);

	const toggleSetting = useCallback(
		(setting: keyof typeof defaultSettings) => {
			if (typeof defaultSettings[setting] === "boolean") {
				setSettings((current) => ({
					...current,
					[setting]: !current[setting],
				}));
			}
		},
		[setSettings],
	);

	const getSetting = useCallback(
		(setting: keyof typeof defaultSettings) => {
			return settings[setting];
		},
		[settings],
	);

	return {
		...settings,
		extensions,
		getSetting,
		toggleSetting,
	};
};

export default useEditorSettings;
