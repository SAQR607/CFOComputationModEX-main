import { ClipboardCheck, Calculator, TrendingUp, Users, Clock, FileText, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { competitionStages } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "clipboard-check": <ClipboardCheck className="h-10 w-10" />,
  "calculator": <Calculator className="h-10 w-10" />,
  "trending-up": <TrendingUp className="h-10 w-10" />,
  "users": <Users className="h-10 w-10" />,
};

const stageDetails = [
  {
    duration: "يومان",
    format: "اختبار إلكتروني",
    deliverables: ["إجابات الاختبار", "تحليل بيانات أساسي"],
  },
  {
    duration: "أسبوع واحد",
    format: "دراسة حالة",
    deliverables: ["نموذج مالي Excel", "تقرير تحليلي مكتوب"],
  },
  {
    duration: "3 أيام",
    format: "محاكاة تفاعلية",
    deliverables: ["قرارات استراتيجية موثقة", "خطة عمل"],
  },
  {
    duration: "يوم واحد",
    format: "عرض تقديمي حي",
    deliverables: ["عرض PowerPoint", "جلسة أسئلة وأجوبة"],
  },
];

export default function Stages() {
  return (
    <main className="pt-20">
      <section className="py-16 lg:py-20 bg-gradient-to-b from-navy-500 to-navy-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            مراحل المسابقة
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-stages-page-title">
            أربع مراحل نحو القمة
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            رحلة تطوير مهني متكاملة تختبر مهاراتك المالية والاستراتيجية عبر تحديات متصاعدة
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {competitionStages.map((stage, index) => (
              <Card
                key={stage.id}
                className="border-card-border bg-card overflow-visible"
                data-testid={`stage-detail-${stage.id}`}
              >
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-3 gap-0">
                    <div className="p-8 bg-primary/5 border-b lg:border-b-0 lg:border-l border-border flex flex-col justify-center">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-primary text-primary-foreground flex items-center justify-center">
                          {iconMap[stage.icon]}
                        </div>
                        <div>
                          <div className="text-4xl font-bold text-primary">
                            {stage.id}
                          </div>
                          <div className="text-muted-foreground text-sm">المرحلة</div>
                        </div>
                      </div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {stage.titleAr}
                      </h3>
                      <p className="text-primary font-medium">
                        {stage.titleEn}
                      </p>
                    </div>

                    <div className="p-8 lg:col-span-2">
                      <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                        {stage.descriptionAr}
                      </p>

                      <div className="grid sm:grid-cols-3 gap-6 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <Clock className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">المدة</div>
                            <div className="font-medium text-foreground">
                              {stageDetails[index].duration}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <FileText className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">الشكل</div>
                            <div className="font-medium text-foreground">
                              {stageDetails[index].format}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                            <Target className="h-5 w-5 text-muted-foreground" />
                          </div>
                          <div>
                            <div className="text-xs text-muted-foreground">الوزن</div>
                            <div className="font-bold text-primary text-lg">
                              {stage.scoringWeight}%
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <h4 className="font-bold text-foreground mb-3">المتطلبات</h4>
                          <ul className="space-y-2">
                            {stage.requirements.map((req, reqIndex) => (
                              <li key={reqIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-bold text-foreground mb-3">التسليمات</h4>
                          <ul className="space-y-2">
                            {stageDetails[index].deliverables.map((del, delIndex) => (
                              <li key={delIndex} className="flex items-center gap-2 text-sm text-muted-foreground">
                                <div className="w-1.5 h-1.5 rounded-full bg-teal-500 flex-shrink-0" />
                                {del}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            استعد للتحدي
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            كل مرحلة تبني على ما سبقها، مما يخلق تجربة تعليمية متكاملة تعدك لدور المدير المالي التنفيذي
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-4 bg-background rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary mb-1">4</div>
              <div className="text-muted-foreground text-sm">مراحل</div>
            </div>
            <div className="p-4 bg-background rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary mb-1">100%</div>
              <div className="text-muted-foreground text-sm">تقييم شامل</div>
            </div>
            <div className="p-4 bg-background rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary mb-1">~3</div>
              <div className="text-muted-foreground text-sm">أسابيع</div>
            </div>
            <div className="p-4 bg-background rounded-xl border border-border">
              <div className="text-3xl font-bold text-primary mb-1">5</div>
              <div className="text-muted-foreground text-sm">معايير تقييم</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
