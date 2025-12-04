import { Target, Users, TrendingUp, Award, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const targetAudience = [
  { icon: <TrendingUp className="h-6 w-6" />, title: "محللون ماليون", description: "متخصصون في التحليل المالي والتقارير" },
  { icon: <Target className="h-6 w-6" />, title: "متخصصو FP&A", description: "خبراء التخطيط والتحليل المالي" },
  { icon: <Users className="h-6 w-6" />, title: "طلاب MBA", description: "طلاب ماجستير إدارة الأعمال والمالية" },
  { icon: <Award className="h-6 w-6" />, title: "قادة المستقبل", description: "المهتمون بمسار المدير المالي" },
];

const outcomes = [
  "شهادات معتمدة تثبت كفاءتك",
  "تصنيف المشاركين وترتيبهم",
  "جوائز للفائزين المتميزين",
  "فرص للتواصل المهني",
];

export function AboutSection() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              عن المسابقة
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-6" data-testid="text-about-title">
              لماذا CFO Computation؟
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              مسابقة CFO Computation ليست مجرد منافسة عادية، بل هي منصة تقيس القدرة الحقيقية على التفكير المالي الاستراتيجي، وتحول المشاركين من منفذين للعمليات إلى صناع قرار حقيقيين.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              تم تصميم هذه المسابقة لسد فجوة حقيقية في سوق العمل المالي: الحاجة إلى محترفين يمكنهم تجاوز المعالجة الروتينية للبيانات وتنفيذ تحليل مالي استراتيجي يؤثر بشكل مباشر على قرارات الإدارة العليا.
            </p>

            <div className="space-y-3">
              {outcomes.map((outcome, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">{outcome}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {targetAudience.map((item, index) => (
              <Card key={index} className="border-card-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-br from-navy-500 to-navy-700 rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                رؤيتنا
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                أن نصبح المنصة الرائدة في المنطقة لاكتشاف وتطوير قادة المالية المستقبليين القادرين على اتخاذ قرارات استراتيجية مبنية على النمذجة المالية والتحليل المتقدم.
              </p>
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                رسالتنا
              </h3>
              <p className="text-white/80 text-lg leading-relaxed">
                تحدي المتخصصين الماليين من خلال سيناريوهات مالية حقيقية وغامرة تختبر دقتهم التحليلية، وعقليتهم الاستراتيجية، وقدرتهم على اتخاذ القرارات تحت الضغط.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
