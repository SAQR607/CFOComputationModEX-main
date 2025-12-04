import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const contactMutation = useMutation({
    mutationFn: async (data: { name: string; email: string; phone?: string; message: string }) => {
      return apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      setIsSubmitted(true);
      toast({
        title: "تم الإرسال بنجاح",
        description: "سنتواصل معك قريباً",
      });
    },
    onError: () => {
      toast({
        title: "حدث خطأ",
        description: "يرجى المحاولة مرة أخرى",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string || undefined,
      message: formData.get("message") as string,
    };
    contactMutation.mutate(data);
  };

  if (isSubmitted) {
    return (
      <section className="py-20 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="border-card-border">
            <CardContent className="p-12 text-center">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-teal-500/10 flex items-center justify-center">
                <CheckCircle className="h-10 w-10 text-teal-500" />
              </div>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                شكراً لتواصلك معنا!
              </h2>
              <p className="text-muted-foreground mb-6">
                لقد استلمنا رسالتك وسيتواصل معك فريقنا خلال 24-48 ساعة.
              </p>
              <Button onClick={() => setIsSubmitted(false)}>
                إرسال رسالة أخرى
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            تواصل معنا
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-contact-title">
            نسعد بتواصلكم
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            لديك سؤال أو استفسار؟ فريقنا جاهز للإجابة على جميع أسئلتك
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <Card className="border-card-border bg-card">
              <CardContent className="p-6 lg:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-right block">
                        الاسم الكامل *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        placeholder="أدخل اسمك الكامل"
                        className="text-right"
                        data-testid="input-contact-name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-right block">
                        البريد الإلكتروني *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="example@domain.com"
                        dir="ltr"
                        className="text-left"
                        data-testid="input-contact-email"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-right block">
                      رقم الهاتف
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+966 50 000 0000"
                      dir="ltr"
                      className="text-left"
                      data-testid="input-contact-phone"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-right block">
                      الموضوع *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="موضوع الرسالة"
                      className="text-right"
                      data-testid="input-contact-subject"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-right block">
                      الرسالة *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="اكتب رسالتك هنا..."
                      className="min-h-[150px] text-right resize-none"
                      data-testid="input-contact-message"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full gap-2"
                    disabled={contactMutation.isPending}
                    data-testid="button-contact-submit"
                  >
                    {contactMutation.isPending ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        جارٍ الإرسال...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4" />
                        إرسال الرسالة
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-bold text-foreground text-lg mb-6">
                معلومات التواصل
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">البريد الإلكتروني</p>
                    <a
                      href="mailto:info@modex-cfo.com"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                      dir="ltr"
                    >
                      info@modex-cfo.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">الهاتف</p>
                    <a
                      href="tel:+966500000000"
                      className="text-foreground font-medium hover:text-primary transition-colors"
                      dir="ltr"
                    >
                      +966 50 000 0000
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-muted-foreground text-sm">الموقع</p>
                    <p className="text-foreground font-medium">
                      الرياض، المملكة العربية السعودية
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-6 border border-primary/20">
              <h3 className="font-bold text-foreground text-lg mb-3">
                تواصل سريع عبر واتساب
              </h3>
              <p className="text-muted-foreground text-sm mb-4">
                للحصول على رد سريع، يمكنك التواصل معنا مباشرة عبر واتساب
              </p>
              <Button
                variant="outline"
                className="w-full gap-2 border-primary/30 hover:bg-primary/10"
                asChild
              >
                <a
                  href="https://wa.me/966500000000"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-testid="link-whatsapp"
                >
                  <svg
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  تواصل عبر واتساب
                </a>
              </Button>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border">
              <h3 className="font-bold text-foreground text-lg mb-4">
                ساعات العمل
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between gap-4 flex-wrap">
                  <span className="text-muted-foreground">الأحد - الخميس</span>
                  <span className="text-foreground font-medium" dir="ltr">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between gap-4 flex-wrap">
                  <span className="text-muted-foreground">الجمعة - السبت</span>
                  <span className="text-foreground font-medium">مغلق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
