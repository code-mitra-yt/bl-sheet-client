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
