import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

function getText(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = getText(formData, "name");
    const email = getText(formData, "email");
    const phone = getText(formData, "phone");
    const subject = getText(formData, "subject");
    const message = getText(formData, "message");
    const website = getText(formData, "website");
    const privacy = getText(formData, "privacy");

    // Unsichtbares Honeypot-Feld gegen einfache Bots
    if (website) {
      return NextResponse.json({ success: true });
    }

    if (
      !name ||
      !email ||
      !subject ||
      !message ||
      !privacy
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Bitte füllen Sie alle Pflichtfelder aus.",
        },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
        },
        { status: 400 }
      );
    }

    if (
      name.length > 120 ||
      email.length > 160 ||
      phone.length > 40 ||
      subject.length > 100 ||
      message.length > 1500
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Eine oder mehrere Eingaben sind zu lang.",
        },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const mailTo = process.env.MAIL_TO;

    if (
      !smtpHost ||
      !smtpPort ||
      !smtpUser ||
      !smtpPass ||
      !mailTo
    ) {
      console.error("SMTP-Konfiguration ist unvollständig.");

      return NextResponse.json(
        {
          success: false,
          message:
            "Der E-Mail-Versand ist derzeit nicht vollständig eingerichtet.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const submittedAt = new Intl.DateTimeFormat("de-DE", {
      dateStyle: "full",
      timeStyle: "short",
      timeZone: "Europe/Berlin",
    }).format(new Date());

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || "Nicht angegeben");
    const safeSubject = escapeHtml(subject);
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br>");

    await transporter.sendMail({
      from: `"Kontaktformular Privatpraxis Aceval" <${smtpUser}>`,
      to: mailTo,
      replyTo: email,
      subject: `Neue Kontaktanfrage: ${subject}`,
      text: [
        "Neue Kontaktanfrage über aceval.com",
        "",
        `Name: ${name}`,
        `E-Mail: ${email}`,
        `Telefon: ${phone || "Nicht angegeben"}`,
        `Anliegen: ${subject}`,
        `Eingang: ${submittedAt}`,
        "",
        "Nachricht:",
        message,
      ].join("\n"),
      html: `
        <div style="font-family: Arial, sans-serif; color: #2D3A66; line-height: 1.6;">
          <h2 style="color: #5163A0;">
            Neue Kontaktanfrage über aceval.com
          </h2>

          <table
            cellpadding="8"
            cellspacing="0"
            style="border-collapse: collapse; width: 100%; max-width: 650px;"
          >
            <tr>
              <td style="font-weight: bold; border-bottom: 1px solid #dce3ee;">
                Name
              </td>
              <td style="border-bottom: 1px solid #dce3ee;">
                ${safeName}
              </td>
            </tr>

            <tr>
              <td style="font-weight: bold; border-bottom: 1px solid #dce3ee;">
                E-Mail
              </td>
              <td style="border-bottom: 1px solid #dce3ee;">
                ${safeEmail}
              </td>
            </tr>

            <tr>
              <td style="font-weight: bold; border-bottom: 1px solid #dce3ee;">
                Telefon
              </td>
              <td style="border-bottom: 1px solid #dce3ee;">
                ${safePhone}
              </td>
            </tr>

            <tr>
              <td style="font-weight: bold; border-bottom: 1px solid #dce3ee;">
                Anliegen
              </td>
              <td style="border-bottom: 1px solid #dce3ee;">
                ${safeSubject}
              </td>
            </tr>

            <tr>
              <td style="font-weight: bold; border-bottom: 1px solid #dce3ee;">
                Eingang
              </td>
              <td style="border-bottom: 1px solid #dce3ee;">
                ${escapeHtml(submittedAt)}
              </td>
            </tr>
          </table>

          <h3 style="margin-top: 28px;">Nachricht</h3>

          <div
            style="
              max-width: 650px;
              padding: 18px;
              background: #f3f4f7;
              border-radius: 12px;
            "
          >
            ${safeMessage}
          </div>

          <p style="margin-top: 24px; font-size: 12px; color: #66708A;">
            Diese Nachricht wurde über das Kontaktformular Ihrer Praxiswebseite
            versendet. Antworten Sie über die oben angegebene E-Mail-Adresse.
          </p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Ihre Anfrage wurde erfolgreich übermittelt.",
    });
  } catch (error) {
    console.error(
      "Fehler beim Versand der Kontaktanfrage:",
      error instanceof Error ? error.message : "Unbekannter Fehler"
    );

    return NextResponse.json(
      {
        success: false,
        message:
          "Die Anfrage konnte momentan nicht versendet werden. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}