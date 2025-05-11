import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes for the portfolio - currently not needed for a static site
  app.get('/api/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', message: 'Portfolio API is running' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
