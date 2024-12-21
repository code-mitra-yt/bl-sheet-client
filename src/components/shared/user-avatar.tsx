import { Avatar } from "@/components/ui/avatar";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const UserAvatar = () => {
  const isAuth = false;
  if (!isAuth) return null;
  return (
    <div className="flex items-center justify-center space-x-2">
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>R</AvatarFallback>
      </Avatar>
      <span className="ml-2 text-foreground text-sm font-medium hidden sm:block">
        Rushi Mungse
      </span>
    </div>
  );
};

export default UserAvatar;
