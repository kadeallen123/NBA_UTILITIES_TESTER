const path = require('path')

const axios = require('axios')
const getTeam = require('../util/team-getter')

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
      const playerArray = data.resultSets[0].rowSet
      const teamData = getTeam(teamID)
      console.log(playerArray)
      if (playerArray === undefined) {
        console.log("it works")
        return res.render('team-roster', {
          pageTitle: 'Team Rofffster',
          headerTitle: 'Team Roster',
          players: [["false"]],
          teamID: teamID,
          teamTrue: false
        })
      } else {
        return res.render('team-roster', {
          pageTitle: 'Team Roster',
          headerTitle: 'Team Roster',
          players: playerArray,
          season: season,
          teamID: teamID,
          teamTrue: true,
          teamName: teamData.fullname
        })
      }
    })
    .catch(error => {
      console.log(error)
    })
  // return res.render('team-roster', {
  //   pageTitle: 'Team Roster',
  //   headerTitle: 'Team Roster'
  // })`
}

exports.getDraftHistory = async (req, res) => {
  return res.render('draft-history', {
    pageTitle: 'Draft History',
    headerTitle: 'Draft History'
  })
}