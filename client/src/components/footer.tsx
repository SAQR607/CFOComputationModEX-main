import { Link } from "wouter";
import { Linkedin, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logoImage from "@assets/487448809_1089457703198883_5337816412306674089_n_1764853418373.jpg";

const quickLinks = [
  { href: "/about", label: "عن المسابقة" },
  { href: "/stages", label: "المراحل" },
  { href: "/sponsorship", label: "الرعاية" },
  { href: "/contact", label: "تواصل" },
];

const socialLinks = [
  { icon: Linkedin, href: "https://linkedin.com/company/modex", label: "LinkedIn" },
  { icon: Instagram, href: "https://instagram.com/modex", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/modex", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/@modex", label: "YouTube" },
];

export function Footer() {
  return (
    <footer className="bg-navy-500 dark:bg-navy-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <img
                src={logoImage}
                alt="ModEX Logo"
                className="h-12 w-auto bg-white rounded-md p-1"
                data-testid="img-footer-logo"
              />
            </Link>
            <p className="text-white/80 text-sm leading-relaxed mb-6">
              مسابقة CFO Computation - منصة تطوير قادة المالية المستقبليين من خلال النمذجة المالية والتحليل الاستراتيجي.
            </p>
            <p className="text-teal-400 font-medium text-sm">
              Where Strategy Meets Decision
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/80 hover:text-teal-400 transition-colors text-sm"
                    data-testid={`link-footer-${link.href.replace("/", "")}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">تواصل معنا</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <Mail className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span>info@modex-cfo.com</span>
              </li>
              <li className="flex items-center gap-3 text-white/80 text-sm">
                <Phone className="h-4 w-4 text-teal-400 flex-shrink-0" />
                <span dir="ltr">+966 50 000 0000</span>
              </li>
              <li className="flex items-start gap-3 text-white/80 text-sm">
                <MapPin className="h-4 w-4 text-teal-400 flex-shrink-0 mt-0.5" />
                <span>الرياض، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">تابعونا</h3>
            <div className="flex items-center gap-3 flex-wrap">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-500 transition-colors"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="h-5 w-5" />
                  <span className="sr-only">{social.label}</span>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="text-white/60 text-xs">
                سجّل بريدك الإلكتروني للحصول على آخر التحديثات
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-6 text-sm text-white/60">
              <Link href="/privacy" className="hover:text-teal-400 transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="hover:text-teal-400 transition-colors">
                الشروط والأحكام
              </Link>
            </div>
            <p className="text-sm text-white/80 text-center" data-testid="text-footer-credit">
              تصميم العرض والنسخة التجريبية: إبراهيم أحمد
            </p>
          </div>
          <p className="text-center text-white/40 text-xs mt-4">
            © {new Date().getFullYear()} ModEX - جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
}
