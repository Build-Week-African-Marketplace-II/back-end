const router = require("express").Router();

const Users = require("./users-model.js");
//const Products = require("../products/products-model");
const bc = require('bcryptjs')

router.get("/", (req, res) => {
    const requestOptions = {
        headers: { accept: 'application/json' },
      };
  console.log("token", req.decodedToken);

  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Users.findById(id)
    .then(users => {
      res.status(200).json(users);
    })

    .catch(err => {
      res.status(500).json({ error: 'user not received' })
    })
})



module.exports = router;