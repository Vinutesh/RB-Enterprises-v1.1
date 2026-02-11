import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of projects do you specialize in?",
    answer: "We specialize in residential homes, commercial spaces, office interiors, and hospitality design. Our team brings expertise across architectural design, interior design, space planning, and decoration.",
  },
  {
    question: "How long does a typical project take?",
    answer: "Project timelines vary based on scope and complexity. A typical interior design project takes 3-6 months, while full architectural projects can take 12-24 months from concept to completion.",
  },
  {
    question: "Do you work with specific budgets?",
    answer: "Absolutely. We work with a wide range of budgets and tailor our approach to maximize value within your investment. During our initial consultation, we'll discuss your budget and create a plan that aligns with your financial goals.",
  },
  {
    question: "Can I be involved in the design process?",
    answer: "We strongly encourage client involvement! We believe the best results come from collaboration. You'll have regular check-ins, mood board reviews, and approval stages throughout the entire process.",
  },
  {
    question: "Do you offer sustainable design options?",
    answer: "Yes, sustainability is at the core of our practice. We incorporate eco-friendly materials, energy-efficient systems, and sustainable design principles into every project whenever possible.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm text-accent uppercase tracking-widest mb-2">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground font-display">
            Frequently asked questions
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`} className="bg-card border border-border rounded-xl px-6">
              <AccordionTrigger className="text-foreground text-left hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
