import { Download, Eye, Award, Medal, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { certificates } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  "Participation": <Award className="h-12 w-12" />,
  "Excellence": <Medal className="h-12 w-12" />,
  "Winner": <Trophy className="h-12 w-12" />,
};

const colorMap: Record<string, string> = {
  "Participation": "from-teal-500/20 to-teal-600/20 border-teal-500/30",
  "Excellence": "from-navy-500/20 to-navy-600/20 border-navy-500/30",
  "Winner": "from-yellow-500/20 to-yellow-600/20 border-yellow-500/30",
};

const iconColorMap: Record<string, string> = {
  "Participation": "text-teal-500",
  "Excellence": "text-navy-500 dark:text-navy-300",
  "Winner": "text-yellow-500",
};

export function CertificatesSection() {
  return (
    <section className="py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            الشهادات والجوائز
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-certificates-title">
            شهادات معتمدة للمتميزين
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            احصل على شهادة معتمدة تثبت كفاءتك في النمذجة المالية واتخاذ القرارات الاستراتيجية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <Card
              key={cert.id}
              className={`relative overflow-visible border-2 bg-gradient-to-br ${colorMap[cert.typeEn]} hover:shadow-lg transition-shadow`}
              data-testid={`card-certificate-${cert.id}`}
            >
              <CardContent className="p-6 text-center">
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-background flex items-center justify-center ${iconColorMap[cert.typeEn]}`}>
                  {iconMap[cert.typeEn]}
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {cert.typeAr}
                </h3>

                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {cert.description}
                </p>

                <div className="aspect-[3/4] bg-background rounded-lg border border-border mb-6 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-4 border-2 border-dashed border-muted rounded flex flex-col items-center justify-center gap-2">
                    {iconMap[cert.typeEn]}
                    <span className="text-muted-foreground text-xs">معاينة الشهادة</span>
                    <span className="font-bold text-foreground">{cert.typeAr}</span>
                    <span className="text-xs text-muted-foreground">ModEX - CFO Computation</span>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="flex-1 gap-2">
                        <Eye className="h-4 w-4" />
                        معاينة
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle className="text-right">{cert.typeAr}</DialogTitle>
                      </DialogHeader>
                      <div className="aspect-[3/4] bg-muted rounded-lg flex items-center justify-center border border-border">
                        <div className="text-center p-8">
                          <div className={`w-24 h-24 mx-auto mb-6 rounded-full bg-background flex items-center justify-center ${iconColorMap[cert.typeEn]}`}>
                            {iconMap[cert.typeEn]}
                          </div>
                          <h4 className="text-2xl font-bold text-foreground mb-2">
                            {cert.typeAr}
                          </h4>
                          <p className="text-muted-foreground mb-4">
                            تُمنح هذه الشهادة لـ
                          </p>
                          <div className="text-xl font-bold text-foreground mb-4 border-b-2 border-primary pb-2 inline-block px-8">
                            اسم المتسابق
                          </div>
                          <p className="text-muted-foreground text-sm mt-4">
                            {cert.description}
                          </p>
                          <div className="mt-8 flex items-center justify-center gap-8">
                            <div className="text-center">
                              <div className="w-16 h-0.5 bg-foreground mb-2" />
                              <span className="text-xs text-muted-foreground">توقيع المنظم</span>
                            </div>
                            <div className="text-center">
                              <div className="w-16 h-0.5 bg-foreground mb-2" />
                              <span className="text-xs text-muted-foreground">التاريخ</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button className="flex-1 gap-2" data-testid={`button-download-cert-${cert.id}`}>
                    <Download className="h-4 w-4" />
                    تحميل
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-background rounded-2xl p-8 border border-border">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">
            فئات الجوائز
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-teal-500/10 to-teal-600/10">
              <Trophy className="h-10 w-10 text-teal-500 mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">أفضل مدير مالي استراتيجي</h4>
              <p className="text-muted-foreground text-sm">للمتسابق الحاصل على أعلى درجة في التفكير الاستراتيجي</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-navy-500/10 to-navy-600/10">
              <Medal className="h-10 w-10 text-navy-500 dark:text-navy-300 mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">أفضل نموذج مالي</h4>
              <p className="text-muted-foreground text-sm">للمتسابق صاحب أفضل نموذج من حيث الهيكل والدقة</p>
            </div>
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/10">
              <Award className="h-10 w-10 text-yellow-500 mx-auto mb-3" />
              <h4 className="font-bold text-foreground mb-2">أفضل صانع قرار</h4>
              <p className="text-muted-foreground text-sm">للمتسابق الأكثر تميزاً في اتخاذ القرارات تحت الضغط</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
