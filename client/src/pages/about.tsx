import { Target, Users, TrendingUp, Award, CheckCircle, Lightbulb, Shield, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const targetAudience = [
  { icon: <TrendingUp className="h-6 w-6" />, title: "محللون ماليون", description: "متخصصون في التحليل المالي والتقارير المالية" },
  { icon: <Target className="h-6 w-6" />, title: "متخصصو FP&A", description: "خبراء التخطيط والتحليل المالي" },
  { icon: <Users className="h-6 w-6" />, title: "طلاب MBA", description: "طلاب ماجستير إدارة الأعمال والمالية" },
  { icon: <Award className="h-6 w-6" />, title: "قادة المستقبل", description: "المهتمون بمسار المدير المالي التنفيذي" },
];

const values = [
  { icon: <Lightbulb className="h-6 w-6" />, title: "الابتكار", description: "نسعى دائماً لتقديم تجارب تعليمية مبتكرة" },
  { icon: <Shield className="h-6 w-6" />, title: "النزاهة", description: "نلتزم بأعلى معايير الشفافية والعدالة" },
  { icon: <Target className="h-6 w-6" />, title: "التميز", description: "نهدف للتميز في كل ما نقدمه" },
  { icon: <Globe className="h-6 w-6" />, title: "الشمولية", description: "نرحب بالمشاركين من جميع الخلفيات" },
];

const outcomes = [
  "شهادات معتمدة تثبت كفاءتك المهنية",
  "تصنيف المشاركين وترتيبهم على مستوى المنطقة",
  "جوائز قيمة للفائزين المتميزين",
  "فرص للتواصل المهني مع كبار المسؤولين الماليين",
  "تجربة عملية في صنع القرارات المالية",
  "تطوير مهارات العرض والتقديم",
];

export default function About() {
  return (
    <main className="pt-20">
      <section className="py-16 lg:py-20 bg-gradient-to-b from-navy-500 to-navy-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            عن المسابقة
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-about-page-title">
            عن مسابقة CFO Computation
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            منصة تطوير مهني متكاملة لاكتشاف وتنمية قادة المالية المستقبليين
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-6">
                لماذا CFO Computation؟
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                مسابقة CFO Computation ليست مجرد منافسة عادية، بل هي منصة تقيس القدرة الحقيقية على التفكير المالي الاستراتيجي، وتحول المشاركين من منفذين للعمليات إلى صناع قرار حقيقيين.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                تم تصميم هذه المسابقة لسد فجوة حقيقية في سوق العمل المالي: الحاجة إلى محترفين يمكنهم تجاوز المعالجة الروتينية للبيانات وتنفيذ تحليل مالي استراتيجي يؤثر بشكل مباشر على قرارات الإدارة العليا.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                ما يميزنا هو الدمج بين مهارات النمذجة المالية العميقة، ومحاكاة القرارات الاستراتيجية، وبراعة العرض أمام مجلس الإدارة، مما يضمن تقييماً شاملاً للكفاءات الأساسية للمدير المالي المستقبلي.
              </p>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-bold text-foreground text-xl mb-6">
                نتائج المسابقة
              </h3>
              <div className="space-y-4">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-foreground">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              الفئة المستهدفة
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نستهدف المتخصصين والطلاب الذين يسعون للتميز في المجال المالي
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetAudience.map((item, index) => (
              <Card key={index} className="border-card-border bg-background">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    {item.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-gradient-to-br from-navy-500 to-navy-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">رؤيتنا</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                أن نصبح المنصة الرائدة في المنطقة لاكتشاف وتطوير قادة المالية المستقبليين القادرين على اتخاذ قرارات استراتيجية مبنية على النمذجة المالية والتحليل المتقدم.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">رسالتنا</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                تحدي المتخصصين الماليين من خلال سيناريوهات مالية حقيقية وغامرة تختبر دقتهم التحليلية، وعقليتهم الاستراتيجية، وقدرتهم على اتخاذ القرارات تحت الضغط.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              قيمنا
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              نلتزم بمجموعة من القيم الأساسية التي توجه كل ما نقوم به
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="border-card-border bg-card">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-500">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
