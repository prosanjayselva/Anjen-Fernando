import { z } from "zod";

export const enquirySchema = z.object({
  audience: z.enum(["corporate", "institution"]),
  name: z.string().min(2),
  organisation: z.string().min(2),
  designation: z.string().min(2),
  mobile: z.string().min(8),
  email: z.string().email(),
  programInterest: z.string().min(2),
  message: z.string().min(5)
});

export type EnquiryInput = z.infer<typeof enquirySchema>;
