import { siteConfigs } from "@/configs";

const SiteFooter = () => {
  return (
    <div className="h-14 px-4 sm:px-8 border-t flex items-center">
      <div className="relative text-sm text-center sm:text-start">
        Built by{" "}
        <a
          target="__blank"
          href={siteConfigs.links.linkedin}
          className="underline"
        >
          codemitrayt
        </a>
        . The source code is available on{" "}
        <a
          target="__blank"
          href={siteConfigs.links.github}
          className="underline"
        >
          GitHub
        </a>
        .
      </div>
    </div>
  );
};

export default SiteFooter;
