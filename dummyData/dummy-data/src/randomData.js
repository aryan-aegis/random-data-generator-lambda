import randomEmail from "./Utils/randomEmail.js";
import randomName from "./Utils/randomName.js";
import randomPhoneNumber from "./Utils/randomPhoneNumber.js";
import randomParagraph from "./Utils/randomParagraph.js";
import randomId from "./Utils/randomId.js";

const randomData = () => ({
  id: randomId(),
  name: randomName(),
  email: randomEmail(),
  phone: randomPhoneNumber(),
  bio: randomParagraph(),
});

export default randomData;
