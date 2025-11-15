import db from "../models";
import bcrypt from "bcryptjs";
import { v4 } from "uuid";
import canhochungcu from "../../data/canhochungcu.json";
import generateCode from "../../ultis/generateCode";
import parseVNDate from "../../ultis/parseVNDate";
import { where } from "sequelize";
require("dotenv").config();

const dataBody = canhochungcu;

const hashPassword = (password) =>
  bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const insertService = () =>
  new Promise(async (resolve, reject) => {
    try {
      dataBody.forEach(async (item) => {
        let postId = v4();
        let labelCode = generateCode(item?.attributes?.district);
        let attributesId = v4();
        let userId = v4();
        let imagesId = v4();
        let overviewId = v4();
        await db.Post.create({
          id: postId,
          star: item?.header?.star,
          title: item?.header?.title,
          labelCode,
          address: item?.attributes?.address,
          attributesId,
          categoryCode: "CHCC",
          description: JSON.stringify(item?.mainContent?.mainContentContent),
          userId,
          overviewId,
          imagesId,
        });
        await db.Attribute.create({
          id: attributesId,
          price: item?.header?.price,
          acreage: item?.header?.area,
          published: item?.header?.updatedAt,
          hashtag: item?.attributes?.hashtag,
        });
        await db.Image.create({
          id: imagesId,
          image: JSON.stringify(item?.images),
        });
        await db.Label.findOrCreate({
          where: { code: labelCode },
          defaults: {
            code: labelCode,
            value: item?.attributes?.district,
          },
        });
        await db.Overview.create({
          id: overviewId,
          code: item?.attributes?.hashtag,
          province: item?.attributes?.province,
          created: parseVNDate(item?.attributes?.datePosted),
          expired: parseVNDate(item?.attributes?.expiryDate) || null,
        });
        await db.User.create({
          id: userId,
          name: item?.contact?.nameContact,
          password: hashPassword("123456"),
          phone: item?.contact?.phoneContact,
          zalo: item?.contact?.zalo,
        });
      });
      resolve("Done.");
    } catch (error) {
      reject(error);
    }
  });
