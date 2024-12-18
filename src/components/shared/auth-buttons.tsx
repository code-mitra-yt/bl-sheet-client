import { Button } from "@/components";

const AuthButtons = () => {
  return (
    <div className="flex items-center justify-center space-x-4">
      <Button size="sm" variant="outline">
        Sign in
      </Button>
      <Button size="sm">Sign up</Button>
    </div>
  );
};

export default AuthButtons;
