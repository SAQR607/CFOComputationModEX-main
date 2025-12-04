import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import logoImage from "@assets/487448809_1089457703198883_5337816412306674089_n_1764853418373.jpg";

const navItems = [
  { href: "/", label: "الرئيسية" },
  { href: "/about", label: "عن المسابقة" },
  { href: "/stages", label: "المراحل" },
  { href: "/journey", label: "رحلة المتسابق" },
  { href: "/scoring", label: "التحكيم" },
  { href: "/certificates", label: "الشهادات" },
  { href: "/sponsorship", label: "الرعاية" },
  { href: "/contact", label: "تواصل" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={logoImage}
              alt="ModEX Logo"
              className="h-10 w-auto"
              data-testid="img-logo"
            />
            <span className="font-bold text-lg text-navy-500 dark:text-white hidden sm:block">
              CFO Computation
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 flex-wrap justify-end">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors hover-elevate ${
                  location === item.href
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/80 hover:text-foreground"
                }`}
                data-testid={`link-nav-${item.href.replace("/", "") || "home"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link href="/contact" className="hidden sm:block">
              <Button variant="default" size="sm" data-testid="button-cta-header">
                طلب عرض
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsOpen(!isOpen)}
              data-testid="button-mobile-menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                    location === item.href
                      ? "bg-primary/10 text-primary"
                      : "text-foreground/80 hover:bg-accent"
                  }`}
                  data-testid={`link-mobile-nav-${item.href.replace("/", "") || "home"}`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-4 px-4">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full" data-testid="button-mobile-cta">
                    طلب عرض
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
