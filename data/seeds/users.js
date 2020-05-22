exports.seed = async function(knex) {
	await knex("users").truncate()
	await knex("users").insert([
		{ username: "james", password: "abc123", email: 'lambda@test.com'},
		{ username: "mike", password: "wasd54", email: 'lambda1@testing.com' },
		{ username: "tevin", password: "cba321", email: 'lambda3@testing.com' },
		{ username: "rae", password: "987zyx", email: 'lambda2@testing.com' },
	])
}
