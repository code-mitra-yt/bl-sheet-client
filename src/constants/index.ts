import QUERY from "./query";
import FEATURES from "./features";
import { NAV_LINKS, PROJECT_LINKS } from "./nav-links";
import { InvitationStatus, MemberRole } from "@/types";

export const MEMBER_ROLE_COLORS = {
  [MemberRole.OWNER]: "text-orange-500 bg-orange-100",
  [MemberRole.ADMIN]: "text-red-500 bg-red-100",
  [MemberRole.MEMBER]: "text-blue-500 bg-blue-100",
};

export const INVITATION_STATUS_COLORS = {
  [InvitationStatus.ACCEPTED]: "text-green-500 bg-green-100",
  [InvitationStatus.PENDING]: "text-orange-500 bg-orange-100",
  [InvitationStatus.REJECTED]: "text-red-500 bg-red-100",
};

export { NAV_LINKS, FEATURES, QUERY, PROJECT_LINKS };
