function store(req, res){
    
    res.json({
      "message": "POSTING a new message for user Pikachu",
    });

}



function getOne(req,res){
    let id = req.params.id;

  res.json({
    "message": `GETTING message with ID ${id}`,
  });
};


function getAll(req,res){
    res.json({
        "message": "GETTING messages",
    })
}


module.exports.store = store;
module.exports.getOne = getOne;
module.exports.getAll = getAll;