import { ScoringSection } from "@/components/scoring-section";
import { Badge } from "@/components/ui/badge";

export default function Scoring() {
  return (
    <main className="pt-20">
      <section className="py-16 lg:py-20 bg-gradient-to-b from-navy-500 to-navy-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge className="mb-4 bg-white/20 text-white hover:bg-white/30">
            التحكيم والتقييم
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6" data-testid="text-scoring-page-title">
            نظام تقييم شامل وعادل
          </h1>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            خمسة معايير رئيسية تضمن تقييماً متوازناً للمهارات التقنية والاستراتيجية
          </p>
        </div>
      </section>
      <ScoringSection />
    </main>
  );
}
