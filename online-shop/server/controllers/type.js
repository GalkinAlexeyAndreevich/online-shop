import { Type } from "../models/models.js";
import { ApiError } from "../error/apiError.js";

export const create = async (req, res) => {
    const { name } = req.body;
    console.log(name);
    const type = await Type.create({ name });
    return res.json(type);
};

export const getAll = async (req, res) => {
    const types = await Type.findAll();
    return res.json(types);
};
