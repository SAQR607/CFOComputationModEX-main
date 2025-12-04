import { Check, Crown, Medal, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { sponsorshipPackages } from "@/lib/data";
import { Link } from "wouter";

const tierIcons: Record<string, React.ReactNode> = {
  "Gold": <Crown className="h-8 w-8" />,
  "Silver": <Medal className="h-8 w-8" />,
  "Bronze": <Award className="h-8 w-8" />,
};

const tierColors: Record<string, { bg: string; border: string; icon: string; badge: string }> = {
  "Gold": {
    bg: "bg-gradient-to-br from-yellow-500/10 via-yellow-400/5 to-yellow-600/10",
    border: "border-yellow-500/30",
    icon: "text-yellow-500",
    badge: "bg-yellow-500/20 text-yellow-600 dark:text-yellow-400",
  },
  "Silver": {
    bg: "bg-gradient-to-br from-slate-400/10 via-slate-300/5 to-slate-500/10",
    border: "border-slate-400/30",
    icon: "text-slate-500",
    badge: "bg-slate-500/20 text-slate-600 dark:text-slate-400",
  },
  "Bronze": {
    bg: "bg-gradient-to-br from-orange-600/10 via-orange-500/5 to-orange-700/10",
    border: "border-orange-600/30",
    icon: "text-orange-600",
    badge: "bg-orange-600/20 text-orange-700 dark:text-orange-400",
  },
};

export function SponsorshipSection() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            رعاية وشركاء
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-sponsorship-title">
            كن شريكاً في نجاحنا
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            فرصة فريدة للتواصل مع نخبة من المتخصصين الماليين وقادة المستقبل في المنطقة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sponsorshipPackages.map((pkg) => {
            const colors = tierColors[pkg.tierEn];
            return (
              <Card
                key={pkg.id}
                className={`relative overflow-visible border-2 ${colors.bg} ${colors.border} ${
                  pkg.featured ? "scale-105 shadow-xl" : ""
                }`}
                data-testid={`card-sponsorship-${pkg.tierEn.toLowerCase()}`}
              >
                {pkg.featured && (
                  <div className="absolute -top-3 right-4">
                    <Badge className={colors.badge}>
                      الأكثر طلباً
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-0">
                  <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-background flex items-center justify-center ${colors.icon}`}>
                    {tierIcons[pkg.tierEn]}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">
                    {pkg.tierAr}
                  </h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    {pkg.tierEn} Package
                  </p>
                </CardHeader>
                <CardContent className="pt-6">
                  <ul className="space-y-3 mb-8">
                    {pkg.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${colors.badge}`}>
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-foreground text-sm">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact">
                    <Button
                      className="w-full"
                      variant={pkg.featured ? "default" : "outline"}
                      data-testid={`button-sponsor-${pkg.tierEn.toLowerCase()}`}
                    >
                      طلب الرعاية
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 lg:p-12 border border-border">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">
                لماذا ترعى CFO Computation؟
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                ستحظى بفرصة الوصول إلى جمهور متخصص من المحللين الماليين، ومديري التخطيط المالي، وقادة المالية المستقبليين الذين يبحثون عن التميز في مجالهم.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-muted-foreground text-sm">متسابق متوقع</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-muted-foreground text-sm">مشاهدة متوقعة</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-primary">50+</div>
                  <div className="text-muted-foreground text-sm">شركة مستهدفة</div>
                </div>
                <div className="text-center p-4 bg-background rounded-lg">
                  <div className="text-3xl font-bold text-primary">5</div>
                  <div className="text-muted-foreground text-sm">دول مشاركة</div>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-6 lg:p-8 border border-border">
              <h4 className="font-bold text-foreground mb-4">شركاؤنا</h4>
              <div className="grid grid-cols-3 gap-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-background rounded-lg flex items-center justify-center border border-border"
                  >
                    <span className="text-muted-foreground text-xs">شعار {i}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-sm mt-4 text-center">
                انضم إلى قائمة شركائنا المميزين
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
