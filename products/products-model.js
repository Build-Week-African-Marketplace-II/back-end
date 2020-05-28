const db = require('../data/db-Config')

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
}

function find() {
    return db("products").select(
        "id",
        'name', 
        'description', 
        'market_location',
        'quantity',
        'price',
        'user_id'
        );
  }

  function findBy(filter) {
    return db("products").where(filter);
  }

  function add(product) {
    return db("products")
    .insert(product, "id")  
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
  }
  
  function findById(id) {
    return db("products").where({ id }).first();
  }
  
  function update(id, changes) {
    return db('products')
      .where({ id })
      .update(changes);
  }
  
  function remove(id) {
    return db('products')
        .where('id', id)
        .del();
  }