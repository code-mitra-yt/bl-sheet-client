import { useState } from "react";
import { format } from "date-fns";
import { useForm } from "react-hook-form";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";

import { CalendarIcon, LoaderCircle, Plus } from "lucide-react";
import { Button, SelectField } from "@/components";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
  TASK_TYPE_OPTIONS,
} from "@/constants";
import { Calendar } from "@/components/ui/calendar";
import { Separator } from "@/components/ui/separator";

import { taskShema, TaskValues } from "./task-schema";
import useCreateTask from "../hooks/use-create-task";

interface CreateTaskProps {
  refetchTasks: () => void;
  projectId: string;
}
const CreateTask = ({ refetchTasks, projectId }: CreateTaskProps) => {
  const form = useForm<TaskValues>({
    resolver: zodResolver(taskShema),
    mode: "onChange",
    defaultValues: { status: "Todo", priority: "Low" },
  });
  const [open, setOpen] = useState<boolean>(false);
  const { isLoading, mutate } = useCreateTask({
    refetchTasks,
    form,
    onClose: () => setOpen(false),
  });

  const onSubmit = (data: TaskValues) => {
    mutate({ data: { ...data, projectId } });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="primary"
          size="sm"
          className="px-6 rounded-full"
          onClick={() => setOpen(true)}
        >
          <Plus />
          <span>Create</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-active">Create New Task</SheetTitle>
        </SheetHeader>
        <Separator className="my-3" />
        <div className="bg-active/5 border border-active/10 p-6 rounded-lg">
          <Form {...form}>
            <form
              className="flex flex-col space-y-6 md:px-0"
              onSubmit={form.handleSubmit(onSubmit)}
            >
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Task title"
                        className="focus-visible:ring-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Task description"
                        className="focus-visible:ring-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="gap-2 grid grid-cols-2">
                <FormField
                  control={form.control}
                  name="status"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Status</FormLabel>
                      <FormControl>
                        <SelectField field={field} options={STATUS_OPTIONS} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="priority"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Priority</FormLabel>
                      <FormControl>
                        <SelectField field={field} options={PRIORITY_OPTIONS} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="dueDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "w-full pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="taskType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Task Type</FormLabel>
                    <FormControl>
                      <SelectField field={field} options={TASK_TYPE_OPTIONS} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SheetFooter>
                <Button
                  variant="primary"
                  size="sm"
                  className="px-6 rounded-full"
                  type="submit"
                  disabled={isLoading}
                >
                  {isLoading && (
                    <LoaderCircle className="mr-1 size-4 animate-spin" />
                  )}
                  Create
                </Button>
              </SheetFooter>
            </form>
          </Form>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default CreateTask;