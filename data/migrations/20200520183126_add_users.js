
exports.up = function(knex) {
  return knex.schema
  .createTable('users', users=>{
      users.increments();
      users.string('username', 255).notNullable().unique();
      users.string('password', 255).notNullable();
      users.string('email').notNullable();
  })
  .createTable('products', products => {
    products.increments()
    products.string('name', 255).notNullable()
    products.string('description').notNullable()
    products.string('market_location').notNullable()
    products.string('quantity').notNullable()
    products.string('price').notNullable()
    products.integer('user_id')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('users')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
    return knex.schema
    .dropTableIfExists('products')
    .dropTableIfExists('users');
};
