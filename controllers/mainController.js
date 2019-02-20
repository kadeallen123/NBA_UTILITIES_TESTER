const path = require('path')

const axios = require('axios')

exports.getIndex = (req, res) => {
  return res.render('index.ejs', { 
    pageTitle: 'Draft History',
    headerTitle: false
  })
}

exports.getTeamRoster = async (req, res) => {
  if (!req.query.teamID) {
    req.query.teamID = 37
    req.query.season = '1949-50'
  }
  const teamID = req.query.teamID
  const season = req.query.season
  await axios.get(`http://stats.nba.com/stats/commonteamroster?Season=${season}&TeamID=16106127${teamID}`)
    .then((response) => {
      const data = response.data
      const players = data.resultSets[0].rowSet
      return res.render('team-roster', {
        pageTitle: 'Team Roster',
        headerTitle: 'Team Roster',
        players: players
      })
    })
    .catch(error => {
      console.log(error)
    })
  // return res.render('team-roster', {
  //   pageTitle: 'Team Roster',
  //   headerTitle: 'Team Roster'
  // })`
}