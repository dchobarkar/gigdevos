/**
 * All contact and profile links. Email + LinkedIn are primary communication;
 * X and GitHub are profile links.
 */
export const CONTACT_LINKS = {
  email: {
    label: "dchobarkar@gmail.com",
    href: "mailto:dchobarkar@gmail.com",
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

/** Primary contact (email, LinkedIn) — main communication options */
export const PRIMARY_CONTACT = ["email", "linkedin"] as const;

/** Profile links (X, GitHub) — find me on */
export const PROFILE_LINKS = ["x", "github"] as const;

export const CONTACT_SECTION = {
  title: "Let's ship something fast",
  description: "Start a project, hire me for a build, or just say hi.",
  primaryLabel: "Get in touch",
  profilesLabel: "Also on",
};
