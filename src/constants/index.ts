import QUERY from "./query";
import FEATURES from "./features";
import { NAV_LINKS, PROJECT_LINKS } from "./nav-links";
import {
  InvitationStatus,
  MemberRole,
  Options,
  TaskPriority,
  TaskStatus,
} from "@/types";

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

export const STATUS_TEXT_WITH_ICON = {
  [TaskStatus.TODO]: "📋 TO DO",
  [TaskStatus.IN_PROGRESS]: "🧑🏻‍💻 Working In Progress",
  [TaskStatus.UNDER_REVIEW]: "👀 Under Review",
  [TaskStatus.COMPLETED]: "✅ Today's Completed",
};

export const TASK_TYPE_COLOR: Record<string, string> = {
  "Bug Fix": "text-red-500 bg-red-100",
  "Feature Request": "text-blue-500 bg-blue-100",
  Enhancement: "text-orange-500 bg-orange-100",
  Documentation: "text-green-500 bg-green-100",
  Frontend: "text-purple-500 bg-purple-100",
  Backend: "text-pink-500 bg-pink-100",
  API: "text-cyan-500 bg-cyan-100",
  Testing: "text-violet-500 bg-violet-100",
  "UI Design": "text-yellow-500 bg-yellow-500",
};

export const TASK_TYPE_OPTIONS: Options[] = [
  {
    value: "Bug Fix",
    label: "Bug Fix",
  },
  {
    value: "Feature Request",
    label: "Feature Request",
  },
  {
    value: "Enhancement",
    label: "Enhancement",
  },
  {
    value: "Documentation",
    label: "Documentation",
  },
  {
    value: "Frontend",
    label: "Frontend",
  },
  { value: "Backend", label: "Backend" },
  { value: "API", label: "API" },
  { value: "Testing", label: "Testing" },
  { value: "UI Design", label: "UI Design" },
];

export const TASK_PRIORITY_COLOR = {
  [TaskPriority.LOW]: "text-green-500 bg-green-100",
  [TaskPriority.MEDIUM]: "text-orange-500 bg-orange-100",
  [TaskPriority.HIGH]: "text-red-500 bg-red-100",
};

export const STATUS_OPTIONS: Options[] = [
  { value: TaskStatus.TODO, label: "📋 Todo" },
  { value: TaskStatus.IN_PROGRESS, label: "🧑🏻‍💻 In Progress" },
  { value: TaskStatus.UNDER_REVIEW, label: "👀 Under Review" },
  { value: TaskStatus.COMPLETED, label: "✅ Completed" },
];

export const PRIORITY_OPTIONS: Options[] = [
  { value: TaskPriority.LOW, label: "Low" },
  { value: TaskPriority.MEDIUM, label: "Medium" },
  { value: TaskPriority.HIGH, label: "High" },
];

export const AvailabeMemberRole: string[] = Object.values(MemberRole);
export const AvailableTaskStatus: string[] = Object.values(TaskStatus);

export { NAV_LINKS, FEATURES, QUERY, PROJECT_LINKS };
