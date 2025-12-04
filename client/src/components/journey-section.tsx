import { UserPlus, Mail, Upload, Star, Award, ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { journeySteps } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "user-plus": <UserPlus className="h-6 w-6" />,
  "mail": <Mail className="h-6 w-6" />,
  "upload": <Upload className="h-6 w-6" />,
  "star": <Star className="h-6 w-6" />,
  "award": <Award className="h-6 w-6" />,
};

export function JourneySection() {
  return (
    <section className="py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            رحلة المتسابق
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-journey-title">
            من التسجيل إلى الشهادة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            خمس خطوات واضحة تأخذك في رحلة تطوير مهني متكاملة
          </p>
        </div>

        <div className="hidden lg:block relative mb-16">
          <div className="absolute top-1/2 right-0 left-0 h-1 bg-primary/20 -translate-y-1/2" />
          <div className="flex items-center justify-between relative">
            {journeySteps.map((step, index) => (
              <div key={step.id} className="flex flex-col items-center relative">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center mb-4 relative z-10 shadow-lg">
                  {iconMap[step.icon]}
                </div>
                <h3 className="font-bold text-foreground text-center mb-1">
                  {step.titleAr}
                </h3>
                <p className="text-muted-foreground text-sm text-center max-w-[140px]">
                  {step.descriptionAr}
                </p>
                {index < journeySteps.length - 1 && (
                  <div className="absolute top-8 left-0 -translate-x-full w-full flex items-center justify-center">
                    <ArrowLeft className="h-5 w-5 text-primary/40" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="lg:hidden space-y-6">
          {journeySteps.map((step, index) => (
            <div key={step.id} className="flex items-start gap-4" data-testid={`journey-step-${step.id}`}>
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0">
                  {iconMap[step.icon]}
                </div>
                {index < journeySteps.length - 1 && (
                  <div className="w-0.5 h-12 bg-primary/20 mt-2" />
                )}
              </div>
              <div className="pt-2">
                <h3 className="font-bold text-foreground mb-1">{step.titleAr}</h3>
                <p className="text-muted-foreground text-sm">{step.descriptionAr}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <UserPlus className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-bold text-foreground">نموذج تسجيل تجريبي</h4>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              واجهة تسجيل سهلة الاستخدام تتيح للمتسابقين إنشاء حساباتهم بسرعة
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
              <span className="text-muted-foreground text-sm">معاينة النموذج</span>
            </div>
          </div>

          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Star className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-bold text-foreground">لوحة المتسابق</h4>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              لوحة تحكم شاملة لمتابعة التقدم والمهام والنتائج
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
              <span className="text-muted-foreground text-sm">معاينة اللوحة</span>
            </div>
          </div>

          <div className="bg-background rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Upload className="h-5 w-5 text-primary" />
              </div>
              <h4 className="font-bold text-foreground">نافذة رفع الملف</h4>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              واجهة رفع آمنة وسريعة للتسليمات المطلوبة
            </p>
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center border border-border">
              <span className="text-muted-foreground text-sm">معاينة الرفع</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
