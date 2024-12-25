import { NavLinkType } from "@/types";
import {
  CircleDotIcon,
  FileTextIcon,
  HomeIcon,
  LayoutGridIcon,
  ReceiptTextIcon,
  SquareCheckIcon,
  UserRoundIcon,
} from "lucide-react";

export const NAV_LINKS: NavLinkType[] = [
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

export const PROJECT_LINKS: NavLinkType[] = [
  {
    id: 1,
    title: "Details",
    isProtected: true,
    path: "details",
    icon: ReceiptTextIcon,
  },
  {
    id: 2,
    title: "Members",
    isProtected: true,
    path: "members",
    icon: UserRoundIcon,
  },
  {
    id: 3,
    title: "Tasks",
    isProtected: true,
    path: "tasks",
    icon: SquareCheckIcon,
  },
  {
    id: 4,
    title: "Issues",
    isProtected: true,
    path: "issues",
    icon: CircleDotIcon,
  },
  {
    id: 5,
    title: "Docs",
    isProtected: true,
    path: "docs",
    icon: FileTextIcon,
  },
];
