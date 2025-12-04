import { ClipboardCheck, Calculator, TrendingUp, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { competitionStages } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "clipboard-check": <ClipboardCheck className="h-8 w-8" />,
  "calculator": <Calculator className="h-8 w-8" />,
  "trending-up": <TrendingUp className="h-8 w-8" />,
  "users": <Users className="h-8 w-8" />,
};

export function StagesSection() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            مراحل المسابقة
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-stages-title">
            أربع مراحل نحو القمة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            رحلة تطوير مهني متكاملة تختبر مهاراتك المالية والاستراتيجية عبر تحديات متصاعدة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {competitionStages.map((stage, index) => (
            <Card
              key={stage.id}
              className="relative group overflow-visible border-card-border bg-card"
              data-testid={`card-stage-${stage.id}`}
            >
              <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg">
                {stage.id}
              </div>
              <CardContent className="p-6 pt-8">
                <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {iconMap[stage.icon]}
                </div>

                <h3 className="font-bold text-xl text-foreground mb-1">
                  {stage.titleAr}
                </h3>
                <p className="text-primary text-sm font-medium mb-3">
                  {stage.titleEn}
                </p>

                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {stage.descriptionAr}
                </p>

                <div className="space-y-2 mb-4">
                  {stage.requirements.map((req, reqIndex) => (
                    <div key={reqIndex} className="flex items-center gap-2 text-sm text-foreground/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 border-t border-border">
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <Badge variant="outline" className="text-xs">
                      وزن التقييم
                    </Badge>
                    <span className="text-primary font-bold text-lg">
                      {stage.scoringWeight}%
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
