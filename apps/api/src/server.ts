import cors from "cors";
import express from "express";
import { enquiryRouter } from "./routes/enquiries.js";
import { programsRouter } from "./routes/programs.js";

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", enquiryRouter);
app.use("/api", programsRouter);

app.listen(PORT, () => {
  console.log(`Game2Grow API running on http://localhost:${PORT}`);
});
