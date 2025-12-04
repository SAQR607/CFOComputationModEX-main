import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/theme-provider";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ChatbotWidget } from "@/components/chatbot-widget";

import Home from "@/pages/home";
import About from "@/pages/about";
import Stages from "@/pages/stages";
import Journey from "@/pages/journey";
import Scoring from "@/pages/scoring";
import Certificates from "@/pages/certificates";
import Sponsorship from "@/pages/sponsorship";
import Support from "@/pages/support";
import Media from "@/pages/media";
import Contact from "@/pages/contact";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/stages" component={Stages} />
      <Route path="/journey" component={Journey} />
      <Route path="/scoring" component={Scoring} />
      <Route path="/certificates" component={Certificates} />
      <Route path="/sponsorship" component={Sponsorship} />
      <Route path="/support" component={Support} />
      <Route path="/media" component={Media} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="cfo-theme">
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="min-h-screen bg-background text-foreground">
            <Navigation />
            <Router />
            <Footer />
            <ChatbotWidget />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
