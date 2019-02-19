const path = require('path')

exports.getIndex = (req, res) => {
  return res.render('index.ejs')
}