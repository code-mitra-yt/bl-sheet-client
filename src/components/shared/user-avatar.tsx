import { Avatar } from "@/components/ui/avatar";
import useAuth from "@/hooks/use-auth";
import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const UserAvatar = () => {
  const { user, isAuth } = useAuth();
  if (!isAuth) return null;
  return (
    <div className="flex items-center justify-center space-x-2">
      <Avatar className="size-8 bg-active">
        <AvatarImage src={user?.avatar?.url} alt="profile-picture" />
        <AvatarFallback className="flex items-center justify-center w-full h-full text-white">
          {user?.fullName[0].toUpperCase()}
        </AvatarFallback>
      </Avatar>
      <span className="ml-2 text-foreground text-sm font-medium hidden sm:block">
        {user?.fullName}
      </span>
    </div>
  );
};

export default UserAvatar;
