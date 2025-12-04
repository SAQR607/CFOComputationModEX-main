import { Link } from "wouter";
import { ArrowLeft, Award, TrendingUp, Users, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-bl from-navy-500 via-navy-600 to-navy-700 dark:from-navy-700 dark:via-navy-800 dark:to-navy-900 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-300 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="absolute inset-0">
        <svg className="absolute inset-0 w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-white" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/20 text-teal-300 text-sm font-medium mb-6">
              <Award className="h-4 w-4" />
              <span>مسابقة المدير المالي 2025</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6" data-testid="text-hero-title">
              تطوير قادة المالية
              <span className="block text-teal-400">المستقبليين</span>
            </h1>

            <p className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 max-w-xl" data-testid="text-hero-subtitle">
              منصة تحدي مهني تقيس قدرات صنع القرار المالي الحقيقية، وتحول المشاركين من منفذين إلى صناع قرار استراتيجي.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/stages">
                <Button
                  size="lg"
                  className="bg-teal-500 hover:bg-teal-600 text-white border-teal-500 gap-2 text-base px-8"
                  data-testid="button-hero-view-competition"
                >
                  عرض المسابقة
                  <ArrowLeft className="h-4 w-4" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm gap-2 text-base px-8"
                  data-testid="button-hero-request"
                >
                  طلب عرض
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-teal-400" data-testid="stat-stages">4</div>
                <div className="text-sm text-white/60">مراحل تنافسية</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-teal-400" data-testid="stat-criteria">5</div>
                <div className="text-sm text-white/60">معايير تقييم</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-teal-400" data-testid="stat-certificates">3</div>
                <div className="text-sm text-white/60">شهادات معتمدة</div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-navy-400/20 rounded-3xl blur-xl" />
              <div className="relative bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Target className="h-10 w-10 text-teal-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-1">تحليل دقيق</h3>
                    <p className="text-white/60 text-sm">25% من التقييم</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <TrendingUp className="h-10 w-10 text-teal-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-1">تفكير استراتيجي</h3>
                    <p className="text-white/60 text-sm">20% من التقييم</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Users className="h-10 w-10 text-teal-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-1">عرض تقديمي</h3>
                    <p className="text-white/60 text-sm">15% من التقييم</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 text-center">
                    <Award className="h-10 w-10 text-teal-400 mx-auto mb-3" />
                    <h3 className="text-white font-semibold mb-1">شهادات معتمدة</h3>
                    <p className="text-white/60 text-sm">للمتميزين</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-gradient-to-l from-teal-500/20 to-transparent rounded-xl border border-teal-500/20">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-teal-500/30 flex items-center justify-center">
                      <Award className="h-6 w-6 text-teal-400" />
                    </div>
                    <div>
                      <p className="text-white font-medium">تنظيم ModEX</p>
                      <p className="text-white/60 text-sm">خبراء النمذجة المالية</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
