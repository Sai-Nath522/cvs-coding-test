import { Router, Request, Response } from "express";
import { getMoviesByYear } from "../controller/movies.controller";

const router = Router();

router.get("/popular-movies", async (req: Request, res: Response) => {
  await getMoviesByYear(req, res);
});

export default router;