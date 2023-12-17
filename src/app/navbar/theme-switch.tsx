"use client";

import { Menu, Transition } from "@headlessui/react";
import { themes } from "@/utils/themes";
import React from "react";
import { twJoin } from "tailwind-merge";
import { RoundButton } from "@/components/buttons";
import { handleThemeToggle } from "@/utils/fns/theme";

export default function ThemeSwitch() {
	const [theme, setTheme] = React.useState(themes[0]);

	React.useEffect(() => {
		const mode = document.documentElement.dataset.mode;
		setTheme(themes.find((t) => t.name === mode) || themes[0]);
	}, [setTheme]);

	const toggleTheme = (theme: typeof themes[number]) => {
		handleThemeToggle(theme.name);
		setTheme(theme);
	};

	return (
		<div className="hidden ml-auto mr-6 lg:block">
			<Menu as="div" className="relative">
				{({ open }) => (
					<>
						<Menu.Button as="span">
							<RoundButton
								className={twJoin(
									open ? "bg-surface3" : "hover:bg-surface2",
									"[&>svg]:w-6 [&>svg]:h-6",
								)}
							>
								{theme.icon}
							</RoundButton>
						</Menu.Button>
						<Transition
							as={React.Fragment}
							enter="transition ease-out duration-100"
							enterFrom="transform opacity-0 scale-95"
							enterTo="transform opacity-100 scale-100"
							leave="transition ease-in duration-75"
							leaveFrom="transform opacity-100 scale-100"
							leaveTo="transform opacity-0 scale-95"
						>
							<Menu.Items
								className={twJoin(
									"absolute right-0 mt-2 w-56 origin-top-right bg-surface2 rounded-lg py-2",
								)}
							>
								<ul className="flex flex-col divide-y divide-surface3">
									{themes.map((t) => (
										<Menu.Item key={t.name}>
											{({ active }) => (
												<li
													onClick={() => toggleTheme(t)}
													onKeyDown={() => toggleTheme(t)}
													className={twJoin(
														"px-4 py-2 flex cursor-pointer gap-3",
														active && "bg-primary/10",
														theme.name === t.name && "text-primary bg-surface3",
													)}
												>
													{t.icon} {t.name}
												</li>
											)}
										</Menu.Item>
									))}
								</ul>
							</Menu.Items>
						</Transition>
					</>
				)}
			</Menu>
		</div>
	);
}
