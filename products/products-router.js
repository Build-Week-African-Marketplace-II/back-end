const router = require('express').Router()
const Products = require('./products-model')

router.get('/', (req, res) => {
    Products.find()
    .then(product => {
        res.json(product)
    })
    .catch(err => res.send(err))
})

 router.get('/:id', (req, res) => {
     const id = req.params.id

     Products.findById(id)
    .then(product => {
      res.status(200).json(product);
    })

    .catch(err => {
      res.status(500).json({ error: 'user not received' })
    })
 })

 router.post('/', (req, res) => {
     const product = req.body
     Products.add(product)
        .then(product => {
            res.status(200).json(product)
        })
        .catch(err => {
            res.status(500).json({ error: 'Something went wrong', err})
        })
 })

 router.put('/:id', (req, res) => {
     const changes = req.body

     Products.update(req.params.id, changes)
        .then(product => {
            if(product) {
                Products.findById(req.params.id)
                    .then(product => {
                        res.status(200).json(product)
                    })
                    .catch(err => {
                        res.status(500).json({
                            error: 'Something went wrong'
                        })
                    })
            }else {
                res.status(404).json({
                    error: 'Product not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: 'Something went wrong'
            })
        })
 })

 router.delete('/:id', (req, res) => {
     Products.remove(req.params.id)
        .then(product => {
            if(product) {
                res.status(201).json({
                    message: 'Product deleted'
                })
            }else {
                res.status(404).json({
                    error: 'Product not found'
                })
            }
        })
        .catch(err => {
            res.status(500).json({
                error: 'Something went wrong'
            })
        })
 })

 module.exports = router