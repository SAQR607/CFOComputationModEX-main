import { CertificatesSection } from "@/components/certificates-section";
import { Badge } from "@/components/ui/badge";

export default function Certificates() {
  return (
    <main className="pt-20">
      <section className="py-16 lg:py-20 bg-gradient-to-b from-navy-500 to-navy-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            الشهادات والجوائز
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-certificates-page-title">
            شهادات معتمدة للمتميزين
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            احصل على شهادة معتمدة تثبت كفاءتك في النمذجة المالية واتخاذ القرارات الاستراتيجية
          </p>
        </div>
      </section>
      <CertificatesSection />
    </main>
  );
}
