import { UserPlus, Mail, Upload, Star, Award, ArrowDown, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { journeySteps } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "user-plus": <UserPlus className="h-8 w-8" />,
  "mail": <Mail className="h-8 w-8" />,
  "upload": <Upload className="h-8 w-8" />,
  "star": <Star className="h-8 w-8" />,
  "award": <Award className="h-8 w-8" />,
};

const journeyDetails = [
  {
    title: "التسجيل",
    description: "ابدأ رحلتك بإنشاء حساب وتعبئة نموذج التسجيل",
    details: [
      "إنشاء حساب جديد بالبريد الإلكتروني",
      "تعبئة البيانات الشخصية والمهنية",
      "رفع السيرة الذاتية (اختياري)",
      "تأكيد التسجيل عبر البريد الإلكتروني",
    ],
  },
  {
    title: "استلام المهمة",
    description: "تلقي تفاصيل المهمة والمواد اللازمة للمرحلة",
    details: [
      "استلام إشعار ببدء المرحلة",
      "تحميل ملفات المهمة والبيانات",
      "مراجعة التعليمات والمتطلبات",
      "تحديد الموعد النهائي للتسليم",
    ],
  },
  {
    title: "رفع التسليم",
    description: "إرسال عملك عبر منصة التسليم الآمنة",
    details: [
      "التحقق من استيفاء جميع المتطلبات",
      "رفع الملفات المطلوبة",
      "تأكيد نجاح الرفع",
      "استلام إيصال التسليم",
    ],
  },
  {
    title: "تقييم الحكام",
    description: "مراجعة لجنة التحكيم لأعمالك وتقييمها",
    details: [
      "مراجعة شاملة من لجنة التحكيم",
      "تقييم بناءً على 5 معايير",
      "مقارنة مع المتسابقين الآخرين",
      "إعداد التقرير النهائي",
    ],
  },
  {
    title: "إصدار الشهادة",
    description: "الحصول على شهادتك والنتائج التفصيلية",
    details: [
      "إعلان النتائج النهائية",
      "إصدار الشهادة المعتمدة",
      "تقرير تفصيلي بالدرجات",
      "فرص التواصل مع المتميزين",
    ],
  },
];

export default function Journey() {
  return (
    <main className="pt-20">
      <section className="py-16 lg:py-20 bg-gradient-to-b from-navy-500 to-navy-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            رحلة المتسابق
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-journey-page-title">
            من التسجيل إلى الشهادة
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            خمس خطوات واضحة تأخذك في رحلة تطوير مهني متكاملة
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {journeyDetails.map((step, index) => (
              <div key={index} className="relative" data-testid={`journey-detail-${index + 1}`}>
                <div className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center flex-shrink-0 shadow-lg z-10">
                      {iconMap[journeySteps[index].icon]}
                    </div>
                    {index < journeyDetails.length - 1 && (
                      <div className="w-0.5 h-full bg-primary/20 my-4 flex items-center justify-center relative">
                        <ArrowDown className="h-5 w-5 text-primary/40 absolute" />
                      </div>
                    )}
                  </div>

                  <Card className="flex-1 mb-8 border-card-border bg-card">
                    <CardContent className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <Badge variant="secondary">الخطوة {index + 1}</Badge>
                        <h3 className="text-xl font-bold text-foreground">
                          {step.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {step.details.map((detail, detailIndex) => (
                          <div key={detailIndex} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                            <span className="text-sm text-foreground">{detail}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            معاينة منصة المتسابق
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-card-border bg-background">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <UserPlus className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">نموذج التسجيل</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  واجهة تسجيل بسيطة وسهلة الاستخدام
                </p>
                <div className="aspect-video bg-muted rounded-lg border border-border p-4">
                  <div className="space-y-3">
                    <div className="h-8 bg-card rounded border border-border" />
                    <div className="h-8 bg-card rounded border border-border" />
                    <div className="h-8 bg-card rounded border border-border" />
                    <div className="h-10 bg-primary/20 rounded" />
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-card-border bg-background">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Star className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">لوحة المتسابق</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  تتبع تقدمك ونتائجك في كل مرحلة
                </p>
                <div className="aspect-video bg-muted rounded-lg border border-border p-4">
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="h-16 bg-card rounded border border-border" />
                    <div className="h-16 bg-card rounded border border-border" />
                  </div>
                  <div className="h-20 bg-card rounded border border-border" />
                </div>
              </CardContent>
            </Card>

            <Card className="border-card-border bg-background">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Upload className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-foreground">نافذة رفع الملفات</h3>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  رفع آمن وسريع لتسليماتك
                </p>
                <div className="aspect-video bg-muted rounded-lg border border-border p-4 flex flex-col items-center justify-center">
                  <Upload className="h-8 w-8 text-muted-foreground mb-2" />
                  <div className="text-xs text-muted-foreground">اسحب الملفات هنا</div>
                  <div className="h-6 w-24 bg-primary/20 rounded mt-3" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
