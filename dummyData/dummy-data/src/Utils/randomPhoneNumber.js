import randomDigit from "./randomDigit.js";

const randomPhoneNumber = () => {
  const length = 10;
  let phoneNumber = "";
  for (let i = 0; i < length; i++) phoneNumber += randomDigit(i);
  return phoneNumber;
};
export default randomPhoneNumber;
