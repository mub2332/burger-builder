import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-7af0f.firebaseio.com/"
});

export default instance;
