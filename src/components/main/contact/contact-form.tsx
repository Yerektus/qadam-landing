"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Toaster } from "@/components/ui/sonner"
import { createLead } from "@/lib/api/requests/create-lead.request"
import { m } from "@/paraglide/messages.js"
import axios from "axios"

type Lang = "ru" | "en"

type ContactFormValues = {
  firstname: string
  lastname: string
  email: string
  company: string
  city: string
  organizationType: string
  source: string
}

type ContactFormProps = {
  lang: Lang
}

function getValidationMessages(lang: Lang) {
  return {
    firstnameMin: m.contact_form_validation_firstname_min({}, { locale: lang }),
    firstnameMax: m.contact_form_validation_firstname_max({}, { locale: lang }),
    lastnameMin: m.contact_form_validation_lastname_min({}, { locale: lang }),
    lastnameMax: m.contact_form_validation_lastname_max({}, { locale: lang }),
    email: m.contact_form_validation_email({}, { locale: lang }),
    companyMin: m.contact_form_validation_company_min({}, { locale: lang }),
    companyMax: m.contact_form_validation_company_max({}, { locale: lang }),
    cityMin: m.contact_form_validation_city_min({}, { locale: lang }),
    cityMax: m.contact_form_validation_city_max({}, { locale: lang }),
    organizationType: m.contact_form_validation_organization_type(
      {},
      { locale: lang }
    ),
    source: m.contact_form_validation_source({}, { locale: lang }),
  }
}

function getContactFormCopy(lang: Lang) {
  return {
    labels: {
      lastname: m.contact_form_label_lastname({}, { locale: lang }),
      firstname: m.contact_form_label_firstname({}, { locale: lang }),
      email: m.contact_form_label_email({}, { locale: lang }),
      company: m.contact_form_label_company({}, { locale: lang }),
      city: m.contact_form_label_city({}, { locale: lang }),
      organizationType: m.contact_form_label_organization_type(
        {},
        { locale: lang }
      ),
      source: m.contact_form_label_source({}, { locale: lang }),
    },
    placeholders: {
      lastname: m.contact_form_placeholder_lastname({}, { locale: lang }),
      firstname: m.contact_form_placeholder_firstname({}, { locale: lang }),
      email: m.contact_form_placeholder_email({}, { locale: lang }),
      company: m.contact_form_placeholder_company({}, { locale: lang }),
      city: m.contact_form_placeholder_city({}, { locale: lang }),
      organizationType: m.contact_form_placeholder_organization_type(
        {},
        { locale: lang }
      ),
      source: m.contact_form_placeholder_source({}, { locale: lang }),
    },
    submit: m.contact_form_submit({}, { locale: lang }),
    toastSuccess: m.contact_form_toast_success({}, { locale: lang }),
    errors: {
      network: m.contact_form_error_network({}, { locale: lang }),
      server: m.contact_form_error_server({}, { locale: lang }),
      submit: m.contact_form_error_submit({}, { locale: lang }),
    },
  }
}

type ValidationMessages = ReturnType<typeof getValidationMessages>
type ContactFormCopy = ReturnType<typeof getContactFormCopy>

function createFormSchema(messages: ValidationMessages) {
  return z.object({
    firstname: z
      .string()
      .min(2, messages.firstnameMin)
      .max(50, messages.firstnameMax),
    lastname: z
      .string()
      .min(2, messages.lastnameMin)
      .max(50, messages.lastnameMax),
    email: z.string().email(messages.email),
    company: z
      .string()
      .min(2, messages.companyMin)
      .max(100, messages.companyMax),
    city: z.string().min(2, messages.cityMin).max(100, messages.cityMax),
    organizationType: z.string().min(1, messages.organizationType),
    source: z.string().min(1, messages.source),
  })
}

const formSchemas = {
  ru: createFormSchema(getValidationMessages("ru")),
  en: createFormSchema(getValidationMessages("en")),
} satisfies Record<Lang, z.ZodType<ContactFormValues>>

const contactInputClassName = "bg-white text-sm"
const contactLabelClassName = "font-normal text-sm"
const contactFieldClassName = "gap-2"

function getSubmitErrorMessage(error: unknown, copy: ContactFormCopy) {
  if (axios.isAxiosError(error)) {
    if (!error.response) {
      return copy.errors.network
    }

    if (error.response.status >= 500) {
      return copy.errors.server
    }

    const message = error.response.data?.message
    if (typeof message === "string") {
      return message
    }
  }

  return copy.errors.submit
}

export default function ContactForm({ lang }: ContactFormProps) {
  const copy = getContactFormCopy(lang)
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchemas[lang]),
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

  async function onSubmit(data: ContactFormValues) {
    try {
      await createLead({
        first_name: data.firstname,
        last_name: data.lastname,
        email: data.email,
        company: data.company,
        city: data.city,
        organization_type: data.organizationType,
        source: data.source,
      })

      form.reset()
      toast.info(copy.toastSuccess)
    } catch (error) {
      const message = getSubmitErrorMessage(error, copy)

      toast.error(message)
    }
  }

  return (
    <>
      <Toaster />
      <Card className="w-full max-w-xl rounded-sm border-0 bg-[linear-gradient(135deg,#d7e6e7_0%,#eef4ef_52%,#d3e1e0_100%)] shadow-none ring-0">
        <CardContent>
          <form id="contact-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <div className="grid gap-7 md:flex md:gap-5">
                <Controller
                  name="lastname"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field
                      data-invalid={fieldState.invalid}
                      className={contactFieldClassName}
                    >
                      <FieldLabel
                        className={contactLabelClassName}
                        htmlFor="contact-form-lastname"
                      >
                        {copy.labels.lastname}
                      </FieldLabel>
                      <Input
                        {...field}
                        id="contact-form-lastname"
                        aria-invalid={fieldState.invalid}
                        placeholder={copy.placeholders.lastname}
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
                    <Field
                      data-invalid={fieldState.invalid}
                      className={contactFieldClassName}
                    >
                      <FieldLabel
                        className={contactLabelClassName}
                        htmlFor="contact-form-firstname"
                      >
                        {copy.labels.firstname}
                      </FieldLabel>
                      <Input
                        {...field}
                        id="contact-form-firstname"
                        aria-invalid={fieldState.invalid}
                        placeholder={copy.placeholders.firstname}
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
                  <Field
                    data-invalid={fieldState.invalid}
                    className={contactFieldClassName}
                  >
                    <FieldLabel
                      className={contactLabelClassName}
                      htmlFor="contact-form-email"
                    >
                      {copy.labels.email}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-email"
                      aria-invalid={fieldState.invalid}
                      placeholder={copy.placeholders.email}
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
                  <Field
                    data-invalid={fieldState.invalid}
                    className={contactFieldClassName}
                  >
                    <FieldLabel
                      className={contactLabelClassName}
                      htmlFor="contact-form-company"
                    >
                      {copy.labels.company}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-company"
                      aria-invalid={fieldState.invalid}
                      placeholder={copy.placeholders.company}
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
                  <Field
                    data-invalid={fieldState.invalid}
                    className={contactFieldClassName}
                  >
                    <FieldLabel
                      className={contactLabelClassName}
                      htmlFor="contact-form-city"
                    >
                      {copy.labels.city}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-city"
                      aria-invalid={fieldState.invalid}
                      placeholder={copy.placeholders.city}
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
                  <Field
                    data-invalid={fieldState.invalid}
                    className={contactFieldClassName}
                  >
                    <FieldLabel
                      className={contactLabelClassName}
                      htmlFor="contact-form-organization-type"
                    >
                      {copy.labels.organizationType}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-organization-type"
                      aria-invalid={fieldState.invalid}
                      placeholder={copy.placeholders.organizationType}
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
                  <Field
                    data-invalid={fieldState.invalid}
                    className={contactFieldClassName}
                  >
                    <FieldLabel
                      className={contactLabelClassName}
                      htmlFor="contact-form-source"
                    >
                      {copy.labels.source}
                    </FieldLabel>
                    <Input
                      {...field}
                      id="contact-form-source"
                      aria-invalid={fieldState.invalid}
                      placeholder={copy.placeholders.source}
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
            <Button
              type="submit"
              className="px-10"
              form="contact-form"
              loading={form.formState.isSubmitting}
            >
              {copy.submit}
            </Button>
          </Field>
        </CardFooter>
      </Card>
    </>
  )
}
