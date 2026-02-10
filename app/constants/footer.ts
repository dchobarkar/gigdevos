import { CONTACT_LINKS } from "./contact";

export type FooterLinkKey = "email" | "linkedin" | "x" | "github";

export const FOOTER_CONTENT = {
  brand: "GigDevOs",
  copyright: `© ${new Date().getFullYear()} GigDevOs. All rights reserved.`,
  links: [
    {
      key: "email" as FooterLinkKey,
      label: "Email",
      href: CONTACT_LINKS.email.href,
    },
    {
      key: "linkedin" as FooterLinkKey,
      label: "LinkedIn",
      href: CONTACT_LINKS.linkedin.href,
    },
    { key: "x" as FooterLinkKey, label: "X", href: CONTACT_LINKS.x.href },
    {
      key: "github" as FooterLinkKey,
      label: "GitHub",
      href: CONTACT_LINKS.github.href,
    },
  ],
};
