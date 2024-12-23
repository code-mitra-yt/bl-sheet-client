import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { ArrowRight, LoaderCircle } from "lucide-react";

import useCreatePassoword from "./useCreatePassword";
import {
  createPasswordSchema,
  CreatePasswordValues,
} from "./create-password-schema";
import { useSearchParams } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

const SignInForm = () => {
  const [searchParams] = useSearchParams();
  const { isLoading, mutate } = useCreatePassoword();
  const form = useForm<CreatePasswordValues>({
    resolver: zodResolver(createPasswordSchema),
    mode: "onChange",
  });

  const onSubmit = (data: CreatePasswordValues) => {
    const token = searchParams.get("token");
    if (!token) {
      toast({
        title: "Error",
        description: "Token not found",
        variant: "destructive",
      });
      return;
    }
    mutate({ data: { ...data, token } });
  };

  return (
    <Form {...form}>
      <form
        className="flex flex-col space-y-6 md:px-0"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
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
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  placeholder="********"
                  className="focus-visible:ring-1"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          Create Passowrd
          {isLoading ? (
            <LoaderCircle className="ml-2 size-4 animate-spin" />
          ) : (
            <ArrowRight className="ml-2 size-4" />
          )}{" "}
        </Button>
      </form>
    </Form>
  );
};

export default SignInForm;
