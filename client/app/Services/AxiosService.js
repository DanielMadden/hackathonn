export const api = axios.create({
  baseURL: "https://sickboiz-hackathon.herokuapp.com/api/",
  timeout: 3000,
  withCredentials: true
})
