import { themes } from "@/components/navbar/themes";
import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { twJoin } from "tailwind-merge";

export default function ThemeSelect() {
	const [theme, setTheme] = React.useState(themes[0]);

	React.useEffect(() => {
		const dataTheme = document.documentElement.dataset.mode;
		setTheme(themes.find((t) => t.name === dataTheme) ?? themes[0]);
	}, [setTheme]);

	return (
		<div>
			<label htmlFor="theme-btn" className="text-2xl">
				Preferred Theme
			</label>
			<div
				className={twJoin(
					"relative bg-surface2 rounded-lg",
					"focus-within:ring-2 ring-primary relative",
				)}
			>
				<span className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
					{theme.icon}
				</span>
				<select
					name="theme-btn"
					id="theme-btn"
					className={twJoin(
						"w-full bg-inherit flex-grow appearance-none",
						"outline-none pl-10 py-2.5 pr-4 rounded-lg",
					)}
					value={theme.name}
					onChange={(e) => {
						document.documentElement.dataset.mode = e.target.value;
						setTheme(
							themes.find((t) => t.name === e.target.value) ?? themes[0],
						);
					}}
				>
					{themes.map((theme) => (
						<option key={theme.name} value={theme.name} data-icon={theme.icon}>
							{theme.name}
						</option>
					))}
				</select>
				<span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
					<ChevronDownIcon className="w-5 h-5" />
				</span>
			</div>
		</div>
	);
}
