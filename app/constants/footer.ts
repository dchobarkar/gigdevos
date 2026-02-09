import { CONTACT_LINKS } from "./contact";

export const FOOTER_CONTENT = {
  brand: "gigdevos",
  copyright: `© ${new Date().getFullYear()} gigdevos. All rights reserved.`,
  /** Same links as contact — single source of truth */
  links: [
    { label: "Email", href: CONTACT_LINKS.email.href },
    { label: "LinkedIn", href: CONTACT_LINKS.linkedin.href },
    { label: "X", href: CONTACT_LINKS.x.href },
    { label: "GitHub", href: CONTACT_LINKS.github.href },
  ],
};
