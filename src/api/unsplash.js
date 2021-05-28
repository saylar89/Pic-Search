import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID um80iF0g5l6iJr-q0tn16Qo6M-obZl0Pg7kosGJKAGg",
  },
});
