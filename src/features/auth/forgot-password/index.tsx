import { ForgotPasswordIcon } from "@/components";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

import ForgotPasswordForm from "./components/forgot-password-form";

const ForgotPassword = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="container mx-auto pb-8">
        <div className="container relative flex-col items-center justify-center p-0 md:grid lg:max-w-none lg:grid-cols-2">
          <div className="relative hidden h-full flex-col rounded-l-2xl border-r lg:flex lg:p-5">
            <ForgotPasswordIcon className="size-full" />
          </div>
          <div className="lg:p-5">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Forgot password?
                </h1>
                <p className="text-sm text-muted-foreground">
                  No worries, we'll send you reset instructions
                </p>
              </div>
              <ForgotPasswordForm />
              <div className="flex items-center justify-center">
                <Link
                  to="/auth/sign-in"
                  className="text-xs text-foreground/60 transition-all hover:text-foreground md:text-sm space-x-2 flex items-center justify-center"
                >
                  <ArrowLeft size={15} /> <span>Back to sign in</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
