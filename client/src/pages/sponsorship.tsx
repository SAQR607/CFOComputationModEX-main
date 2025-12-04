import { SponsorshipSection } from "@/components/sponsorship-section";
import { Badge } from "@/components/ui/badge";

export default function Sponsorship() {
  return (
    <main className="pt-20">
      <section className="py-16 lg:py-20 bg-gradient-to-b from-navy-500 to-navy-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            رعاية وشركاء
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-sponsorship-page-title">
            كن شريكاً في نجاحنا
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            فرصة فريدة للتواصل مع نخبة من المتخصصين الماليين وقادة المستقبل في المنطقة
          </p>
        </div>
      </section>
      <SponsorshipSection />
    </main>
  );
}
