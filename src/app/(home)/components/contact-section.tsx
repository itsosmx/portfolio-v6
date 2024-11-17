"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { IContact, ZContact } from "@/types/contact";
import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";
import { send_contact_form } from "@/actions/contact-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  const form = useForm<IContact>({
    resolver: zodResolver(ZContact),
  });

  const { mutateAsync, isPending } = useMutation({
    mutationFn: send_contact_form,
    onSuccess: () => {
      toast.success("Message sent successfully", { id: "contact-form" });
    },
    onError: () => {
      toast.error("Failed to send message", { id: "contact-form" });
    },
  });

  const onSubmit = useCallback(async (data: IContact) => {
    toast.loading("Sending message...", { id: "contact-form" });
    await mutateAsync(data);
    // form.reset();
  }, []);

  const onCopy = useCallback(() => {
    navigator.clipboard.writeText("itsosmx@gmail.com");
    toast.success("Email copied to clipboard", { id: "contact-email" });
  }, []);

  return (
    <div className="max-w-screen-md">
      <div className="mt-8">
        <h2 className="text-2xl">Let's collaborate!</h2>
        <p>
          Got a project in mind or just a question? Feel free to reach out! For general inquiries, email me at{" "}
          <span onClick={onCopy} className="font-bold underline cursor-pointer">
            itsosmx@gmail.com
          </span>{" "}
          I’m always open to new opportunities and connections.
        </p>
      </div>
      <div className="mt-14">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="Your name.." />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="col-span-2">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input {...field} placeholder="example@osmx.me" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem className="col-span-3">
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea {...field} placeholder="What's up..." rows={5} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button className="col-span-3" type="submit">
              {isPending ? "Sending..." : "Send"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
