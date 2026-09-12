import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import "./ContactSection.css";

type ContactSectionProps = {
  asMainHeading?: boolean;
};

export default function ContactSection({ asMainHeading = false }: ContactSectionProps) {
  const [status, setStatus] = useState<{ message: string; state: "error" | "idle" | "sending" | "success" }>({
    message: "",
    state: "idle",
  });
  const Heading = asMainHeading ? "h1" : "h2";
  const formspreeFormId = import.meta.env.VITE_FORMSPREE_FORM_ID as string | undefined;

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    if (!formspreeFormId) {
      setStatus({ message: "The enquiry service is not connected yet. Please email CCMG directly.", state: "error" });
      return;
    }

    const data = new FormData(form);
    setStatus({ message: "Sending your enquiry…", state: "sending" });

    try {
      const response = await fetch(`https://formspree.io/f/${formspreeFormId}`, {
        body: JSON.stringify({
          email: data.get("email"),
          marketingConsent: data.get("updates") === "on" ? "Yes" : "No",
          message: data.get("message"),
          name: data.get("name"),
          organisation: data.get("organisation"),
          serviceInterest: data.get("service"),
          _gotcha: data.get("_gotcha"),
          _subject: "New CCMG website enquiry",
        }),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
      });
      const result = (await response.json().catch(() => ({}))) as {
        error?: string;
        errors?: Array<{ message?: string }>;
      };
      if (response.status === 429) throw new Error("Please wait a moment before sending another enquiry.");
      if (!response.ok) throw new Error(result.errors?.[0]?.message || result.error || "We could not send your enquiry. Please try again.");

      form.reset();
      setStatus({ message: "Thank you — your enquiry has been received. A CCMG specialist will be in touch shortly.", state: "success" });
    } catch (error) {
      setStatus({
        message: error instanceof Error ? error.message : "We could not send your enquiry. Please try again or email CCMG directly.",
        state: "error",
      });
    }
  }

  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <div className="contact__inner page-shell">
        <motion.div
          className="contact__intro"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
        >
          <p className="section-kicker">Get In Touch</p>
          <Heading className="section-title" id="contact-title">
            Start the conversation.
          </Heading>
          <p>
            Connect with our specialised teams to discuss your strategic challenge. CCMG responds to qualified inquiries within 24 hours.
          </p>
        </motion.div>

        <motion.form
          className="contact__form"
          aria-busy={status.state === "sending"}
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ delay: 0.08 }}
        >
          <header>
            <h3>How can we help?</h3>
            <p>Share a concise brief and the CCMG team will review it with the right context and expertise.</p>
          </header>

          <div className="contact__fields">
            <label>
              <span>Name</span>
              <input type="text" name="name" placeholder="Jane Smith" required />
            </label>
            <label>
              <span>Email</span>
              <input type="email" name="email" placeholder="name@organisation.com" required />
            </label>
            <label className="contact__wide">
              <span>Organisation</span>
              <input type="text" name="organisation" placeholder="Your organisation" />
            </label>
            <label className="contact__wide">
              <span>You are interested in</span>
              <select name="service" defaultValue="">
                <option value="" disabled>Select a service...</option>
                <option>Strategic Local Partnerships &amp; Representation</option>
                <option>PPP &amp; Transaction Advisory</option>
                <option>Strategic Advisory</option>
                <option>Stakeholder Engagement</option>
                <option>Sustainability &amp; ESG</option>
                <option>Government, Regulatory &amp; Engineering Support</option>
              </select>
            </label>
            <label className="contact__wide">
              <span>Message</span>
              <textarea name="message" placeholder="Write your message..." rows={5} required minLength={10} maxLength={5000} />
            </label>
          </div>

          <label className="contact__honeypot" aria-hidden="true">
            <span>Website</span>
            <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
          </label>

          <label className="contact__consent">
            <input type="checkbox" name="updates" />
            <span>Yes, I’d like to receive relevant CCMG insights. Unsubscribe anytime.</span>
          </label>

          <button className="contact__submit" type="submit" disabled={status.state === "sending"}>
            {status.state === "sending" ? "Sending Enquiry" : "Send Enquiry"}
          </button>
          <p className={`contact__status contact__status--${status.state}`} aria-live="polite">
            {status.message}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
