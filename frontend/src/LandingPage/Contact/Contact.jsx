import React, { useState } from 'react';
import { motion, MotionConfig } from 'framer-motion';
import { User, Mail, FileText, MessageSquare, ArrowUpRight } from 'lucide-react';

// Needs the Anton font (same one used in Home / About / Skills / Projects):
// <link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet" />
const DISPLAY_FONT = "'Anton', Impact, 'Arial Narrow Bold', sans-serif";

// --- Contact Data Array ---
// Keep your contact info here for easy updates.
const contactInfo = [
  {
    method: 'Email',
    value: 'sudeep.mern@gmail.com',
    href: 'mailto:sudeep.mern@gmail.com',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
  },
  {
    method: 'LinkedIn',
    value: 'https://www.linkedin.com/in/sudee-p',
    href: 'https://www.linkedin.com/in/sudee-p',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-8 w-8">
        <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.25 6.5 1.75 1.75 0 016.5 8.25zM19 19h-3v-4.75c0-1.4-.5-2.5-1.8-2.5-1 0-1.5.7-1.7 1.3-.1.2-.1.5-.1.8V19h-3v-9h3v1.3c.4-.7 1.3-1.4 2.7-1.4 3 0 3.5 2 3.5 4.6V19z" />
      </svg>
    ),
  },
  {
    method: 'Phone',
    value: '+91 7619536101',
    href: 'tel:+917619536101',

    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="h-8 w-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
  },
];

const EMAIL = contactInfo.find((c) => c.method === 'Email').value;

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const lineReveal = {
  hidden: { y: '105%' },
  visible: { y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const itemVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 100 } },
};

const fields = [
  { name: 'name', label: 'Your name', type: 'text', placeholder: 'John Doe', icon: User, autoComplete: 'name' },
  { name: 'email', label: 'Your email', type: 'email', placeholder: 'john@example.com', icon: Mail, autoComplete: 'email' },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: "Let's work together...", icon: FileText },
];

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setSent(false);
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  // No backend needed: this opens the visitor's email app with the message filled in.
  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = form.subject || `Message from ${form.name}`;
    const body = `${form.message}\n\n${form.name}\n${form.email}`;
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <MotionConfig reducedMotion="user">
      <section id="contact" className="scroll-mt-4 bg-orange-400 p-3 sm:p-6 lg:p-8">
        <div className="relative mx-auto grid w-full max-w-[1400px] overflow-hidden rounded-3xl bg-gradient-to-br from-orange-900 via-orange-700 to-orange-600 shadow-2xl lg:grid-cols-[0.9fr_1.2fr]">
          {/* Floating background shapes */}
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 top-1/3 h-[34rem] w-[34rem] rounded-full bg-orange-500/30 blur-3xl"
            animate={{ y: [0, -30, 0], x: [0, 20, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          />
          <motion.div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/4 top-1/2 h-[28rem] w-[28rem] rounded-full bg-amber-400/30 blur-3xl"
            animate={{ y: [0, 35, 0], x: [0, -25, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
          />

          {/* LEFT: statement */}
          <motion.div
            className="relative z-10 flex flex-col justify-between gap-10 px-6 py-10 sm:px-10 lg:px-12 lg:py-14"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <div>
              <motion.div
                variants={fadeUp}
                className="flex items-center gap-4 text-sm font-medium uppercase tracking-wider text-white"
              >
                Contact me
                <motion.span
                  className="h-px w-24 origin-left bg-white/60"
                  variants={{
                    hidden: { scaleX: 0 },
                    visible: { scaleX: 1, transition: { duration: 0.8, delay: 0.3 } },
                  }}
                />
              </motion.div>

              <h1
                style={{ fontFamily: DISPLAY_FONT }}
                className="mt-8 text-[4.5rem] font-normal uppercase leading-[0.92] text-white sm:text-[7rem] lg:text-[6.5rem] xl:text-[8rem]"
              >
                {['Get in', 'Touch'].map((line) => (
                  <span key={line} className="block overflow-hidden pb-1">
                    <motion.span variants={lineReveal} className="block">
                      {line}
                    </motion.span>
                  </span>
                ))}
              </h1>

              <motion.p
                variants={fadeUp}
                className="mt-8 max-w-sm text-xl leading-8 text-white"
              >
                I'm currently open to new opportunities. Feel free to reach out!
              </motion.p>

              <motion.a
                variants={fadeUp}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                href={`mailto:${EMAIL}`}
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-orange-600 shadow-[0_0_30px_rgba(255,255,255,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Email me
                <ArrowUpRight size={16} />
              </motion.a>
            </div>

            <motion.p
              variants={fadeUp}
              className="inline-flex w-fit items-center gap-3 rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-medium text-white backdrop-blur"
            >
              <span className="h-2.5 w-2.5 animate-pulse rounded-full bg-emerald-400" />
              Open to opportunities
            </motion.p>
          </motion.div>

          {/* RIGHT: white panel */}
          <motion.div
            className="relative z-10 m-3 rounded-3xl bg-white p-5 sm:p-8 lg:m-4 lg:p-9"
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
              Get in touch
            </p>
            <h2
              style={{ fontFamily: DISPLAY_FONT }}
              className="mt-1 text-[3.4rem] font-normal uppercase leading-[0.95] text-black sm:text-[5rem] xl:text-[5.5rem]"
            >
              Let's connect
            </h2>

            <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_1fr]">
              {/* Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="rounded-3xl bg-orange-50/70 p-5 sm:p-6"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                {fields.map((field) => {
                  const Icon = field.icon;
                  return (
                    <motion.label key={field.name} variants={fadeUp} className="mb-4 block">
                      <span className="mb-1.5 block text-sm font-semibold text-slate-900">
                        {field.label}
                      </span>
                      <span className="flex items-center rounded-xl border border-slate-200 bg-white px-4 transition-shadow focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-200">
                        <input
                          type={field.type}
                          name={field.name}
                          value={form[field.name]}
                          onChange={handleChange}
                          placeholder={field.placeholder}
                          autoComplete={field.autoComplete}
                          required={field.name !== 'subject'}
                          className="w-full bg-transparent py-3 text-sm text-slate-900 placeholder-slate-400 outline-none"
                        />
                        <Icon size={18} className="shrink-0 text-slate-400" aria-hidden="true" />
                      </span>
                    </motion.label>
                  );
                })}

                <motion.label variants={fadeUp} className="mb-5 block">
                  <span className="mb-1.5 block text-sm font-semibold text-slate-900">
                    Message
                  </span>
                  <span className="flex items-start rounded-xl border border-slate-200 bg-white px-4 transition-shadow focus-within:border-orange-400 focus-within:ring-2 focus-within:ring-orange-200">
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={4}
                      required
                      placeholder="Tell me about your project, opportunity or just say hi..."
                      className="w-full resize-none bg-transparent py-3 text-sm text-slate-900 placeholder-slate-400 outline-none"
                    />
                    <MessageSquare size={18} className="mt-3 shrink-0 text-slate-400" aria-hidden="true" />
                  </span>
                </motion.label>

                <motion.button
                  variants={fadeUp}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-orange-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-300/50 transition-colors hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                >
                  Send message
                  <ArrowUpRight size={16} />
                </motion.button>

                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-3 text-center text-xs text-slate-600"
                    role="status"
                  >
                    Opening your email app with your message. Nothing opened? Write to {EMAIL}.
                  </motion.p>
                )}
              </motion.form>

              {/* Contact info */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-orange-600">
                  Contact info
                </p>

                <motion.div
                  className="mt-4 space-y-3"
                  variants={stagger}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                >
                  {contactInfo.map((item) => {
                    const isExternal = item.href?.startsWith('http');

                    return (
                      <motion.a
                        key={item.method}
                        href={item.href}
                        {...(isExternal && {
                          target: '_blank',
                          rel: 'noopener noreferrer',
                        })}
                        variants={itemVariants}
                        whileHover={{ y: -4 }}
                        className="group flex items-center gap-4 rounded-2xl bg-orange-50/70 p-4 transition-shadow duration-300 hover:shadow-lg hover:shadow-orange-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-500"
                      >
                        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-orange-500 text-white transition-transform duration-300 group-hover:scale-110 [&>svg]:h-6 [&>svg]:w-6">
                          {item.icon}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-bold text-slate-900">
                            {item.method}
                          </span>
                          <span className="block break-all text-sm text-slate-600 transition-colors group-hover:text-orange-600">
                            {item.value}
                          </span>
                        </span>
                        <ArrowUpRight
                          size={18}
                          className="shrink-0 text-orange-500 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          aria-hidden="true"
                        />
                      </motion.a>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </MotionConfig>
  );
}

export default Contact;