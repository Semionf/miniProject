import axios from "axios";
const URLServer = "http://localhost:7126/api/Function1/";
export const getProducts = async () => {
  let response = await axios.get(`${URLServer}GET`);

  if (response.status === 200) {
    console.log(response.data);
    return Object.values(response.data);
  }
};

export const postMessage = async (UserMessage) => {
  console.log(UserMessage);
  await axios.post(`${URLServer}ADD/${UserMessage}`);
};

export const deleteProduct = async (ID) => {
  let strID = ID;
  console.log(strID);
  await axios.delete(`${URLServer}DELETE/${ID}`);
};
