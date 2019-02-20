const path = require('path')

const axios = require('axios')

exports.getIndex = (req, res) => {
  return res.render('index.ejs', { 
    pageTitle: 'Draft History',
    headerTitle: false
  })
}

exports.getTeamRoster = async (req, res) => {
  // await axios.get(`http://stats.nba.com/stats/commonteamroster?Season=${season}&TeamID=16106127${teamID}`)
  //   .then((response) => {
  //     return res.render('team-roster', {
  //       pageTitle: 'Team Roster',
  //       headerTitle: 'Team Roster'
  //     })
  //   })
  return res.render('team-roster', {
    pageTitle: 'Team Roster',
    headerTitle: 'Team Roster'
  })
}