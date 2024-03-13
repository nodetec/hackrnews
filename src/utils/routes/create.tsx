import {
	Briefcase,
	TrophyIcon,
	MessageCircleQuestionIcon,
	NewspaperIcon,
	CirclePlusIcon,
} from "lucide-react";
import { IRoute } from "./types";
import { twJoin } from "tailwind-merge";

const iconSize = "size-8";

export const CREATE_ROUTES = [
	{
		name: "Post",
		path: "/create/post",
		accent:
			"text-primary bg-primary/10 hover:bg-primary/20 active:bg-primary/30",
		Icon: (
			<CirclePlusIcon
				className={twJoin(iconSize, "text-primary")}
				strokeWidth={2}
			/>
		),
	},
	{
		name: "Article",
		path: "/create/article",
		accent: "text-info bg-info/10 hover:bg-info/20 active:bg-info/30",
		Icon: (
			<NewspaperIcon
				className={twJoin(iconSize, "text-info")}
				strokeWidth={2}
			/>
		),
	},
	{
		name: "Job",
		path: "/create/job",
		accent:
			"text-success bg-success/10 hover:bg-success/20 active:bg-success/30",
		Icon: (
			<Briefcase className={twJoin(iconSize, "text-success")} strokeWidth={2} />
		),
	},
	{
		name: "Bounty",
		path: "/create/bounty",
		accent: "text-warn bg-warn/10 hover:bg-warn/20 active:bg-warn/30",
		Icon: (
			<TrophyIcon className={twJoin(iconSize, "text-warn")} strokeWidth={2} />
		),
	},
	{
		name: "Question",
		path: "/create/question",
		accent: "text-error bg-error/10 hover:bg-error/20 active:bg-error/30",
		Icon: (
			<MessageCircleQuestionIcon
				className={twJoin(iconSize, "text-error")}
				strokeWidth={2}
			/>
		),
	},
] satisfies IRoute[];
