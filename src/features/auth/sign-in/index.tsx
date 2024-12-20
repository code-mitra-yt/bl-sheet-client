import { Link } from "react-router-dom";
import { SignInIcon } from "@/components";

import SignInForm from "./components/sign-in-form";
import AcceptConditions from "../shared/accept-conditions";
import AuthenticationStrategy from "../shared/authentication-strategy";

const SignInPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="container mx-auto pb-8">
        <div className="container relative flex-col items-center justify-center p-0 md:grid lg:max-w-none lg:grid-cols-2">
          <div className="relative hidden h-full flex-col rounded-l-2xl border-r lg:flex lg:p-5">
            <SignInIcon className="size-full" />
          </div>
          <div className="lg:p-5">
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
              <div className="flex flex-col space-y-2 text-center">
                <h1 className="text-2xl font-semibold tracking-tight">
                  Login an account
                </h1>
                <p className="text-sm text-muted-foreground">
                  Enter your email address and password below to login your
                  account
                </p>
              </div>
              <SignInForm />
              <div className="flex items-center justify-between">
                <Link
                  to="/auth/sign-up"
                  className="text-xs text-foreground/60 transition-all hover:text-foreground md:text-sm"
                >
                  Don&apos;t have an acount?
                </Link>
                <Link
                  to="/auth/forgot-password"
                  className="text-xs text-foreground/60 transition-all hover:text-foreground md:text-sm"
                >
                  Forgot Password?
                </Link>
              </div>
              <AuthenticationStrategy />
              <AcceptConditions />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
