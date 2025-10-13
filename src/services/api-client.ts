import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
    key:'a2e437a961a748a28c428e0b05f84f90'
  }
})

