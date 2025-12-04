import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="pt-20">
      <div className="min-h-[80vh] flex items-center justify-center bg-background px-4">
        <div className="text-center max-w-lg">
          <div className="text-9xl font-bold text-primary/20 mb-4">404</div>
          <h1 className="text-3xl font-bold text-foreground mb-4" data-testid="text-404-title">
            الصفحة غير موجودة
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            عذراً، لم نتمكن من العثور على الصفحة التي تبحث عنها. ربما تم نقلها أو حذفها.
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Link href="/">
              <Button className="gap-2" data-testid="button-go-home">
                <Home className="h-4 w-4" />
                الصفحة الرئيسية
              </Button>
            </Link>
            <Button variant="outline" onClick={() => window.history.back()} className="gap-2" data-testid="button-go-back">
              <ArrowLeft className="h-4 w-4" />
              العودة للخلف
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
