// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const {
  blogtext6,
  blogText7,
  blogText8,
  blogTextImge3,
  blogTextImge2,
  blogText1,
  blogImage1,
  blogText2,
  blogImage2,
  blogText3,
  blogText4,
  blogTitle,
  blogImages,
  blogText5,
  icon,
  blogImageType,
  } = require('../data.json')
  export default function handler(req, res) {
    res.status(200).json({
      blogText1:blogText1,
      blogImage1:blogImage1,
      blogText2:blogText2,
      blogImage2:blogImage2,
      blogText3:blogText3,
      blogText4:blogText4,
      blogTitle:blogTitle,
      blogImages:blogImages,
      blogText5:blogText5,
      icon:icon,
      blogImageType:blogImageType,
      blogtext6:blogtext6,
      blogText7:blogText7,
      blogText8:blogText8,
      blogTextImge2:blogTextImge2,
      blogTextImge3:blogTextImge3
    })
  }
  