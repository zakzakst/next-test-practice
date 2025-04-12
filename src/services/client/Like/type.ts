import * as z from "zod";

export const InputSchema = z.object({
  postId: z.number().positive().int(),
});

export type PostLikeRequest = z.infer<typeof InputSchema>;

export type PostLikeResponse = {
  id: number;
};
