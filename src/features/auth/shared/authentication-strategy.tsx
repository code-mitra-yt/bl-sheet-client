import { FcGoogle } from "react-icons/fc";
import { LoaderCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const AuthenticationStrategy = () => {
  const isLoading = false;
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Or continue with
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <LoaderCircle className="mr-2 size-4 animate-spin" />
        ) : (
          <FcGoogle className="mr-2 size-4" />
        )}{" "}
        Google
      </Button>
    </>
  );
};

export default AuthenticationStrategy;
