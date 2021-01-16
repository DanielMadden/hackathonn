// UPDATE THIS BEFORE YOU PUSH TO GITHUB: https://sickboiz-hackathon.herokuapp.com/api/

export const api = axios.create({
  baseURL: "http://localhost:3001/api/",
  timeout: 3000,
  withCredentials: true,
})
