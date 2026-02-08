import { z } from "zod";

export const verifyValidation = z.object({
  // email: z.string().email("Invalid email address"),
  verifyCode: z
    .string()
    .length(6, "Verification code must be 6 characters long"),
});
