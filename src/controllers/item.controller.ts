import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {
  deleteCar,
  getCar,
  getCars,
  insertCar,
  updateCar,
} from "../services/item.services";

const getItems = async (req: Request, res: Response) => {
  try {
    const response = await getCars();
    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEMS", error);
  }
};

const postItem = async ({ body }: Request, res: Response) => {
  try {
    const responseItem = await insertCar(body);
    res.status(201).send(responseItem);
  } catch (error) {
    handleHttp(res, "ERROR_CREATE_ITEM", error);
  }
};

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getCar(id);
    const data = response ? response : "NOT_FOUND";
    res.status(200).send(data);
  } catch (error) {
    handleHttp(res, "ERROR_GET_ITEM", error);
  }
};

const updateItem = async ({ params, body }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await updateCar(id, body);
    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "ERROR_UPDATE_ITEM", error);
  }
};

const deleteItem = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const response = await deleteCar(id);
    res.status(200).send(response);
  } catch (error) {
    handleHttp(res, "ERROR_DELETE_ITEM", error);
  }
};

export { getItems, postItem, getItem, updateItem, deleteItem };
