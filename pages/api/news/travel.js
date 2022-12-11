// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { allNews, Details } = require('../data.json')
export default function handler(req, res) {
  res.status(200).json({ allNews: allNews, Details: Details })
}
