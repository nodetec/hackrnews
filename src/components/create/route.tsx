"use client";

import { IRoute } from "@/utils/routes/types";
import { twJoin } from "tailwind-merge";
import { useModalRefStore } from "@/stores/modal";
import { Button } from "@/ui/buttons";
import { useRouter } from "next/navigation";

interface IRouteProps extends IRoute {}

export default function Route({ path, name, accent, Icon }: IRouteProps) {
	const router = useRouter();
	const { modalRef } = useModalRefStore();

	function handleNavigate(to: string) {
		router.push(to);

		if (modalRef && modalRef.current && modalRef.current.open) {
			modalRef.current.close();
		}
	}

	return (
		<Button
			onClick={() => handleNavigate(path)}
			className={twJoin(
				accent,
				"flex items-center flex-1 p-6 rounded-xl gap-6 font-bold",
			)}
		>
			{Icon}
			<span>{name}</span>
		</Button>
	);
}
