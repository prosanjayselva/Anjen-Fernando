import { Router } from "express";
import { enquirySchema } from "../lib/validation.js";

export const enquiryRouter = Router();

const memoryStore: unknown[] = [];

enquiryRouter.post("/enquiries", (req, res) => {
  const parsed = enquirySchema.safeParse(req.body);

  if (!parsed.success) {
    return res.status(400).json({
      success: false,
      errors: parsed.error.flatten()
    });
  }

  memoryStore.push({ ...parsed.data, createdAt: new Date().toISOString() });
  return res.status(201).json({ success: true, message: "Enquiry received" });
});

enquiryRouter.get("/enquiries", (_req, res) => {
  return res.json({ success: true, count: memoryStore.length, data: memoryStore });
});
