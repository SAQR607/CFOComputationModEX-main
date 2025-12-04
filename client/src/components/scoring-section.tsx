import { Target, Brain, Layers, Lightbulb, Presentation } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { scoringCriteria, judges } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "target": <Target className="h-6 w-6" />,
  "brain": <Brain className="h-6 w-6" />,
  "layers": <Layers className="h-6 w-6" />,
  "lightbulb": <Lightbulb className="h-6 w-6" />,
  "presentation": <Presentation className="h-6 w-6" />,
};

const colors = [
  "bg-teal-500",
  "bg-navy-500",
  "bg-teal-600",
  "bg-navy-600",
  "bg-teal-700",
];

export function ScoringSection() {
  return (
    <section className="py-20 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            التحكيم والتقييم
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-scoring-title">
            نظام تقييم شامل وعادل
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            خمسة معايير رئيسية تضمن تقييماً متوازناً للمهارات التقنية والاستراتيجية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <Card className="border-card-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl">توزيع معايير التقييم</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative w-64 h-64 mx-auto mb-8">
                  <svg viewBox="0 0 100 100" className="w-full h-full transform -rotate-90">
                    {scoringCriteria.reduce((acc, criteria, index) => {
                      const prevTotal = scoringCriteria
                        .slice(0, index)
                        .reduce((sum, c) => sum + c.weight, 0);
                      const dashArray = criteria.weight;
                      const dashOffset = 100 - prevTotal;
                      
                      acc.push(
                        <circle
                          key={criteria.id}
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={index === 0 ? "#00A99D" : index === 1 ? "#0B2A4A" : index === 2 ? "#00877e" : index === 3 ? "#09223c" : "#00655e"}
                          strokeWidth="20"
                          strokeDasharray={`${dashArray} ${100 - dashArray}`}
                          strokeDashoffset={dashOffset}
                          className="transition-all duration-500"
                        />
                      );
                      return acc;
                    }, [] as React.ReactNode[])}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-foreground">100%</div>
                      <div className="text-muted-foreground text-sm">المجموع</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  {scoringCriteria.map((criteria, index) => (
                    <div
                      key={criteria.id}
                      className="flex items-center gap-4"
                      data-testid={`scoring-criteria-${criteria.id}`}
                    >
                      <div className={`w-4 h-4 rounded-sm ${colors[index]}`} />
                      <div className="flex-1 flex items-center justify-between gap-2">
                        <span className="text-foreground font-medium">
                          {criteria.nameAr}
                        </span>
                        <span className="text-primary font-bold">
                          {criteria.weight}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {scoringCriteria.map((criteria) => (
                <div
                  key={criteria.id}
                  className="p-4 bg-card rounded-xl border border-card-border"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      {iconMap[criteria.icon]}
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground">
                        {criteria.nameAr}
                      </h4>
                      <p className="text-xs text-muted-foreground">
                        {criteria.nameEn}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 mt-3">
                    <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-primary rounded-full transition-all duration-500"
                        style={{ width: `${criteria.weight}%` }}
                      />
                    </div>
                    <span className="text-sm font-bold text-primary min-w-[40px] text-left">
                      {criteria.weight}%
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <Card className="border-card-border bg-card">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  مثال على حساب الدرجات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-right py-2 font-medium text-muted-foreground">المعيار</th>
                        <th className="text-center py-2 font-medium text-muted-foreground">الوزن</th>
                        <th className="text-center py-2 font-medium text-muted-foreground">الدرجة</th>
                        <th className="text-left py-2 font-medium text-muted-foreground">النتيجة</th>
                      </tr>
                    </thead>
                    <tbody>
                      {scoringCriteria.map((criteria) => {
                        const sampleScore = 85 + Math.floor(Math.random() * 10);
                        const weightedScore = (criteria.weight * sampleScore / 100).toFixed(1);
                        return (
                          <tr key={criteria.id} className="border-b border-border/50">
                            <td className="py-2 font-medium text-foreground">{criteria.nameAr}</td>
                            <td className="py-2 text-center text-muted-foreground">{criteria.weight}%</td>
                            <td className="py-2 text-center text-foreground">{sampleScore}</td>
                            <td className="py-2 text-left font-bold text-primary">{weightedScore}</td>
                          </tr>
                        );
                      })}
                      <tr className="bg-muted/50">
                        <td colSpan={3} className="py-2 font-bold text-foreground">المجموع النهائي</td>
                        <td className="py-2 text-left font-bold text-primary text-lg">88.5</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            لجنة التحكيم
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {judges.map((judge) => (
              <div
                key={judge.id}
                className="text-center"
                data-testid={`judge-card-${judge.id}`}
              >
                <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">
                    {judge.nameAr.charAt(0)}
                  </span>
                </div>
                <h4 className="font-bold text-foreground mb-1">{judge.nameAr}</h4>
                <p className="text-muted-foreground text-sm">{judge.titleAr}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
