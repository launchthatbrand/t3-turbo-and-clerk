import { router } from "../trpc";
import { entryRouter } from "./entry";
import { authRouter } from "./auth";
import { userRouter } from "./user";
import { postRouter } from "./post";

export const appRouter = router({
  entry: entryRouter,
  user: userRouter,
  auth: authRouter,
  post: postRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
