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

"use client";

import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import { RoundButton } from "@/ui/buttons";
import { XIcon } from "lucide-react";
import { ElementRef, useEffect, useRef } from "react";
import { twJoin } from "tailwind-merge";
import anime from "animejs";

export default function Modal({ children }: { children: React.ReactNode }) {
	const router = useRouter();
	const dialogRef = useRef<ElementRef<"dialog">>(null);

	useEffect(() => {
		if (!dialogRef.current?.open) {
			dialogRef.current?.showModal();
			anime({
				targets: dialogRef.current,
				translateY: [-60, 0],
				translateX: [10, 0],
				scale: [0.9, 1],
				opacity: [0, 1],
				duration: 450,
				easing: "easeOutExpo",
			});
		}
	}, []);

	function close() {
		router.back();
	}

	return createPortal(
		<dialog
			ref={dialogRef}
			onClose={close}
			className={twJoin(
				"opacity-0 rounded-3xl ring-1 ring-surface3 p-2 bg-background shadow opacity w-full md:w-96",
				"backdrop:bg-black/60 backdrop:backdrop-blur-sm",
				// NOTE: there is currently a warning.
				// the warning is because the modal has a fixed positoin relative to the body.
				// which means auto-scroll will not work for the routes that use the modal.
				// for the case of /login it doesn't matter because it's a small modal.
				// ‼!! uncoment the lines below to "solve" the warning.
				//
				// "overflow-hidden relative"
			)}
		>
			<RoundButton onClick={close}>
				<XIcon />
			</RoundButton>
			{children}
		</dialog>,
		document.getElementById("modal-root")!,
	);
}
