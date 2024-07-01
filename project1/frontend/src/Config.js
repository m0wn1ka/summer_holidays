const prod =  'https://poll-an-issue-backend.onrender.com'

const dev = "http://localhost:3001"

export const config1 = process.env.NODE_ENV === ("development" )?   dev:prod;