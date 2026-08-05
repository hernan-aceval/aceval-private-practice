"use client";

import { useState } from "react";
type Language = "de" | "es" | "en";

type ContactFormProps = {
  language?: Language;
};

const translations = {
  de: {
    name: "Name",
    email: "E-Mail-Adresse",
    phone: "Telefonnummer",
    optional: "optional",
    subject: "Anliegen",
    select: "Bitte auswählen",
    appointment: "Terminanfrage",
    telemedicine: "Telemedizinische Beratung",
    general: "Allgemeine organisatorische Anfrage",
    message: "Ihre Nachricht",
    privacyBefore: "Ich habe die",
    privacyLink: "Datenschutzhinweise",
    privacyAfter: "zur Kontaktaufnahme zur Kenntnis genommen.",
    submit: "Anfrage absenden",
    sending: "Wird versendet …",
    success:
      "Vielen Dank. Ihre Anfrage wurde erfolgreich übermittelt. Sie erhalten zeitnah eine persönliche Rückmeldung.",
    error:
      "Die Anfrage konnte momentan nicht versendet werden. Bitte versuchen Sie es später erneut.",
    required:
      "Mit * gekennzeichnete Felder sind Pflichtfelder. Über dieses Formular dürfen keine medizinischen Befunde oder vertraulichen Gesundheitsdaten übermittelt werden.",
  },

  es: {
    name: "Nombre",
    email: "Correo electrónico",
    phone: "Número de teléfono",
    optional: "opcional",
    subject: "Motivo de la consulta",
    select: "Seleccione una opción",
    appointment: "Solicitud de cita",
    telemedicine: "Consulta por telemedicina",
    general: "Consulta organizativa general",
    message: "Su mensaje",
    privacyBefore: "He leído y acepto la",
    privacyLink: "información sobre protección de datos",
    privacyAfter: "relativa al contacto.",
    submit: "Enviar solicitud",
    sending: "Enviando …",
    success:
      "Muchas gracias. Su solicitud ha sido enviada correctamente. Recibirá una respuesta personal a la mayor brevedad posible.",
    error:
      "La solicitud no ha podido enviarse en este momento. Inténtelo de nuevo más tarde.",
    required:
      "Los campos marcados con * son obligatorios. No envíe informes médicos ni datos de salud confidenciales mediante este formulario.",
  },

  en: {
    name: "Name",
    email: "Email address",
    phone: "Telephone number",
    optional: "optional",
    subject: "Reason for contacting us",
    select: "Please select",
    appointment: "Appointment request",
    telemedicine: "Telemedicine consultation",
    general: "General organisational enquiry",
    message: "Your message",
    privacyBefore: "I have read and accept the",
    privacyLink: "privacy information",
    privacyAfter: "regarding contact enquiries.",
    submit: "Send request",
    sending: "Sending …",
    success:
      "Thank you. Your request has been submitted successfully. You will receive a personal response shortly.",
    error:
      "Your request could not be sent at this time. Please try again later.",
    required:
      "Fields marked with * are required. Do not submit medical reports or confidential health information through this form.",
  },
};
type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm({
  language = "de",
}: ContactFormProps) {
  const t = translations[language];
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(
  event: React.SubmitEvent<HTMLFormElement>
) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("sending");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || t.error);
      }

      form.reset();
      setStatus("success");
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : t.error);
    }
  }
  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-5">
      <div>
       <label htmlFor="name" className="mb-2 block text-sm font-semibold">
  {t.name} *
</label>

        <input
          id="name"
          name="name"
          type="text"
          required
          maxLength={120}
          autoComplete="name"
          className="w-full rounded-xl border border-white/30 bg-white px-4 py-3 text-[#2D3A66] outline-none transition focus:border-[#DCE3EE] focus:ring-2 focus:ring-white/40"
        />
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-semibold">
  {t.email} *
</label>

        <input
          id="email"
          name="email"
          type="email"
          required
          maxLength={160}
          autoComplete="email"
          className="w-full rounded-xl border border-white/30 bg-white px-4 py-3 text-[#2D3A66] outline-none transition focus:border-[#DCE3EE] focus:ring-2 focus:ring-white/40"
        />
      </div>

      <div>
       <label htmlFor="phone" className="mb-2 block text-sm font-semibold">
  {t.phone}
  <span className="ml-2 font-normal text-[#EAF3FB]">
    ({t.optional})
  </span>
</label>

        <input
          id="phone"
          name="phone"
          type="tel"
          maxLength={40}
          autoComplete="tel"
          className="w-full rounded-xl border border-white/30 bg-white px-4 py-3 text-[#2D3A66] outline-none transition focus:border-[#DCE3EE] focus:ring-2 focus:ring-white/40"
        />
      </div>

      <div>
        <label htmlFor="subject" className="mb-2 block text-sm font-semibold">
  {t.subject} *
</label>

        <select
          id="subject"
          name="subject"
          required
          defaultValue=""
          className="w-full rounded-xl border border-white/30 bg-white px-4 py-3 text-[#2D3A66] outline-none transition focus:border-[#DCE3EE] focus:ring-2 focus:ring-white/40"
        >
          <option value="" disabled>
  {t.select}
</option>
<option value="Terminanfrage">{t.appointment}</option>
<option value="Videosprechstunde">{t.telemedicine}</option>
<option value="Organisatorische Anfrage">{t.general}</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-semibold">
  {t.message} *
</label>

        <textarea
          id="message"
          name="message"
          required
          rows={6}
          maxLength={1500}
          className="w-full resize-y rounded-xl border border-white/30 bg-white px-4 py-3 text-[#2D3A66] outline-none transition focus:border-[#DCE3EE] focus:ring-2 focus:ring-white/40"
        />
      </div>

      <div className="hidden" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input
          id="website"
          name="website"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <label className="flex items-start gap-3 text-sm leading-6 text-[#EEF6FB]">
        <input
          name="privacy"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 shrink-0"
        />

        <span>
  {t.privacyBefore}{" "}
  <a
    href="/datenschutz"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold underline underline-offset-2"
  >
    {t.privacyLink}
  </a>{" "}
  {t.privacyAfter} *
</span>
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-white px-8 py-4 text-sm font-semibold text-[#5163A0] transition hover:bg-[#EEF6FB] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
       {status === "sending" ? t.sending : t.submit}
      </button>

      {status === "success" && (
        <div
          role="status"
          className="rounded-xl bg-emerald-50 p-4 text-sm leading-6 text-emerald-800"
        >
         {t.success}
        </div>
      )}

      {status === "error" && (
        <div
          role="alert"
          className="rounded-xl bg-red-50 p-4 text-sm leading-6 text-red-700"
        >
          {errorMessage}
        </div>
      )}

      <p className="text-xs leading-5 text-[#EAF3FB]">
       {t.required}
      </p>
    </form>
  );
}