import { Briefcase, Home, MessageSquarePlusIcon } from "lucide-react";

export const routes = [
  {
    name: "Home",
    path: "/",
    icon: <Home className="w-5 h-5" strokeWidth={2} />,
  },
  {
    name: "Discussions",
    path: "/discussions",
    icon: <MessageSquarePlusIcon className="w-5 h-5" strokeWidth={2} />,
  },
  {
    name: "Jobs",
    path: "/jobs",
    icon: <Briefcase className="w-5 h-5" strokeWidth={2} />,
  },
];
