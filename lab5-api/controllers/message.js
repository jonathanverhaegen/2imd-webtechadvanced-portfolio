const Message = require("../models/message");

function store(req, res){

    let username = "Pikachu"
    let message = "nodejs isn’t hard, or is it?"

    let m = new Message();
    m.user = username;
    m.text = message;

    m.save((err, doc) => {
        res.json(doc);
    });

}



function getOne(req,res){
    let id = req.params.id;

  res.json({
    "message": `GETTING message with ID ${id}`,
  });
};


function getAll(req,res){

    let user = req.query.user;

    if(user != null){
        res.json({
            "message": `GETTING messages by ${user}`
        })
    }else{
        res.json({
            "message": "GETTING messages",
        })
    }

    
    
}


function update(req,res){
    let id = req.params.id;
    res.json({
        "message": `UPDATING a message with id ${id}`
    })
}

function deleteOne(req,res){
    let id = req.params.id;
    res.json({
        "message": `DELETING a message with id ${id}`
    })
}


module.exports.store = store;
module.exports.getOne = getOne;
module.exports.getAll = getAll;

module.exports.update = update;
module.exports.deleteOne = deleteOne;