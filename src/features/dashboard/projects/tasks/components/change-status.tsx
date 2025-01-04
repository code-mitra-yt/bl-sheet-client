import { useMutation } from "react-query";
import { toast, useAuth } from "@/hooks";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import apis from "../apis";
import { AvailableTaskStatus, STATUS_TEXT_WITH_ICON } from "@/constants";
import { TaskStatus } from "@/types";
import { LoaderCircle } from "lucide-react";

interface ChangeStatusProps {
  refetch: () => void;
  taskId: string;
  level: number[];
  value: TaskStatus;
}

const ChangeStatus = ({ taskId, value, refetch, level }: ChangeStatusProps) => {
  const { authToken } = useAuth();
  const { isLoading, mutate } = useMutation({
    mutationFn: ({ data }: any) => apis.changeStatus({ data, authToken }),
    onSuccess: () => {
      toast({
        title: "Success",
        description: "Task status updated successfully",
      });
      refetch();
    },
    onError: (err: any) => {
      toast({
        variant: "destructive",
        title: "Error",
        description: err?.response?.data?.message,
      });
    },
    retry: false,
  });

  const onChange = (value: TaskStatus) => {
    mutate({ data: { taskId, status: value } });
  };

  return (
    <Select onValueChange={onChange} defaultValue={value}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select a  status" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {AvailableTaskStatus.slice(level[0], level[1]).map((status) => (
            <SelectItem className="cursor-pointer" value={status}>
              {isLoading && <LoaderCircle size={15} className="animate-spin" />}
              <span>{STATUS_TEXT_WITH_ICON[status as TaskStatus]}</span>
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default ChangeStatus;
