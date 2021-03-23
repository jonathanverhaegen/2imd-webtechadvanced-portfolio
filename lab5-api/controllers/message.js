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

function update(req,res){
    let id = req.params.id;
    res.json({
        "message": `UPDATING a message with id ${id}`
    })
}


module.exports.store = store;
module.exports.getOne = getOne;
module.exports.getAll = getAll;
module.exports.update = update;