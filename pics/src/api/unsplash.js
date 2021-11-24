import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID pdBPytEHG4Qzq9jv_xJnXSYJmYKN8jYJhTnG1eHve14",
  },
});
