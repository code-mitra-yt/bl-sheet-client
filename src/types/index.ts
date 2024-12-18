import { LucideIcon } from "lucide-react";

export interface NavLinkType {
  id: number;
  title: string;
  path: string;
  isProtected: boolean;
  icon: LucideIcon;
}
