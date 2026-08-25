import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import "./ContactSection.css";

type ContactSectionProps = {
  asMainHeading?: boolean;
};

export default function ContactSection({ asMainHeading = false }: ContactSectionProps) {
  const [submitted, setSubmitted] = useState(false);
  const Heading = asMainHeading ? "h1" : "h2";

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.reportValidity()) return;
    setSubmitted(true);
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
              <input type="email" name="email" placeholder="jane@framer.com" required />
            </label>
            <label className="contact__wide">
              <span>Organisation</span>
              <input type="text" name="organisation" placeholder="Your organisation" />
            </label>
            <label className="contact__wide">
              <span>You are interested in</span>
              <select name="service" defaultValue="">
                <option value="" disabled>Select a service...</option>
                <option>PPP &amp; Transaction Advisory</option>
                <option>Strategic Advisory</option>
                <option>Stakeholder Engagement</option>
                <option>Sustainability &amp; ESG</option>
                <option>Government, Regulatory &amp; Engineering Support</option>
              </select>
            </label>
            <label className="contact__wide">
              <span>message</span>
              <textarea name="message" placeholder="Write your message..." rows={5} />
            </label>
          </div>

          <label className="contact__consent">
            <input type="checkbox" name="updates" />
            <span>Yes, I’d like to receive relevant CCMG insights. Unsubscribe anytime.</span>
          </label>

          <button className="contact__submit" type="submit">
            {submitted ? "Enquiry Received" : "Send Enquiry"}
          </button>
          <p className="contact__status" aria-live="polite">
            {submitted ? "Thanks — this preview form is not connected to the secure CMS endpoint yet." : ""}
          </p>
        </motion.form>
      </div>
    </section>
  );
}
