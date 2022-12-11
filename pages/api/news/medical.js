// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { covid ,rightSide,latestnews,latestNewsRight,mostViewed} = require('../data.json')
export default function handler(req, res) {
  res.status(200).json({ 
    covid:covid,
    rightSide:rightSide,
    latestnews:latestnews,
    latestNewsRight:latestNewsRight,
    mostViewed:mostViewed,

 })
}
