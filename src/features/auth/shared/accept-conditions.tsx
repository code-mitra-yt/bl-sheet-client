import { Link } from "react-router-dom";

const AcceptConditions = () => {
  return null;
  return (
    <p className="px-4 text-center text-sm text-muted-foreground">
      By clicking continue, you agree to our{" "}
      <Link
        to="/auth/terms-of-service"
        className="underline underline-offset-4 hover:text-primary"
      >
        Terms of Service
      </Link>{" "}
      and{" "}
      <Link
        to="/auth/privacy-policy"
        className="underline underline-offset-4 hover:text-primary"
      >
        Privacy Policy
      </Link>
      .
    </p>
  );
};

export default AcceptConditions;
