import { useState } from "react";
import { useMutation } from "react-query";
import { LoaderCircle } from "lucide-react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { MdKeyboardBackspace } from "react-icons/md";

import { toast, useAuth } from "@/hooks";
import { InvitationStatus } from "@/types";
import { Button } from "@/components";

import apis from "../dashboard/projects/members/apis";

const Invitation = () => {
  const navigate = useNavigate();
  const { isAuth, user, authToken } = useAuth();
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState<InvitationStatus | null>(null);

  const email = searchParams.get("email") as string;
  const projectName = searchParams.get("projectName") as string;
  const invitationToken = searchParams.get("invitationToken") as string;

  const { isLoading, mutate } = useMutation({
    mutationFn: ({
      data,
    }: {
      data: {
        email: string;
        invitationToken: string;
        invitationStatus: InvitationStatus;
      };
    }) => apis.changeInvitationStatus({ data, authToken }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Invitation status updated successfully",
      });
      backToProjectsPage();
    },
    onError: (error: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: error?.response?.data?.message,
      });
    },
    retry: false,
  });

  const handleAcceptInvite = async () => {
    setStatus(InvitationStatus.ACCEPTED);
    mutate({
      data: {
        email,
        invitationToken,
        invitationStatus: InvitationStatus.ACCEPTED,
      },
    });
  };

  const handleRejectInvite = () => {
    setStatus(InvitationStatus.REJECTED);
    mutate({
      data: {
        email,
        invitationToken,
        invitationStatus: InvitationStatus.REJECTED,
      },
    });
  };

  const backToProjectsPage = () => {
    const url = "/dashboard/projects";
    navigate(url);
  };

  if (!isAuth || email !== user?.email) {
    return (
      <div className="h-screen w-screen flex items-center justify-center p-3">
        <div className="p-6 border rounded-xl max-w-[500px] bg-muted">
          <p className="text-center text-foreground">
            To access the page, please sign in using the email{" "}
            <span className="text-active font-medium">{email}</span>
          </p>
          <p className="mt-3 text-center text-sm foreground-muted">
            If you don't have an account associated with this email, please sign
            up for one.
          </p>

          <div className="flex items-center justify-center mt-2">
            <Link
              to="/auth/sign-up"
              className="text-active hover:text-active/80"
            >
              <span className="text-sm">Sign Up</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center p-3">
      <div className="max-w-[500px] border p-6 rounded-xl bg-turnary bg-muted">
        <h1 className="text-sm">
          Hi, <span className="text-active">{email}</span>
        </h1>

        <h1 className="text-lg text-center mt-3 font-bold">
          You've been invited to collaborate on a{" "}
          <span className="text-primary">{projectName}</span> project.
        </h1>

        <p className="text-forground-muted text-center text-sm mt-3">
          Join the project and start contributing right away. We’re excited to
          have you on board!
        </p>

        <div className="flex items-center justify-center space-x-4 mt-8">
          <Button variant="primary" onClick={handleAcceptInvite}>
            {isLoading && status === InvitationStatus.ACCEPTED && (
              <LoaderCircle className="ml-2 size-4 animate-spin" />
            )}
            <span>Accept</span>
          </Button>

          <Button variant="destructive" onClick={handleRejectInvite}>
            {isLoading && status === InvitationStatus.REJECTED && (
              <LoaderCircle className="ml-2 size-4 animate-spin" />
            )}
            <span>Reject</span>
          </Button>
        </div>

        <div className="flex items-center justify-center">
          <button
            onClick={backToProjectsPage}
            className="flex items-center justify-center space-x-1 text-sm mt-4 text-center text-secondary hover:text-secondary/80 hover:underline transition-all"
          >
            <MdKeyboardBackspace />
            <span>Back to projects page</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
