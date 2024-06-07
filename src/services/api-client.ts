import axios from "axios"

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "3c301058ffab42eeac2d213d3d6c9bb3",
  },
})
