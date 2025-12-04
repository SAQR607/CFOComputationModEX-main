import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export function FAQSection() {
  return (
    <section className="py-20 lg:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            الأسئلة الشائعة
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-faq-title">
            إجابات لأسئلتكم
          </h2>
          <p className="text-muted-foreground text-lg">
            كل ما تحتاج معرفته عن المسابقة في مكان واحد
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={`faq-${faq.id}`}
              className="bg-background border border-border rounded-xl px-6 data-[state=open]:shadow-md transition-shadow"
              data-testid={`faq-item-${faq.id}`}
            >
              <AccordionTrigger className="text-right text-foreground font-medium py-4 hover:no-underline">
                {faq.questionAr}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4 leading-relaxed">
                {faq.answerAr}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
