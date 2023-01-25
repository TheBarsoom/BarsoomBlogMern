

// import { verify, sign } from "jsonwebtoken";
import jwt from 'jsonwebtoken'
export function createToken(data) {
	return jwt.sign(data, process.env.JWT_SECRET,{expiresIn:"3d"});
};

 export function checkToken(token) {
	try {
		return jwt.verify(token, process.env.JWT_SECRET);
	} catch (e) {
		return false;
	}
};
// export default {checkToken,createToken}