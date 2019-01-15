const Dumpster = require('../../models/Dumpster');
const config = require('../../../config/config');
module.exports = (app) => {

  app.get('/freegan', (req, res, next) => {
    
    config.collection_name.find({}).toArray(function (err, result) {
      if (err) throw err;
  
      res.send(result);

    });
  });

  app.post('/freegan', function(req, res) {
   
    var dump = new Dumpster({
      lat : req.body.lat,
      lng : req.body.lng,
      unverified: req.body.unverified,
      description: req.body.description,
      author: req.body.author,
      address: req.body.address,
      created_at: req.body.created_at,
      updated_at: req.body.updated_at
    });

    dump.save(function(err){
      if (err) throw err;
      return res.send("Successfully inserted");
    })
  })
}