import { FaGear } from "react-icons/fa6";
import { ImHome } from "react-icons/im";

export const links = {
  home: "/",
  profile: "/profile",
  admin: "/admin",
  login: "/login",
  register: "/register",
  dashboard: "/admin/dashboard",
  settings: "/admin/settings",
  notAuthorized: "/not-authorized",
} as const;

export const nextApi = {
  login: "/api/login",
} as const;

export const routeGroupes = [
  {
    label: "Main Menu",
    routes: [
      {
        label: "Dashboard",
        path: links.dashboard,
        Icon: ImHome,
        customClass: null,
      },
    ],
  },
  {
    label: "Others",
    routes: [
      {
        label: "Settings",
        path: links.settings,
        Icon: FaGear,
        customClass: null,
      },
    ],
  },
] as const;
