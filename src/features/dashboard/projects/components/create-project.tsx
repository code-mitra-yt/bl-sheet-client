import { LoaderCircle, Plus } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components";
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

import { projectShema, ProjectValues } from "./project-schema";
import useCreateProject from "../hooks/use-create-project";
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

interface CreateProjectProps {
  refetchProjects: () => void;
}
const CreateProject = ({ refetchProjects }: CreateProjectProps) => {
  const form = useForm<ProjectValues>({
    resolver: zodResolver(projectShema),
    mode: "onChange",
  });
  const [open, setOpen] = useState<boolean>(false);
  const { isLoading, mutate } = useCreateProject({
    refetchProjects,
    setOpen,
    form,
  });

  const onSubmit = (data: ProjectValues) => {
    mutate({ data });
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" onClick={() => setOpen(true)}>
          <Plus />
          <span>Create</span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="text-active">Create New Project</SheetTitle>
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
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="BL Sheet"
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
                        placeholder="frontend project"
                        className="focus-visible:ring-1"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <SheetFooter>
                <Button variant="outline" type="submit" disabled={isLoading}>
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

export default CreateProject;
