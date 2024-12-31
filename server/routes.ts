import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // Track link clicks
  app.post("/api/track-click", async (req, res) => {
    const { link, url } = req.body;
    
    // Log click for analytics
    console.log(`Click tracked - Link: ${link}, URL: ${url}`);
    
    // Here you would typically store this in a database
    // For now we just return success
    res.json({ success: true });
  });

  const httpServer = createServer(app);
  return httpServer;
}
