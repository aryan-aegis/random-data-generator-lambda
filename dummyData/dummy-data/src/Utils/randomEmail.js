import randomString from "./randomString.js";

const randomEmail = (length = Math.floor(Math.random() * 10) + 5) =>
  randomString(length) + "@gmail.com";

export default randomEmail;
