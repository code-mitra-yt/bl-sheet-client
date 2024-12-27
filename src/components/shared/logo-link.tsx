import { NavLink } from "react-router-dom";
import { siteConfigs } from "@/configs";
import { Logo } from "@/components";

const LogoLink = () => {
  return (
    <NavLink to="/" className="flex items-center justify-center space-x-4">
      <Logo />
      <div className="sm:grid flex-1 text-left text-lg leading-tight hidden">
        <span className="truncate font-semibold text-foreground">
          {siteConfigs.name.toUpperCase()}
        </span>
      </div>
    </NavLink>
  );
};

export default LogoLink;
