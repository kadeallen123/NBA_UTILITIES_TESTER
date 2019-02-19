const path = require('path')

exports.getIndex = (req, res) => {
  return res.render('index.ejs', { 
    pageTitle: 'Draft History',
    headerTitle: false
  })
}

exports.getTeamRoster = async (req, res) => {
  res.render('team-roster', {
    pageTitle: 'Team Roster',
    headerTitle: 'Team Roster'
  })
}