"use client"

import * as React from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  InputGroupTextarea,
} from "@/components/ui/input-group"

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, "Имя должно содержать не менее 2 символов.")
    .max(50, "Имя должно содержать не более 50 символов."),
  lastname: z
    .string()
    .min(2, "Фамилия должна содержать не менее 2 символов.")
    .max(50, "Фамилия должна содержать не более 50 символов."),
  email: z.string().email("Неверный адрес электронной почты."),
  company: z
    .string()
    .min(2, "Название компании должно содержать не менее 2 символов.")
    .max(100, "Название компании должно содержать не более 100 символов."),
  city: z
    .string()
    .min(2, "Город должен содержать не менее 2 символов.")
    .max(100, "Город должен содержать не более 100 символов."),
  organizationType: z.string().min(1, "Пожалуйста, выберите тип организации."),
  source: z.string().min(1, "Пожалуйста, укажите, откуда вы о нас узнали."),
})

const contactInputClassName = "bg-white text-sm"
const contactLabelClassName = "font-normal text-sm"
const contactFieldClassName = "gap-2"

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      company: "",
      city: "",
      organizationType: "",
      source: "",
    },
  })

  function onSubmit(data: z.infer<typeof formSchema>) {
    toast.info("You submitted the following values:", {
      description: (
        <pre className="bg-code text-code-foreground mt-2 overflow-x-auto rounded-md p-4">
          <code>{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      position: "bottom-right",
      classNames: {
        content: "flex flex-col gap-2",
      },
      style: {
        "--border-radius": "calc(var(--radius)  + 4px)",
      } as React.CSSProperties,
    })
  }

  return (
    <Card className="w-full max-w-xl rounded-sm border-0 bg-[linear-gradient(135deg,#d7e6e7_0%,#eef4ef_52%,#d3e1e0_100%)] ring-0 shadow-none">
      <CardContent>
        <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
          <FieldGroup>
            <div className="grid gap-7 lg:flex">
              <Controller
                name="lastname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className={contactFieldClassName}>
                    <FieldLabel className={contactLabelClassName} htmlFor="contact-form-lastname">
                      Фамилия
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-lastname"
                      aria-invalid={fieldState.invalid}
                      placeholder="Иванов"
                      autoComplete="off"
                      className={contactInputClassName}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Controller
                name="firstname"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid} className={contactFieldClassName}>
                    <FieldLabel className={contactLabelClassName} htmlFor="contact-form-firstname">
                      Имя
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-firstname"
                      aria-invalid={fieldState.invalid}
                      placeholder="Иван"
                      autoComplete="off"
                      className={contactInputClassName}
                    />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
            </div>
            <Controller
              name="email"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={contactFieldClassName}>
                  <FieldLabel className={contactLabelClassName} htmlFor="contact-form-email">Почта</FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-email"
                    aria-invalid={fieldState.invalid}
                    placeholder="ivan@example.com"
                    autoComplete="off"
                    className={contactInputClassName}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="company"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={contactFieldClassName}>
                  <FieldLabel className={contactLabelClassName} htmlFor="contact-form-company">
                    Компания
                  </FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-company"
                    aria-invalid={fieldState.invalid}
                    placeholder="ТОО Qadam"
                    autoComplete="off"
                    className={contactInputClassName}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="city"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={contactFieldClassName}>
                  <FieldLabel className={contactLabelClassName} htmlFor="contact-form-city">Город</FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-city"
                    aria-invalid={fieldState.invalid}
                    placeholder="Алматы"
                    autoComplete="off"
                    className={contactInputClassName}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="organizationType"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={contactFieldClassName}>
                  <FieldLabel className={contactLabelClassName} htmlFor="contact-form-organization-type">
                    Тип организации
                  </FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-organization-type"
                    aria-invalid={fieldState.invalid}
                    placeholder="Юридическая компания"
                    autoComplete="off"
                    className={contactInputClassName}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
            <Controller
              name="source"
              control={form.control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className={contactFieldClassName}>
                  <FieldLabel className={contactLabelClassName} htmlFor="contact-form-source">
                    Откуда вы о нас узнали?
                  </FieldLabel>
                  <Input
                    {...field}
                    id="contact-form-source"
                    aria-invalid={fieldState.invalid}
                    placeholder="По рекомендации"
                    autoComplete="off"
                    className={contactInputClassName}
                  />
                  {fieldState.invalid && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </Field>
              )}
            />
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter>
        <Field orientation="horizontal" className="flex justify-center">
          <Button type="submit" className="px-10" form="contact-form">
            Попробовать демо
          </Button>
        </Field>
      </CardFooter>
    </Card>
  )
}
