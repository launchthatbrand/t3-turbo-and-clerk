import { router } from "../trpc";
import { authRouter } from "./auth";
import { postRouter } from "./post";
import { lessonRouter } from "./lesson";

export const appRouter = router({
  auth: authRouter,
  post: postRouter,
  lesson: lessonRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
