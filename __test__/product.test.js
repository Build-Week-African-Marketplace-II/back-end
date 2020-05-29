const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db-Config')

describe('Products test', () => {
    it('Products add sucessfully', async () => {
        const res = await supertest(server).post('/api/products')
        .send({
            name: 'orange',
            description: 'Its orange',
            market_location: 'trees',
            quantity: '10',
            price: '25',
            user_id: 1
        })
        expect(res.status).toBe(200)
    })

    it("should return json", async () => {
        const res = await supertest(server)
          .post("/api/products")
          .send({ name: "grapes", description: "theyre sweet", quantity: "35", price:"10", user_id: 1 });
        expect(res.type).toBe("application/json");
      });
})