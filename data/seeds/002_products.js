
exports.seed = async function(knex) {
  await knex("products").del()
	await knex("products").insert([
		{id: 1, name: 'banana', description: 'fruit', market_location: 'wakanda', quantity: '3', price: '50', user_id: 1},
    {id: 2, name: 'goat', description: 'livestock', market_location: 'wakanda', quantity: '3', price: '50', user_id: 1},
    {id: 3, name: 'rug', description: 'newly woven carpet', market_location: 'wakanda', quantity: '3', price: '50', user_id: 1},
    {id: 4, name: 'sunflower seeds', description: 'seeds', market_location: 'wakanda', quantity: '3', price: '50', user_id: 1}
	])
};
