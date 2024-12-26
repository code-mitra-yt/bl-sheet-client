import { useMutation } from "react-query";

const useInviteMember = () => {
  const { isLoading, mutate } = useMutation({});
  return { isLoading, mutate };
};

export default useInviteMember;
