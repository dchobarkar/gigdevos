/**
 * Contact section — per contact-instructions.md.
 * No form; direct channels only. Email primary; LinkedIn, GitHub, X for trust.
 */

const EMAIL_ADDRESS = "dchobarkar@gmail.com";

export const CONTACT_LINKS = {
  email: {
    label: EMAIL_ADDRESS,
    href: `mailto:${EMAIL_ADDRESS}?subject=Project Inquiry`,
  },
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dchobarkar/",
  },
  x: {
    label: "X",
    href: "https://x.com/darshan_code",
  },
  github: {
    label: "GitHub",
    href: "https://github.com/dchobarkar",
  },
};

/** Section header per contact-instructions.md */
export const CONTACT_SECTION = {
  title: "Start a build",
  description:
    "Have a product idea, dashboard, or website you need shipped fast? Reach out directly — I'll get back with timelines and next steps.",
};

/** Primary CTA — email only */
export const EMAIL_CTA = {
  label: "Send project inquiry",
  href: CONTACT_LINKS.email.href,
};

/** Response expectation microcopy */
export const RESPONSE_MICROCOPY = "I typically respond within 24 hours.";

/** Platform routing grid — trust/discovery (no email; email is primary CTA above) */
export const PLATFORM_ROUTING = [
  {
    key: "linkedin" as const,
    name: "LinkedIn",
    ctaLabel: "View LinkedIn profile",
    href: CONTACT_LINKS.linkedin.href,
  },
  {
    key: "github" as const,
    name: "GitHub",
    ctaLabel: "Explore code & repositories",
    href: CONTACT_LINKS.github.href,
  },
  {
    key: "x" as const,
    name: "X",
    ctaLabel: "Follow on X",
    href: CONTACT_LINKS.x.href,
  },
];
