import { Briefcase, Home, InfoIcon, MessageSquarePlusIcon } from "lucide-react";

export const routes = [
  {
    name: "Home",
    path: "/",
    icon: <Home className="w-5 h-5 text-primary" strokeWidth={2} />,
  },
  {
    name: "Discussions",
    path: "/discussions",
    icon: <MessageSquarePlusIcon className="w-5 h-5 text-info" strokeWidth={2} />,
  },
  {
    name: "Jobs",
    path: "/jobs",
    icon: <Briefcase className="w-5 h-5 text-success" strokeWidth={2} />,
  },
  {
    name: "About",
    path: "/about",
    icon: <InfoIcon className="w-5 h-5 text-warn" strokeWidth={2} />,
  },
  // {
  //   name: "Login",
  //   path: "/login",
  //   icon: <UserIcon className="w-5 h-5 text-error" strokeWidth={2} />,
  // },
  // {
  //   name: "DHome",
  //   path: "/",
  //   color: "primary",
  //   icon: <Home className="w-5 h-5" strokeWidth={2} />,
  // },
];
