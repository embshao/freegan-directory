const Dumpster = require('../../models/Dumpster');

module.exports = (app) => {
  app.get('/api/dumpsters', (req, res, next) => {
    Dumpster.find({}, function(err, dumps) {
        if (err) throw err;
        res.send(dumps);
    });
  });
}