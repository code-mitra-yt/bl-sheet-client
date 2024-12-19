import { FeatureType } from "@/types";
import {
  BadgeIndianRupeeIcon,
  CircleDotIcon,
  FileChartColumnIcon,
  MessageSquareTextIcon,
  TargetIcon,
  UsersIcon,
} from "lucide-react";

const FEATURES: FeatureType[] = [
  {
    id: 1,
    title: "Collaboration and Communication",
    description:
      "Share your projects with team members, track progress, and collaborate on tasks efficiently.",
    Icon: MessageSquareTextIcon,
    color: "text-orange-500",
  },
  {
    id: 2,
    title: "Team and Resource Management",
    description:
      "Assign tasks to team members, track individual workloads, and manage resources to ensure balanced productivity.",
    Icon: UsersIcon,
    color: "text-pink-500",
  },
  {
    id: 3,
    title: "Issue Tracking and Resolution",
    description:
      "Link issues to specific tasks, features, or milestones for a more integrated view of project challenges.",
    Icon: CircleDotIcon,
    color: "text-red-500",
  },
  {
    id: 4,
    title: "Productivity Tools",
    description:
      "Integrate to-do lists, task management, and calendar syncing to streamline your day-to-day tasks alongside your financial planning.",
    Icon: TargetIcon,
    color: "text-green-500",
  },
  {
    id: 5,
    title: "Budgeting Made Simple",
    description:
      "Create, track, and optimize your budget effortlessly. Visualize your income and expenses with easy-to-read charts.",
    Icon: BadgeIndianRupeeIcon,
    color: "text-blue-500",
  },
  {
    id: 6,
    title: "Comprehensive Reporting",
    description:
      "BL Sheet generate customizable reports to get a complete overview of your financial health.",
    Icon: FileChartColumnIcon,
    color: "text-purple-500",
  },
];

export default FEATURES;
