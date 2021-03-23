function store(req, res){
    
    res.json({
      "status": "succes",
      "message": "was posted",
    });

}



function getOne(req,res){
    let id = req.params.id;

  res.json({
    "from": "jonathan",
    "to": "s1mple",
    "message": `juu de s1mple ${id}`,
  });
};

module.exports.store = store;
module.exports.getOne = getOne;