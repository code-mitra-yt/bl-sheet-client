import NAV_LINKS from "./nav-links";
import FEATURES from "./features";
import QUERY from "./query";
import { MemberRole } from "@/types";

export const MEMBER_ROLE_COLORS = {
  [MemberRole.OWNER]: "text-orange-500 bg-orange-100",
  [MemberRole.ADMIN]: "text-red-500 bg-red-100",
  [MemberRole.MEMBER]: "text-blue-500 bg-blue-100",
};

export { NAV_LINKS, FEATURES, QUERY };
