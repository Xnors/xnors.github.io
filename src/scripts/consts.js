// const SERVER_URL = "https://xnors.pythonanywhere.com"
// const SERVER_URL = "http://localhost:8000"
// const SERVER_URL = ""
const SERVER_URL = import.meta.env.VITE_SERVER_URL ?? ''


export { SERVER_URL }