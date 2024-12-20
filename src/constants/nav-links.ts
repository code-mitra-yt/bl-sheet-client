import { NavLinkType } from "@/types";
import { HomeIcon, LayoutGridIcon } from "lucide-react";

const NAV_LINKS: NavLinkType[] = [
  {
    id: 1,
    title: "Home",
    isProtected: false,
    path: "/",
    icon: HomeIcon,
  },
  {
    id: 2,
    title: "Dashboard",
    isProtected: true,
    path: "/dashboard/home",
    icon: LayoutGridIcon,
  },
];

export default NAV_LINKS;
