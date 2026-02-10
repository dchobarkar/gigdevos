"use client";

import { motion } from "framer-motion";

import { SERVICES, CAPABILITY_SECTION } from "../constants/services";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

const Capability = () => {
  return (
    <section
      id="services"
      className="relative py-24 px-6 grid-overlay"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-6xl">
        <motion.h2
          id="services-heading"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl font-bold text-foreground mb-4"
        >
          {CAPABILITY_SECTION.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-muted max-w-xl mb-16"
        >
          {CAPABILITY_SECTION.description}
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service) => (
            <motion.article
              key={service.title}
              variants={item}
              className="group glass-card rounded-xl p-6 border border-border hover-glow transition-shadow duration-200"
            >
              <div
                className="mb-4 inline-flex rounded-lg p-2 text-accent-cyan transition-transform duration-200 group-hover:scale-110"
                aria-hidden
              >
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                {service.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Capability;
