import { sql } from "drizzle-orm";
import { pgTable, text, varchar, integer, boolean, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

// Competition Stage Schema
export interface CompetitionStage {
  id: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  requirements: string[];
  scoringWeight: number;
  icon: string;
}

// Scoring Criteria Schema
export interface ScoringCriteria {
  id: number;
  nameAr: string;
  nameEn: string;
  weight: number;
  icon: string;
}

// FAQ Schema
export interface FAQ {
  id: number;
  questionAr: string;
  answerAr: string;
  category: string;
}

// Judge Schema
export interface Judge {
  id: number;
  nameAr: string;
  titleAr: string;
  imageUrl: string;
  bio?: string;
}

// Sponsorship Package Schema
export interface SponsorshipPackage {
  id: number;
  tierAr: string;
  tierEn: string;
  benefits: string[];
  price?: string;
  featured: boolean;
}

// Certificate Schema
export interface Certificate {
  id: number;
  typeAr: string;
  typeEn: string;
  description: string;
  previewUrl: string;
  downloadUrl: string;
}

// Contact Form Submission Schema
export const contactSubmissions = pgTable("contact_submissions", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  phone: text("phone"),
  message: text("message").notNull(),
  createdAt: timestamp("created_at").defaultNow(),
});

export const insertContactSchema = createInsertSchema(contactSubmissions).pick({
  name: true,
  email: true,
  phone: true,
  message: true,
});

export type InsertContact = z.infer<typeof insertContactSchema>;
export type ContactSubmission = typeof contactSubmissions.$inferSelect;

// Participant Journey Step
export interface JourneyStep {
  id: number;
  titleAr: string;
  descriptionAr: string;
  icon: string;
}

// Social Media Link
export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}
