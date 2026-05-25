import axios from "axios";

export type ProgramCategory =
  | "People & Team Dynamics"
  | "Communication"
  | "Thinking & Performance"
  | "Leadership & Ownership"
  | "New Joinee & Onboarding"
  | "Sales & Customer Facing";

export type ProgramFormat =
  | "Power Session (3 Hours)"
  | "Half Day Intensive (5 Hours)"
  | "Full Day Workshop (8 Hours)"
  | "Multi-Session Program (Weekly/Monthly)";

export type CorporateProgram = {
  name: string;
  category: ProgramCategory;
  outcome: string;
  recommendedFormats: ProgramFormat[];
};

export const deliveryFormats: Array<{
  name: ProgramFormat;
  duration: string;
  focus: string;
}> = [
  {
    name: "Power Session (3 Hours)",
    duration: "3 Hours",
    focus: "One focused skill - high energy, immediate impact"
  },
  {
    name: "Half Day Intensive (5 Hours)",
    duration: "5 Hours",
    focus: "Deeper transformation for team dynamics or leadership"
  },
  {
    name: "Full Day Workshop (8 Hours)",
    duration: "8 Hours",
    focus: "Complete team experience covering multiple skills"
  },
  {
    name: "Multi-Session Program (Weekly/Monthly)",
    duration: "Weekly / Monthly",
    focus: "Long-term culture building and team development"
  }
];

const api = axios.create({
  baseURL: "http://localhost:4000/api"
});

export async function fetchPrograms(params: {
  search?: string;
  category?: string;
  format?: string;
}) {
  const { data } = await api.get("/programs", { params });
  return data as { success: boolean; total: number; count: number; data: CorporateProgram[] };
}
