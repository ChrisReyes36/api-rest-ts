import { Router } from "express";
import { readdirSync } from "fs";

const PATH_ROUTER = `${__dirname}/`;
const router = Router();

const cleanFileName = (fileName: string) => {
  const file = fileName.split(".").shift();
  return file;
};

readdirSync(PATH_ROUTER).forEach((fileName) => {
  if (fileName.includes(".routes.")) {
    const cleanName = cleanFileName(fileName);
    import(`./${cleanName}.routes`).then((moduleRouter) => {
      router.use(`/api/v1/${cleanName}`, moduleRouter.router);
    });
  }
});

export { router };
