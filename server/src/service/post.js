import db from "../models";
const { Op, where } = require("sequelize");
import { v4 as generateId } from "uuid";
import moment from "moment";
import generateCode from "../../ultis/generateCode";

export const getPostsService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        include: [
          {
            model: db.Image,
            as: "images",
            attributes: ["image"],
          },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "zalo", "phone"],
          },
        ],
        attributes: ["id", "title", "star", "address", "description"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Get posts fail",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getPostsLimitService = (
  page,
  query,
  { priceNumber, areaNumber },
) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const queries = { ...query };
      if (priceNumber) queries.priceNumber = { [Op.between]: priceNumber };
      if (areaNumber) queries.areaNumber = { [Op.between]: areaNumber };
      const response = await db.Post.findAndCountAll({
        where: queries,
        raw: true,
        nest: true,
        offset: offset * +process.env.LIMIT,
        limit: +process.env.LIMIT, // chuyen string sang integer
        include: [
          {
            model: db.Image,
            as: "images",
            attributes: ["image"],
          },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
          {
            model: db.User,
            as: "user",
            attributes: ["name", "zalo", "phone"],
          },
        ],
        attributes: ["id", "title", "star", "address", "description"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Get posts fail",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const getNewPostService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        offset: 0,
        order: [["createdAt", "DESC"]],
        limit: +process.env.LIMIT, // chuyen string sang integer
        include: [
          {
            model: db.Image,
            as: "images",
            attributes: ["image"],
          },
          {
            model: db.Attribute,
            as: "attributes",
            attributes: ["price", "acreage", "published", "hashtag"],
          },
        ],
        attributes: ["id", "title", "star", "createdAt"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Get posts fail",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });

export const createNewPostSerVice = (body, userId) =>
  new Promise(async (resolve, reject) => {
    try {
      const attributesId = generateId();
      const imagesId = generateId();
      const overviewId = generateId();
      const labelCode = generateId(body.label);
      const hastag = `#${Math.floor(Math.random() * Math.pow(10, 6))}`;
      const currentDate = new Date();

      await db.Post.create({
        id: generateId(),
        title: body.title || null,
        labelCode,
        address: body.address || null,
        attributesId,
        categoryCode: body.categoryCode || null,
        description: body.description || null,
        userId,
        overviewId,
        imagesId,
        areaCode: body.areaCode || null,
        priceCode: body.priceCode || null,
        provinceCode: body.provinceCode || null,
        priceNumber: body.priceNumber,
        areaNumber: body.areaNumber,
      });
      await db.Attribute.create({
        id: attributesId,
        price:
          +priceNumber < 1
            ? `${priceNumber * 1000000} đồng/tháng`
            : `${priceNumber} triệu/tháng`,
        acreage: `${areaNumber} m2`,
        published: moment(new Date()).format("DD/MM/YYYY"),
        hashtag,
      });
      await db.Image.create({
        id: imagesId,
        image: JSON.stringify(body.images),
      });
      await db.Overview.create({
        id: overviewId,
        code: hastag,
        area: body.label,
        type: body?.category,
        target: body.target,
        created: currentDate,
        expired: currentDate.setDate(currentDate.getDate() + 10),
      });
      await db.Province.findOrCreate({
        where: {
          [Op.or]: [
            {
              value: body?.province?.replace("Thành phố ", ""),
            },
            {
              value: body?.province?.replace("Tỉnh ", ""),
            },
          ],
        },
        default: {
          code: body?.province?.include("Thành phố")
            ? generateCode(body?.province?.replace("Thành phố", ""))
            : generateCode(body?.province?.replace("Tỉnh", "")),
          value: body?.province?.include("Thành phố")
            ? body?.province?.replace("Thành phố")
            : body?.province?.replace("Tỉnh"),
        },
      });
      await db.Label.findOrCreate({
        where: { code: labelCode },
        defaults: {
          code: labelCode,
          value: body.label,
        },
      });
      resolve({
        err: 0,
        msg: "OK",
      });
    } catch (error) {
      reject(error);
    }
  });
