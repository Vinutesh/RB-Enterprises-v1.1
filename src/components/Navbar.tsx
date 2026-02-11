import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="inline-flex items-center gap-2" aria-label="RB Enterprises home">
          <img src="/rb-logo.svg" alt="RB Enterprises logo" className="h-10 w-auto" loading="eager" />
          <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:inline">RB Enterprises</span>
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <Button asChild variant="outline" className="rounded-full border-foreground/20 px-6 text-foreground hover:bg-foreground hover:text-background">
            <Link to="/contact">Contact us</Link>
          </Button>
        </div>

        <button className="text-foreground md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background px-4 pb-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="block py-3 text-sm text-muted-foreground transition-colors hover:text-accent"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button asChild variant="outline" className="mt-2 w-full rounded-full border-foreground/20 text-foreground">
            <Link to="/contact" onClick={() => setOpen(false)}>
              Contact us
            </Link>
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
