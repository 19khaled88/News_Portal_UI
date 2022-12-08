// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {
  homeTopTtems,
  slider,
  sideInfo,
  WorldNews,
  popularNews,
  editorChoice,
  footer,
  deepFooter,
} = require('../data.json')
export default function handler(req, res) {
  res.status(200).json({
    homeTop: homeTopTtems,
    slider: slider,
    sideInfo: sideInfo,
    WorldNews: WorldNews,
    popularNews: popularNews,
    editorChoice: editorChoice,
    footer: footer,
    deepFooter: deepFooter,
  })
}
