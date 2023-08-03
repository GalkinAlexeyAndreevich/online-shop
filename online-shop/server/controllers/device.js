import { v4 as uuidv4 } from "uuid";
import path from "path";
import { fileURLToPath } from "url";
import { Device, DevicesInfo } from "../models/models.js";
import { ApiError } from "../error/apiError.js";

export const create = async (req, res, next) => {
    try {
        const { name, price, brandId, typeId, info } = req.body;
        const { img } = req.files;
        let fileName = uuidv4() + ".jpg";

        const __filename = fileURLToPath(import.meta.url);
        const __dirname = path.dirname(__filename);
        img.mv(path.join(__dirname, "..", "static", fileName));

        const device = await Device.create({
            name,
            price,
            brandId,
            typeId,
            img: fileName,
        });

        if (info) {
            info = JSON.parse(info);
            info.forEach((i) => {
                DevicesInfo.create({
                    title: i.title,
                    description: i.description,
                    deviceId: device.id,
                });
            });
        }

        return res.json(device);
    } catch (e) {
        next(ApiError.badRequest(e.message));
    }
};

export const getAll = async (req, res) => {
    let { brandId, typeId, limit, page } = req.query; 
    page = page || 1;
    limit = limit || 9;
    let offset = page * limit - limit; // С какого устройства начинать на новой страницы (отступ)
    let devices;

    if (!brandId && !typeId) {
        devices = await Device.findAndCountAll({ limit, offset });
    }
    if (brandId && !typeId) {
        devices = await Device.findAndCountAll({
            where: { brandId },
            limit,
            offset,
        });
    }
    if (!brandId && typeId) {
        devices = await Device.findAndCountAll({
            where: { typeId },
            limit,
            offset,
        });
    }
    if (brandId && typeId) {
        devices = await Device.findAndCountAll({
            where: { brandId, typeId },
            limit,
            offset,
        });
    }
    return res.json(devices)
};

export const getOne = async (req, res) => {
    const { id } = req.params;
    const device = await Device.findOne({
        where: { id },
        include: [{ model: DevicesInfo, as: "info" }], // Возьмет информацию отностельно  deviceId
    });
    return res.json(device);
};
