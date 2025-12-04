import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema } from "@shared/schema";
import { competitionStages, scoringCriteria, faqs, judges, sponsorshipPackages, certificates, journeySteps, socialLinks } from "./content";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  
  // Content API endpoints for CMS-style data
  app.get("/api/stages", (_req, res) => {
    res.json(competitionStages);
  });

  app.get("/api/scoring", (_req, res) => {
    res.json(scoringCriteria);
  });

  app.get("/api/faqs", (_req, res) => {
    res.json(faqs);
  });

  app.get("/api/judges", (_req, res) => {
    res.json(judges);
  });

  app.get("/api/sponsorship", (_req, res) => {
    res.json(sponsorshipPackages);
  });

  app.get("/api/certificates", (_req, res) => {
    res.json(certificates);
  });

  app.get("/api/journey", (_req, res) => {
    res.json(journeySteps);
  });

  app.get("/api/social", (_req, res) => {
    res.json(socialLinks);
  });

  // Contact form submission
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.status(201).json({ 
        success: true, 
        message: "تم إرسال رسالتك بنجاح",
        id: submission.id 
      });
    } catch (error) {
      res.status(400).json({ 
        success: false, 
        message: "حدث خطأ في إرسال الرسالة" 
      });
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact", async (_req, res) => {
    const submissions = await storage.getContactSubmissions();
    res.json(submissions);
  });

  return httpServer;
}
