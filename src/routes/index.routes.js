import { Router } from "express";
import Tareas from "../models/Tareas";
const router = Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/about", (req, res) => {
  res.render("about");
});

router.get("/edit", (req, res) => {
  res.render("edit");
});

router.post("/tareas/agregar", async (req, res) => {
  const tarea = Tareas(req.body);
  await tarea.save();

  res.redirect("/");
});

export default router;
