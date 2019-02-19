const path = require('path')

exports.getIndex = (req, res) => {
  return res.render('index.ejs', { 
    pageTitle: 'Draft History',
    headerTitle: 'Draft History'
  })
}