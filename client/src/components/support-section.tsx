import { HelpCircle, FileText, Ticket, Bell, Mail, CheckCircle, Clock, AlertCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const kbArticles = [
  { id: 1, title: "كيفية التسجيل في المسابقة", views: 234, category: "التسجيل" },
  { id: 2, title: "متطلبات المشاركة والأهلية", views: 189, category: "الأهلية" },
  { id: 3, title: "شرح نظام التقييم والدرجات", views: 156, category: "التقييم" },
  { id: 4, title: "كيفية رفع الملفات والتسليمات", views: 142, category: "التسليم" },
  { id: 5, title: "الأسئلة الشائعة حول الجوائز", views: 128, category: "الجوائز" },
];

const sampleTickets = [
  { id: "TKT-001", subject: "استفسار عن موعد التسجيل", status: "مغلق", date: "2024-01-15" },
  { id: "TKT-002", subject: "مشكلة في رفع الملفات", status: "مفتوح", date: "2024-01-18" },
  { id: "TKT-003", subject: "طلب تمديد موعد التسليم", status: "قيد المراجعة", date: "2024-01-20" },
];

const automationSteps = [
  { icon: <Mail className="h-5 w-5" />, title: "التسجيل", description: "إرسال تأكيد التسجيل" },
  { icon: <Bell className="h-5 w-5" />, title: "الإشعار", description: "تنبيه ببدء المرحلة" },
  { icon: <FileText className="h-5 w-5" />, title: "التسليم", description: "تأكيد استلام الملفات" },
  { icon: <CheckCircle className="h-5 w-5" />, title: "التقييم", description: "إشعار نتائج التحكيم" },
];

export function SupportSection() {
  return (
    <section className="py-20 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <Badge variant="secondary" className="mb-4">
            الدعم والأتمتة
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-support-title">
            دعم متكامل على مدار الساعة
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            نظام دعم متطور يضمن تجربة سلسة للمتسابقين من التسجيل حتى إصدار الشهادات
          </p>
        </div>

        <Tabs defaultValue="kb" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-md mx-auto mb-8">
            <TabsTrigger value="kb" data-testid="tab-kb">قاعدة المعرفة</TabsTrigger>
            <TabsTrigger value="tickets" data-testid="tab-tickets">التذاكر</TabsTrigger>
            <TabsTrigger value="automation" data-testid="tab-automation">الأتمتة</TabsTrigger>
          </TabsList>

          <TabsContent value="kb">
            <Card className="border-card-border bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HelpCircle className="h-5 w-5 text-primary" />
                  قاعدة المعرفة
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4">
                  {kbArticles.map((article) => (
                    <div
                      key={article.id}
                      className="flex items-center justify-between gap-4 p-4 bg-card rounded-lg border border-border hover-elevate cursor-pointer"
                      data-testid={`kb-article-${article.id}`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <FileText className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">{article.title}</h4>
                          <p className="text-muted-foreground text-sm">{article.category}</p>
                        </div>
                      </div>
                      <Badge variant="secondary">{article.views} مشاهدة</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tickets">
            <Card className="border-card-border bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Ticket className="h-5 w-5 text-primary" />
                  لوحة التذاكر (تجريبي)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-right py-3 font-medium text-muted-foreground">رقم التذكرة</th>
                        <th className="text-right py-3 font-medium text-muted-foreground">الموضوع</th>
                        <th className="text-center py-3 font-medium text-muted-foreground">الحالة</th>
                        <th className="text-left py-3 font-medium text-muted-foreground">التاريخ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {sampleTickets.map((ticket) => (
                        <tr key={ticket.id} className="border-b border-border/50" data-testid={`ticket-row-${ticket.id}`}>
                          <td className="py-3 font-mono text-sm text-primary">{ticket.id}</td>
                          <td className="py-3 text-foreground">{ticket.subject}</td>
                          <td className="py-3 text-center">
                            <Badge
                              variant={
                                ticket.status === "مغلق"
                                  ? "secondary"
                                  : ticket.status === "مفتوح"
                                  ? "default"
                                  : "outline"
                              }
                              className="gap-1"
                            >
                              {ticket.status === "مغلق" && <CheckCircle className="h-3 w-3" />}
                              {ticket.status === "مفتوح" && <AlertCircle className="h-3 w-3" />}
                              {ticket.status === "قيد المراجعة" && <Clock className="h-3 w-3" />}
                              {ticket.status}
                            </Badge>
                          </td>
                          <td className="py-3 text-muted-foreground text-sm text-left" dir="ltr">
                            {ticket.date}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-muted-foreground text-sm text-center">
                    هذه معاينة تجريبية لنظام التذاكر. في النسخة النهائية، سيتمكن المتسابقون من فتح تذاكر دعم ومتابعتها.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="automation">
            <Card className="border-card-border bg-background">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bell className="h-5 w-5 text-primary" />
                  نظام الأتمتة والإشعارات
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative">
                  <div className="hidden md:block absolute top-1/2 right-[60px] left-[60px] h-1 bg-primary/20 -translate-y-1/2" />
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    {automationSteps.map((step, index) => (
                      <div key={index} className="relative text-center">
                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary text-primary-foreground flex items-center justify-center relative z-10 shadow-lg">
                          {step.icon}
                        </div>
                        <h4 className="font-bold text-foreground mb-1">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 grid md:grid-cols-2 gap-6">
                  <div className="p-6 bg-card rounded-xl border border-border">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Mail className="h-5 w-5 text-primary" />
                      إشعارات البريد الإلكتروني
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        تأكيد التسجيل الناجح
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        تذكير بمواعيد التسليم
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        إشعار باستلام الملفات
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        نتائج كل مرحلة
                      </li>
                    </ul>
                  </div>

                  <div className="p-6 bg-card rounded-xl border border-border">
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Bell className="h-5 w-5 text-primary" />
                      إشعارات لجنة التحكيم
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        إشعار بوصول تسليمات جديدة
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        تذكير بمواعيد التقييم
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        ملخص يومي للتقدم
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-teal-500" />
                        تقرير نهائي للمرحلة
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
