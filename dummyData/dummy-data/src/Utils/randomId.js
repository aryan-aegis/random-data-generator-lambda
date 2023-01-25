import { randomBytes } from "crypto";

const randomId = (length = 8) => {
  let string = randomBytes(Math.ceil(length / 2)).toString("hex");
  if (string.length > length) string = string.substring(0, length);

  return string;
};

export default randomId;
