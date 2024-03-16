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

import { useCallback } from "react";
import { useLocalStorage } from "usehooks-ts";

const defaultSettings = {
	vimMode: false,
	preview: true,
	horizntalPreview: true,
  fullscreen: false,
};

const useEditorSettings = () => {
	const [settings, setSettings] = useLocalStorage(
		"HACKRNEWS_SETTINGS",
		defaultSettings,
		{
			initializeWithValue: false,
		},
	);

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
    getSetting,
		toggleSetting,
	};
};

export default useEditorSettings;
