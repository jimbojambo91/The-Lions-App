var express = require('express');
var router = express.Router();
var path = require('path');

router.use('/api/fixtures', require('./fixturesRouter.js'));
router.use('/api/teams', require('./teamsRouter.js'));
router.use('/api/myMatches', require('./myMatchesRouter.js'));

router.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../client/build/index.html'));
});

router.get('/about', function(req, res){
  res.json({data: "All about the Lions!"});
})

module.exports = router;