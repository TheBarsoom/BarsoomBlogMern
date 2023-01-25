// import { checkToken } from '../modules/jwt'
import { checkToken } from "../modules/jwt.js";
export const authMid = (req, res, next) => {
  try {
    const token = (req.headers.authorization || "").replace(/Bearer\s?/, "");
    if (!token) throw new Error("You do not have token ");
    if (token) {
      //    const decoded = checkToken (token)
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.userId = decoded.id;
    }

    next();
  } catch (error) {
    console.log(error);
  }
};
