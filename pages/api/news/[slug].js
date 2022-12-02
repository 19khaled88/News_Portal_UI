// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { news } = require('../data.json')
export default function handler(req, res) {
  const result = news.filter((element)=>element.slug === req.query.slug)
  res.status(200).json({ news:result})
}
