import bcrypt from "bcryptjs";

 export function generateCrypt(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

export function compareCrypt(password, crypt) {
	return bcrypt.compareSync(password, crypt);
};


