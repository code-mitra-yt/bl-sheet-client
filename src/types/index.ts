import { LucideIcon } from "lucide-react";

export interface RequestType {
  method?: "GET" | "POST" | "PUT" | "DELETE" | "OPTIONS" | "PATCH";
  authToken?: string | null;
  data?: any;
  params?: any;
  url?: string;
  isFormData?: boolean;
}

export interface NavLinkType {
  id: number;
  title: string;
  path: string;
  isProtected: boolean;
  icon: LucideIcon;
}

export interface FeatureType {
  id: number;
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}

export interface Avatar {
  url: string;
}

export enum UserRoles {
  ADMIN = "ADMIN",
  USER = "USER",
}

export enum UserLoginType {
  GOOGLE = "GOOGLE",
  GITHUB = "GITHUB",
  EMAIL_PASSWORD = "EMAIL_PASSWORD",
}

export enum PricingModel {
  FREE = "free",
  PREMIUM = "premium",
  ENTERPRISE = "enterprise",
}

export interface User {
  _id?: string;
  fullName: string;
  email: string;
  avatar: Avatar;
  role: UserRoles;
  password: string;
  loginType: UserLoginType;
  pricingModel: PricingModel;
}

export enum MemberRole {
  ADMIN = "Admin",
  MEMBER = "Member",
  OWNER = "Owner",
}

export enum InvitationStatus {
  PENDING = "Pending",
  ACCEPTED = "Accepted",
  REJECTED = "Rejected",
}

export interface Member {
  _id?: string;
  userId: string;
  projectId: string;
  email: string;
  role: MemberRole;
  invitationStatus?: InvitationStatus;
  user: User;
}

export interface Project {
  _id: string;
  memberId: string;
  projectId: string;
  role: MemberRole;
  name: string;
  description: string;
  tags: string[];
  isDeleted: boolean;
  owner: User;
}

export enum TaskStatus {
  TODO = "Todo",
  IN_PROGRESS = "In Progress",
  UNDER_REVIEW = "Under Review",
  COMPLETED = "Completed",
}

export enum TaskPriority {
  LOW = "Low",
  MEDIUM = "Medium",
  HIGH = "High",
}

export interface Task {
  _id: string;
  projectId: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate: Date;
  members: Member[];
  completedDate: Date;
  commentCount: number;
  subTasks: string[];
  taskType: string;
  taskNumber: number;
  isDeleted: boolean;
  isCreator: boolean;
  creator: Member & { fullName: string; avatar: Avatar };
}

export interface GetTasksQuery {
  projectId: string;
  title: string;
  priority: TaskPriority;
  status: TaskStatus;
  assignedToMe: boolean;
  createdByMe: boolean;
  sortByCreated: boolean;
}

export interface Options {
  label: string;
  value: string;
}
