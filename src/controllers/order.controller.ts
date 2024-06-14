import { Response } from "express";
import { RequestExt } from "../interfaces/req-ext.interface";
import { handleHttp } from "../utils/error.handle";

const getItems = (req: RequestExt, res: Response) => {
  try {
    res.send({
      data: "ESTO SOLO LO VE LAS PERSONA CON SESSION / JWT",
      user: req.user,
    });
  } catch (e) {
    handleHttp(res, "ERROR_GET_BLOGS");
  }
};

export { getItems };
