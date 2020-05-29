const supertest = require('supertest')
const server = require('../api/server')
const db = require('../data/db-Config')

// beforeEach(async () => {
//     await db.seed.run()
// })

// afterAll(async () => {
//     await db.destroy()
// })

describe('register', () => {
    it("register success", async () => {
        const res = await supertest(server).post('/api/auth/register')
        .send({
            username: 'john2',
            password: 'test',
            email: 'lambda4@testing.com'
        })
        expect(res.status).toBe(201)
    })

    it('register fail', async () => {
        const res = await supertest(server).post('/api/auth/register')
        .send({
            username: 'blake',
        })
        expect(res.status).toBe(500) 
    })
})

describe('login', () => {
    it('login success', async () => {
        const res = await supertest(server).post('/api/auth/login')
        .send({
            username: 'john2',
            password: 'test',
            email: 'lambda4@testing.com'
    })
    expect(res.status).toBe(200)
    })

    it('login fail', async () => {
        const res = await supertest(server).post('/api/auth/login')
        .send({
            username: 'john2',
            password: 't3st',
            email: 'lambda4@testing.com'
        })
        expect(res.status).toBe(401)
    })
})