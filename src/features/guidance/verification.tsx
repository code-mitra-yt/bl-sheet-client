import { LogoLink } from "@/components";
import BackButton from "@/components/shared/back-button";
import { useSearchParams } from "react-router-dom";

const Verification = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  return (
    <div className="flex items-center justify-center min-h-screen p-4">
      <div className="border p-6 flex-col bg-muted border-muted rounded-lg flex items-center justify-center">
        <LogoLink />
        <h1 className="text-forground text-lg font-medium mt-1 text-center">
          We've sent a verification link
        </h1>
        <p className="text-active font-medium text-sm text-center mt-1">
          {email}
        </p>
        <p className="text-foreground-muted text-sm mt-2 text-center">
          Kindly check your email inbox for further instructions
        </p>

        <div className="mt-3">
          <BackButton title="Sign in" url="/auth/sign-in" />
        </div>
      </div>
    </div>
  );
};

export default Verification;
