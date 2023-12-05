import { twJoin, twMerge } from "tailwind-merge";

export default function Switch({
	label,
	className,
}: {
	label: string;
	className?: string;
}) {
	return (
		<div
			className={twMerge(
				"space-x-2 disabled:opacity-40 pointer-events-none",
				className,
			)}
		>
			<label className="relative inline-flex cursor-pointer items-center">
				<input id="switch-3" type="checkbox" className="peer sr-only" />
				<label htmlFor="switch-3" className="hidden">
					Enable this relay
				</label>
				<div
					className={twJoin(
						"peer h-2 w-10 rounded border dark:border-black bg-slate-300 dark:bg-neutral-700 after:absolute",
						"after:-top-1.5 after:left-0 after:h-5 after:w-5 after:rounded-md after:border",
						"after:border-surface3 dark:after-border-black after:bg-white dark:after:bg-neutral-500",
						"after:transition-all after:content-[''] peer-checked:after:bg-success",
						"peer-checked:after:translate-x-full peer-focus:ring-secundary",
						"peer-disabled:opacity-40 peer-disabled:cursor-not-allowed pointer-events-auto",
					)}
				/>
			</label>
			<label className="text-sm font-thin text-discreetText pointer-events-none">
				{label}
			</label>
		</div>
	);
}
