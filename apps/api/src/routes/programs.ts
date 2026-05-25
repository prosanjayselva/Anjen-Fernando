import { Router } from "express";
import { corporatePrograms } from "../data/corporatePrograms.js";

export const programsRouter = Router();

programsRouter.get("/programs", (req, res) => {
  const search = String(req.query.search ?? "").toLowerCase().trim();
  const category = String(req.query.category ?? "All");
  const format = String(req.query.format ?? "All");

  const filtered = corporatePrograms.filter((program) => {
    const searchMatch =
      search.length === 0 ||
      program.name.toLowerCase().includes(search) ||
      program.outcome.toLowerCase().includes(search);

    const categoryMatch = category === "All" || program.category === category;
    const formatMatch = format === "All" || program.recommendedFormats.includes(format as never);

    return searchMatch && categoryMatch && formatMatch;
  });

  return res.json({
    success: true,
    total: corporatePrograms.length,
    count: filtered.length,
    data: filtered
  });
});
