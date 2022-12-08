// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {
  worldNewsLeft,
  worldNewsRight,
  worldPopularNews,
} = require('../data.json')
export default function handler(req, res) {
  res.status(200).json({
    worldNewsLeft: worldNewsLeft,
    worldNewsRight: worldNewsRight,
    worldPopularNews: worldPopularNews,
  })
}
