import { themes } from "@/utils/themes";
import { twJoin } from "tailwind-merge";
import ThemeInput from "./theme-input";

// TODO: This componnent needs to implement the following:
// - Add a cookie when toggled (default is wide)
// - feed needs to be rendered accordingly, srr preferably

export default function ThemeToggler() {
	return (
		<div>
			<fieldset>
				<legend className="text-2xl mb-2">Theme</legend>
				<div className="flex gap-2 justify-around">
					{themes.map((theme) => (
						<label
							key={theme.name}
							htmlFor={theme.name}
							className={twJoin(
								"inline-flex flex-col items-center justify-center",
								"bg-surface1 shadow cursor-pointer select-none",
								"w-20 p-2 rounded-lg",
								"focus-within:ring-2 ring-primary hover:bg-primary/5",
								//Checked styles
								"[&:has(input:checked)]:bg-primary/20",
							)}
						>
							<span className="[&>svg]:w-6 [&>svg]:h-6">{theme.icon}</span>
							<span className="text-sm mt-4">{theme.name}</span>

							<ThemeInput themeName={theme.name}/>
						</label>
					))}
				</div>
			</fieldset>
		</div>
	);
}

