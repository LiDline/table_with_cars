import { createTRPCRouter } from "~/server/api/trpc";
import { tableCarRouter } from "./routers/tableCar";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  carTable: tableCarRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
