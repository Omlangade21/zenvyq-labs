import { site } from "@/config/site";

export type SubmitResult = "sent" | "email";

const DEFAULT_FORM_ENDPOINT = "https://formspree.io/f/xeaevgg";

export async function submitLead(
  kind: string,
  data: Record<string, string>,
): Promise<SubmitResult> {
  const formEndpoint = site.formEndpoint || DEFAULT_FORM_ENDPOINT;

  if (formEndpoint) {
    const formData = new FormData();

    Object.entries({ formType: kind, ...data }).forEach(([key, value]) => {
      if (key !== "_gotcha" && value) {
        formData.append(key, value);
      }
    });

    const res = await fetch(formEndpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    });

    if (!res.ok) {
      let message = "Request failed";
      try {
        const result = (await res.json()) as {
          errors?: Array<{ message?: string }>;
        };
        if (result.errors?.length) {
          message =
            result.errors
              .map((error) => error.message)
              .filter(Boolean)
              .join(", ") || message;
        }
      } catch {
        // Keep the generic error when Formspree doesn't return JSON.
      }
      throw new Error(message);
    }

    return "sent";
  }

  const body = Object.entries(data)
    .filter(([k, v]) => v && k !== "_gotcha")
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n");
  const subject = kind === "audit" ? "Audit request" : "Project enquiry";
  window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  return "email";
}
