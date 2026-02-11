import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Mail, Phone } from "lucide-react";
import { OWNER_EMAIL, whatsappHref } from "@/lib/contact";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type ContactForm = {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  message: string;
};

const initialValues: ContactForm = {
  name: "",
  email: "",
  phone: "",
  projectType: "",
  budget: "",
  message: "",
};

const Contact = () => {
  const [formValues, setFormValues] = useState<ContactForm>(initialValues);

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = encodeURIComponent(`New enquiry from ${formValues.name || "website visitor"}`);
    const body = encodeURIComponent(
      [
        `Name: ${formValues.name}`,
        `Email: ${formValues.email}`,
        `Phone: ${formValues.phone}`,
        `Project type: ${formValues.projectType}`,
        `Estimated budget: ${formValues.budget}`,
        "",
        "Project details:",
        formValues.message,
      ].join("\n")
    );

    window.location.href = `mailto:${OWNER_EMAIL}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="min-h-screen bg-background px-4 pb-16 pt-24">
      <div className="container mx-auto max-w-5xl">
        <Button asChild variant="ghost" className="mb-6 px-0 text-muted-foreground hover:bg-transparent hover:text-foreground">
          <Link to="/">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to home
          </Link>
        </Button>

        <div className="grid gap-8 rounded-2xl border border-border bg-card p-6 md:grid-cols-[1fr_1.4fr] md:p-8">
          <section>
            <p className="mb-2 text-sm uppercase tracking-widest text-accent">Contact us</p>
            <h1 className="mb-4 font-display text-3xl font-bold text-foreground md:text-4xl">Tell us about your project</h1>
            <p className="mb-8 text-muted-foreground">
              Fill in your details and your default email app will open a pre-filled enquiry addressed to our team.
            </p>

            <div className="space-y-4 text-sm">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" /> {OWNER_EMAIL}
              </p>
              <p className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4 text-accent" /> +1 (555) 123-4567
              </p>
              <a href={whatsappHref} target="_blank" rel="noreferrer" className="inline-flex text-accent hover:underline">
                Prefer WhatsApp? Start chat
              </a>
            </div>
          </section>

          <form onSubmit={onSubmit} className="space-y-4" aria-label="Contact form">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                required
                placeholder="Full name"
                value={formValues.name}
                onChange={(event) => setFormValues((prev) => ({ ...prev, name: event.target.value }))}
              />
              <Input
                required
                type="email"
                placeholder="Email address"
                value={formValues.email}
                onChange={(event) => setFormValues((prev) => ({ ...prev, email: event.target.value }))}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                required
                placeholder="Phone number"
                value={formValues.phone}
                onChange={(event) => setFormValues((prev) => ({ ...prev, phone: event.target.value }))}
              />
              <Input
                placeholder="Project type (Residential, Office, etc.)"
                value={formValues.projectType}
                onChange={(event) => setFormValues((prev) => ({ ...prev, projectType: event.target.value }))}
              />
            </div>

            <Input
              placeholder="Estimated budget"
              value={formValues.budget}
              onChange={(event) => setFormValues((prev) => ({ ...prev, budget: event.target.value }))}
            />

            <Textarea
              required
              rows={6}
              placeholder="Share your goals, preferred timeline, and any design references."
              value={formValues.message}
              onChange={(event) => setFormValues((prev) => ({ ...prev, message: event.target.value }))}
            />

            <Button type="submit" size="lg" className="w-full rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
              Send enquiry
            </Button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
