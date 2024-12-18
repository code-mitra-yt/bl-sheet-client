import { LogoLink, AuthButtons, NavLinks } from "@/components";
import { NAV_LINKS } from "@/constants";

const SiteHeader = () => {
  return (
    <header className="border-grid sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="px-4 sm:px-8 flex h-14 items-center mx-auto justify-between">
        <div className="flex items-center justify-center space-x-4 sm:space-x-8">
          <LogoLink />
          <NavLinks links={NAV_LINKS} />
        </div>
        <AuthButtons />
      </div>
    </header>
  );
};

export default SiteHeader;
