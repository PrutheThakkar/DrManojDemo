module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-source-wordpress/gatsby-browser.js'),
      options: {"plugins":[],"url":"https://drmanoj.studiosentientdemo.com/graphql","schema":{"timeout":30000,"queryDepth":15,"circularQueryLimit":5,"typePrefix":"Wp","perPage":100,"requestConcurrency":15,"previewRequestConcurrency":5},"verbose":true,"catchLinks":true},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]
