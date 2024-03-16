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

import hackrNews from "@/utils/editor/theme";
import { vscodeDark } from "@uiw/codemirror-theme-vscode";
import { abcdef } from "@uiw/codemirror-theme-abcdef";
import { abyss } from "@uiw/codemirror-theme-abyss";
import { androidstudio } from "@uiw/codemirror-theme-androidstudio";
import { andromeda } from "@uiw/codemirror-theme-andromeda";
import { atomone } from "@uiw/codemirror-theme-atomone";
import { aura } from "@uiw/codemirror-theme-aura";
import { bbedit } from "@uiw/codemirror-theme-bbedit";
import { basicDark, basicLight } from "@uiw/codemirror-theme-basic";
import { copilot } from "@uiw/codemirror-theme-copilot";
import { bespin } from "@uiw/codemirror-theme-bespin";
import { consoleLight, consoleDark } from "@uiw/codemirror-theme-console";
import { dracula } from "@uiw/codemirror-theme-dracula";
import { darcula } from "@uiw/codemirror-theme-darcula";
import { duotoneLight, duotoneDark } from "@uiw/codemirror-theme-duotone";
import { eclipse } from "@uiw/codemirror-theme-eclipse";
import { githubLight, githubDark } from "@uiw/codemirror-theme-github";
import { gruvboxLight, gruvboxDark } from "@uiw/codemirror-theme-gruvbox-dark";
import { materialLight, materialDark } from "@uiw/codemirror-theme-material";
import { monokai } from "@uiw/codemirror-theme-monokai";
import { monokaiDimmed } from "@uiw/codemirror-theme-monokai-dimmed";
import { kimbie } from "@uiw/codemirror-theme-kimbie";
import { noctisLilac } from "@uiw/codemirror-theme-noctis-lilac";
import { nord } from "@uiw/codemirror-theme-nord";
import { okaidia } from "@uiw/codemirror-theme-okaidia";
import { quietlight } from "@uiw/codemirror-theme-quietlight";
import { red } from "@uiw/codemirror-theme-red";
import { solarizedLight, solarizedDark } from "@uiw/codemirror-theme-solarized";
import { sublime } from "@uiw/codemirror-theme-sublime";
import { tokyoNight } from "@uiw/codemirror-theme-tokyo-night";
import { tokyoNightStorm } from "@uiw/codemirror-theme-tokyo-night-storm";
import { tokyoNightDay } from "@uiw/codemirror-theme-tokyo-night-day";
import { tomorrowNightBlue } from "@uiw/codemirror-theme-tomorrow-night-blue";
import { whiteLight, whiteDark } from "@uiw/codemirror-theme-white";
import { xcodeLight, xcodeDark } from "@uiw/codemirror-theme-xcode";

import {
	birdsOfParadise,
	ayuLight,
	amy,
	barf,
	clouds,
	cobalt,
	smoothy,
	coolGlow,
	espresso,
	tomorrow,
	boysAndGirls,
	rosePineDawn,
} from "thememirror";
import { useLocalStorage } from "usehooks-ts";

const themes = {
	"Hackr News": hackrNews,
	"Birds Of Paradise": birdsOfParadise,
	"Ayu Light": ayuLight,
	Amy: amy,
	Barf: barf,
	Bespin: bespin,
	Clouds: clouds,
	Cobalt: cobalt,
	Dracula: dracula,
	Smoothy: smoothy,
	"Cool Glow": coolGlow,
	Espresso: espresso,
	Tomorrow: tomorrow,
	"Noctis Lilac": noctisLilac,
	"Boys And Girls": boysAndGirls,
	"Rose Pine Dawn": rosePineDawn,
	"VSCode Dark": vscodeDark,
	Abcdef: abcdef,
	Abyss: abyss,
	"Android Studio": androidstudio,
	Andromeda: andromeda,
	Atomone: atomone,
	Aura: aura,
	Bbedit: bbedit,
	"Basic Dark": basicDark,
	"Basic Light": basicLight,
	Copilot: copilot,
	"Console Light": consoleLight,
	"Console Dark": consoleDark,
	Darcula: darcula,
	"Duotone Light": duotoneLight,
	"Duotone Dark": duotoneDark,
	Eclipse: eclipse,
	"Github Light": githubLight,
	"Github Dark": githubDark,
	"Gruvbox Light": gruvboxLight,
	"Gruvbox Dark": gruvboxDark,
	"Material Light": materialLight,
	"Material Dark": materialDark,
	Monokai: monokai,
	"Monokai Dimmed": monokaiDimmed,
	Kimbie: kimbie,
	Nord: nord,
	Okaidia: okaidia,
	Quietlight: quietlight,
	Red: red,
	"Solarized Light": solarizedLight,
	"Solarized Dark": solarizedDark,
	Sublime: sublime,
	"Tokyo Night": tokyoNight,
	"Tokyo Night Storm": tokyoNightStorm,
	"Tokyo Night Day": tokyoNightDay,
	"Tomorrow Night Blue": tomorrowNightBlue,
	"White Light": whiteLight,
	"White Dark": whiteDark,
	"Xcode Light": xcodeLight,
	"Xcode Dark": xcodeDark,
};

const themeNames = Object.keys(themes).toSorted();

const defaultTheme = "Hackr News" as keyof typeof themes;

export default function useEditorTheme() {
	const [themeName, setThemeName] = useLocalStorage(
		"HACKRNEWS_EDITOR_THEME",
		defaultTheme,
	);

	return {
		themes,
		themeNames,
    themeName,
    setThemeName,
    defaultTheme,
	};
}
