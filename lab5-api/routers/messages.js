const express = require("express");
const router = express.Router();

router.post('/', (req,res) => {
  res.json({
    "status": "succes",
    "message": "was posted",
  });
});

router.get('/:id', (req, res) => {
  let id = req.params.id;

  res.json({
    "from": "jonathan",
    "to": "s1mple",
    "message": `juu de s1mple ${id}`,
  })
})

module.exports = router;